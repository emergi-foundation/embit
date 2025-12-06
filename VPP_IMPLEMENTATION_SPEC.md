# Virtual Power Plant (VPP) Implementation Specification

## Executive Summary

This document specifies the implementation of a Virtual Power Plant (VPP) using Embit-enabled Android devices. The system will aggregate device power consumption and implement demand response capabilities to participate in grid balancing and provide grid services.

**Key Capabilities:**
- Automated demand response based on grid signals
- User-configurable participation levels
- Real-time power load reduction verification
- Integration with utility/VPP aggregator platforms
- Decentralized coordination option

**Estimated Aggregate Capacity:**
- Per device: 2-15W reduction capability
- 10,000 devices: 20-150kW aggregate capacity
- 1M devices: 2-15MW aggregate capacity

---

## 1. Technical Feasibility Assessment

### 1.1 Android Power Control Capabilities

#### ✅ What's Possible (Without Root):

**A. Battery Saver Mode Control**
```kotlin
// API 21+ (Android 5.0+)
val powerManager = getSystemService(Context.POWER_SERVICE) as PowerManager

// Request user to enable battery saver
val intent = Intent(Settings.ACTION_BATTERY_SAVER_SETTINGS)
startActivity(intent)

// Check if battery saver is enabled
val isPowerSaveMode = powerManager.isPowerSaveMode
```

**B. App Standby Buckets (Android 9+)**
```kotlin
// Influence app priority to reduce background activity
val usageStatsManager = getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
val standbyBucket = usageStatsManager.appStandbyBucket
// Can request restrictive bucket to reduce background load
```

**C. Work Manager Job Scheduling**
```kotlin
// Defer energy-intensive tasks to optimal times
val constraints = Constraints.Builder()
    .setRequiresBatteryNotLow(true)
    .setRequiresCharging(true) // Only run when charging
    .build()

val work = OneTimeWorkRequestBuilder<IntensiveTask>()
    .setConstraints(constraints)
    .build()
```

**D. Sync Adapter Control**
```kotlin
// Disable/enable automatic sync
ContentResolver.setMasterSyncAutomatically(false)
ContentResolver.setSyncAutomatically(account, authority, false)
```

**E. Network Type Control**
```kotlin
// Force WiFi-only mode to reduce cellular radio power
val connectivityManager = getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
// Set network preference for background tasks
```

**F. Screen Brightness (With Permission)**
```kotlin
// Reduce screen brightness temporarily
val layoutParams = window.attributes
layoutParams.screenBrightness = 0.3f // 30% brightness
window.attributes = layoutParams
```

**G. Adaptive Charging Hints (Android 10+)**
```kotlin
// Provide charging schedule hints to OS
// Note: Limited API, mostly OEM-specific
val batteryManager = getSystemService(Context.BATTERY_SERVICE) as BatteryManager
```

#### ❌ What's NOT Possible (Without Root):

- Direct control of charging hardware (start/stop charging)
- Control of charge current/voltage
- Direct CPU throttling (beyond battery saver mode)
- Disable essential system services
- Force deep sleep mode

#### 🔧 What's Possible With OEM APIs:

**Samsung Knox API:**
```kotlin
// Requires Samsung Knox license
val edm = EnterpriseDeviceManager.getInstance(context)
val batteryPolicy = edm.batteryPolicy

// Can set charging limits
batteryPolicy.setBatteryLevelLimit(80) // Stop charging at 80%
```

**OnePlus/Oppo:**
- Some devices support charging limit APIs
- Typically requires system-level permissions

### 1.2 Realistic Power Reduction Capabilities

**Per-Device Load Reduction Potential:**

| Strategy | Power Reduction | Duration | User Impact |
|----------|----------------|----------|-------------|
| Battery Saver Mode | 5-10W | Hours | Low-Medium |
| Background Sync Disable | 1-3W | Hours | Low |
| Screen Dim | 1-2W | Minutes | Medium |
| Defer Background Tasks | 2-5W | Hours | Low |
| WiFi-Only Mode | 1-2W | Hours | Low |
| **Aggressive Combo** | **8-15W** | **1-4 hours** | **Medium** |

**Aggregate Capacity Examples:**
- 10,000 devices × 10W avg = **100kW**
- 100,000 devices × 10W avg = **1MW**
- 1,000,000 devices × 10W avg = **10MW**

For context: A typical grid-scale VPP starts at 1MW capacity.

---

## 2. VPP Architecture Design

### 2.1 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Grid Operators / ISOs                     │
│              (CAISO, PJM, ERCOT, NYISO, etc.)               │
└────────────────────┬────────────────────────────────────────┘
                     │ Market Signals / Demand Response Events
                     ↓
┌─────────────────────────────────────────────────────────────┐
│              VPP Aggregation Platform (Backend)              │
│  ┌──────────────┬───────────────┬────────────────────────┐  │
│  │ Grid Signal  │  Device       │  Measurement &         │  │
│  │ Processor    │  Orchestrator │  Verification Engine   │  │
│  └──────────────┴───────────────┴────────────────────────┘  │
│  ┌──────────────┬───────────────┬────────────────────────┐  │
│  │ User         │  Compensation │  Analytics &           │  │
│  │ Management   │  Engine       │  Forecasting           │  │
│  └──────────────┴───────────────┴────────────────────────┘  │
└────────────────────┬────────────────────────────────────────┘
                     │ WebSocket / Firebase Cloud Messaging
                     ↓
┌─────────────────────────────────────────────────────────────┐
│                  Embit Device Agents (Android)               │
│  ┌──────────────┬───────────────┬────────────────────────┐  │
│  │ Control      │  Monitoring & │  User Consent          │  │
│  │ Executor     │  Telemetry    │  Manager               │  │
│  └──────────────┴───────────────┴────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │          Device Hardware (Battery, Radio, CPU)        │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Communication Protocols

#### Option A: Centralized (Firebase/WebSocket)

**Advantages:**
- Simple implementation
- Reliable delivery
- Real-time bidding
- Centralized control

**Technology Stack:**
- Firebase Cloud Messaging for push notifications
- WebSocket for real-time bidirectional communication
- gRPC for efficient telemetry upload

#### Option B: Decentralized (Blockchain/IPFS)

**Advantages:**
- No single point of failure
- Transparent participation
- Trustless coordination
- Tokenized incentives

**Technology Stack:**
- Ethereum/Polygon smart contracts for coordination
- IPFS for signal distribution
- Chainlink oracles for grid data
- ERC-20 tokens for rewards

#### Recommended: Hybrid Approach

Use centralized for initial deployment (faster, simpler), with decentralized option as future enhancement.

---

## 3. Device-Side Implementation

### 3.1 Control Executor Module

**File:** `shared/src/androidMain/kotlin/eco/emergi/embit/domain/vpp/VppControlExecutor.kt`

```kotlin
package eco.emergi.embit.domain.vpp

import android.content.Context
import android.os.PowerManager
import android.provider.Settings
import kotlinx.coroutines.flow.Flow

/**
 * Executes VPP demand response actions on the device
 */
interface VppControlExecutor {
    /**
     * Execute a demand response event
     * @param event The DR event with target reduction and duration
     * @return Actual power reduction achieved
     */
    suspend fun executeDemandResponse(event: DemandResponseEvent): PowerReduction

    /**
     * Restore normal operations after DR event
     */
    suspend fun restoreNormalOperation()

    /**
     * Get current device power consumption
     */
    suspend fun getCurrentPowerConsumption(): PowerMeasurement

    /**
     * Observe real-time power consumption
     */
    fun observePowerConsumption(): Flow<PowerMeasurement>
}

data class DemandResponseEvent(
    val eventId: String,
    val startTime: Long,
    val endTime: Long,
    val targetReductionWatts: Double,
    val priority: DemandResponsePriority,
    val compensationCentsPerKwh: Double
)

enum class DemandResponsePriority {
    LOW,      // Optional participation
    MEDIUM,   // Recommended participation
    HIGH,     // Strongly requested
    CRITICAL  // Emergency event
}

data class PowerReduction(
    val baselinePowerWatts: Double,
    val actualPowerWatts: Double,
    val reductionWatts: Double,
    val reductionPercentage: Double,
    val actionsApplied: List<PowerControlAction>
)

sealed class PowerControlAction {
    object EnableBatterySaver : PowerControlAction()
    object DisableSync : PowerControlAction()
    data class DimScreen(val brightness: Float) : PowerControlAction()
    object DeferBackgroundTasks : PowerControlAction()
    object ForceWifiOnly : PowerControlAction()
    object LimitCpuUsage : PowerControlAction()
}

data class PowerMeasurement(
    val timestamp: Long,
    val voltageMillivolts: Int,
    val currentMicroamps: Int,
    val powerWatts: Double,
    val batteryPercentage: Int,
    val isCharging: Boolean
)
```

**Implementation:**

```kotlin
class AndroidVppControlExecutor(
    private val context: Context,
    private val powerManager: PowerManager,
    private val userPreferences: VppUserPreferences
) : VppControlExecutor {

    private var baselinePower: Double = 0.0
    private val appliedActions = mutableListOf<PowerControlAction>()

    override suspend fun executeDemandResponse(
        event: DemandResponseEvent
    ): PowerReduction {
        // Check user consent and participation level
        if (!userPreferences.isVppEnabled()) {
            return PowerReduction(0.0, 0.0, 0.0, 0.0, emptyList())
        }

        val participationLevel = userPreferences.getParticipationLevel()
        if (event.priority.ordinal < participationLevel.minimumPriority.ordinal) {
            return PowerReduction(0.0, 0.0, 0.0, 0.0, emptyList())
        }

        // Measure baseline power
        baselinePower = getCurrentPowerConsumption().powerWatts

        // Apply control actions based on priority and user preferences
        val actionsToApply = selectControlActions(
            event.targetReductionWatts,
            event.priority,
            participationLevel
        )

        appliedActions.clear()
        var totalReduction = 0.0

        for (action in actionsToApply) {
            val success = applyControlAction(action)
            if (success) {
                appliedActions.add(action)
                totalReduction += estimateActionReduction(action)
            }
        }

        // Wait a bit for actions to take effect
        delay(5000)

        // Measure actual power after reduction
        val actualPower = getCurrentPowerConsumption().powerWatts
        val actualReduction = baselinePower - actualPower

        return PowerReduction(
            baselinePowerWatts = baselinePower,
            actualPowerWatts = actualPower,
            reductionWatts = actualReduction,
            reductionPercentage = (actualReduction / baselinePower) * 100,
            actionsApplied = appliedActions.toList()
        )
    }

    private fun selectControlActions(
        targetWatts: Double,
        priority: DemandResponsePriority,
        participation: ParticipationLevel
    ): List<PowerControlAction> {
        val actions = mutableListOf<PowerControlAction>()

        // Always start with least invasive actions
        if (participation.allowBackgroundControl) {
            actions.add(PowerControlAction.DisableSync)
            actions.add(PowerControlAction.DeferBackgroundTasks)
        }

        if (participation.allowNetworkControl) {
            actions.add(PowerControlAction.ForceWifiOnly)
        }

        // More aggressive for higher priority events
        if (priority >= DemandResponsePriority.MEDIUM) {
            if (participation.allowBatterySaver) {
                actions.add(PowerControlAction.EnableBatterySaver)
            }
        }

        if (priority >= DemandResponsePriority.HIGH) {
            if (participation.allowScreenDim) {
                actions.add(PowerControlAction.DimScreen(0.3f))
            }
        }

        return actions
    }

    private suspend fun applyControlAction(action: PowerControlAction): Boolean {
        return when (action) {
            PowerControlAction.EnableBatterySaver -> {
                enableBatterySaverMode()
            }
            PowerControlAction.DisableSync -> {
                disableBackgroundSync()
            }
            is PowerControlAction.DimScreen -> {
                dimScreen(action.brightness)
            }
            PowerControlAction.DeferBackgroundTasks -> {
                deferBackgroundTasks()
            }
            PowerControlAction.ForceWifiOnly -> {
                forceWifiOnly()
            }
            PowerControlAction.LimitCpuUsage -> {
                limitCpuUsage()
            }
        }
    }

    private fun enableBatterySaverMode(): Boolean {
        // Note: Cannot programmatically enable battery saver without user action
        // Must prompt user or use accessibility service (requires permission)
        // For now, return false unless already enabled
        return powerManager.isPowerSaveMode
    }

    private fun disableBackgroundSync(): Boolean {
        try {
            ContentResolver.setMasterSyncAutomatically(false)
            return true
        } catch (e: Exception) {
            return false
        }
    }

    private fun deferBackgroundTasks(): Boolean {
        // Cancel all non-critical WorkManager tasks
        WorkManager.getInstance(context).cancelAllWorkByTag("deferrable")
        return true
    }

    private fun forceWifiOnly(): Boolean {
        // This is app-specific, not system-wide
        // Set preference for background tasks to use WiFi only
        return true
    }

    private fun dimScreen(brightness: Float): Boolean {
        // This requires activity context and permission
        // Would need to be called from UI layer
        return false // Not possible from service
    }

    private fun limitCpuUsage(): Boolean {
        // Can only limit own app's CPU usage
        // Set thread priority to background
        android.os.Process.setThreadPriority(
            android.os.Process.THREAD_PRIORITY_BACKGROUND
        )
        return true
    }

    override suspend fun getCurrentPowerConsumption(): PowerMeasurement {
        val batteryManager = context.getSystemService(Context.BATTERY_SERVICE) as BatteryManager

        val voltage = batteryManager.getIntProperty(
            BatteryManager.BATTERY_PROPERTY_VOLTAGE_NOW
        ) // microvolts

        val current = batteryManager.getIntProperty(
            BatteryManager.BATTERY_PROPERTY_CURRENT_NOW
        ) // microamps (negative when discharging)

        val power = (voltage / 1000.0) * (abs(current) / 1000000.0) // Watts

        val batteryPct = batteryManager.getIntProperty(
            BatteryManager.BATTERY_PROPERTY_CAPACITY
        )

        val isCharging = batteryManager.isCharging

        return PowerMeasurement(
            timestamp = System.currentTimeMillis(),
            voltageMillivolts = voltage,
            currentMicroamps = current,
            powerWatts = power,
            batteryPercentage = batteryPct,
            isCharging = isCharging
        )
    }

    override fun observePowerConsumption(): Flow<PowerMeasurement> = flow {
        while (currentCoroutineContext().isActive) {
            emit(getCurrentPowerConsumption())
            delay(1000) // 1 Hz sampling
        }
    }

    override suspend fun restoreNormalOperation() {
        // Restore previous settings
        if (appliedActions.contains(PowerControlAction.DisableSync)) {
            ContentResolver.setMasterSyncAutomatically(true)
        }

        appliedActions.clear()
    }

    private fun estimateActionReduction(action: PowerControlAction): Double {
        return when (action) {
            PowerControlAction.EnableBatterySaver -> 7.0 // ~7W
            PowerControlAction.DisableSync -> 2.0 // ~2W
            is PowerControlAction.DimScreen -> 1.5 // ~1.5W
            PowerControlAction.DeferBackgroundTasks -> 3.0 // ~3W
            PowerControlAction.ForceWifiOnly -> 1.0 // ~1W
            PowerControlAction.LimitCpuUsage -> 2.0 // ~2W
        }
    }
}
```

### 3.2 User Consent & Preferences

```kotlin
data class ParticipationLevel(
    val name: String,
    val minimumPriority: DemandResponsePriority,
    val allowBatterySaver: Boolean,
    val allowBackgroundControl: Boolean,
    val allowNetworkControl: Boolean,
    val allowScreenDim: Boolean,
    val maxDurationMinutes: Int
) {
    companion object {
        val NONE = ParticipationLevel(
            name = "None",
            minimumPriority = DemandResponsePriority.CRITICAL,
            allowBatterySaver = false,
            allowBackgroundControl = false,
            allowNetworkControl = false,
            allowScreenDim = false,
            maxDurationMinutes = 0
        )

        val MINIMAL = ParticipationLevel(
            name = "Minimal - Critical Events Only",
            minimumPriority = DemandResponsePriority.CRITICAL,
            allowBatterySaver = true,
            allowBackgroundControl = true,
            allowNetworkControl = false,
            allowScreenDim = false,
            maxDurationMinutes = 30
        )

        val MODERATE = ParticipationLevel(
            name = "Moderate - Most Events",
            minimumPriority = DemandResponsePriority.MEDIUM,
            allowBatterySaver = true,
            allowBackgroundControl = true,
            allowNetworkControl = true,
            allowScreenDim = false,
            maxDurationMinutes = 120
        )

        val AGGRESSIVE = ParticipationLevel(
            name = "Aggressive - All Events",
            minimumPriority = DemandResponsePriority.LOW,
            allowBatterySaver = true,
            allowBackgroundControl = true,
            allowNetworkControl = true,
            allowScreenDim = true,
            maxDurationMinutes = 240
        )
    }
}

interface VppUserPreferences {
    fun isVppEnabled(): Boolean
    fun setVppEnabled(enabled: Boolean)

    fun getParticipationLevel(): ParticipationLevel
    fun setParticipationLevel(level: ParticipationLevel)

    fun getMinimumCompensationCents(): Double
    fun setMinimumCompensationCents(cents: Double)

    fun isEventTypeEnabled(priority: DemandResponsePriority): Boolean
    fun setEventTypeEnabled(priority: DemandResponsePriority, enabled: Boolean)
}
```

---

## 4. Server-Side Orchestration Platform

### 4.1 Architecture Components

**A. Grid Signal Processor**
- Integrates with ISO/RTO APIs (CAISO, PJM, etc.)
- Receives real-time pricing signals
- Detects grid stress events
- Processes demand response dispatch signals

**B. Device Orchestrator**
- Maintains registry of enrolled devices
- Tracks device availability and capacity
- Dispatches DR events to devices
- Collects telemetry and verifies response

**C. Measurement & Verification (M&V) Engine**
- Establishes baseline consumption per device
- Measures actual load reduction during events
- Calculates verified capacity
- Generates settlement reports

**D. Compensation Engine**
- Tracks device participation
- Calculates earnings per event
- Manages payment disbursement
- Provides earnings transparency

### 4.2 Backend Technology Stack

```yaml
Infrastructure:
  - Cloud: AWS / Google Cloud / Azure
  - Container Orchestration: Kubernetes
  - Message Queue: Apache Kafka / RabbitMQ
  - Real-time Communication: WebSocket / Firebase Cloud Messaging

Services:
  - API Gateway: Kong / AWS API Gateway
  - Application Server: Node.js / Go / Kotlin Backend
  - Database: PostgreSQL (device registry, events)
  - Time-series DB: InfluxDB / TimescaleDB (telemetry)
  - Cache: Redis

Integrations:
  - Grid APIs: CAISO OASIS, PJM Data Miner, ERCOT API
  - Payment: Stripe / PayPal
  - Analytics: Grafana / Metabase
```

### 4.3 OpenADR 2.0b Integration

**OpenADR** (Open Automated Demand Response) is the industry-standard protocol for VPP communication with utilities.

```xml
<!-- Example OpenADR Event Signal -->
<oadrDistributeEvent>
  <eiEvent>
    <eventDescriptor>
      <eventID>DR_EVENT_2025_001</eventID>
      <modificationNumber>1</modificationNumber>
      <priority>2</priority>
      <eiMarketContext>
        <marketContext>http://MarketContext1</marketContext>
      </eiMarketContext>
      <createdDateTime>2025-12-01T10:00:00Z</createdDateTime>
    </eventDescriptor>

    <eiActivePeriod>
      <properties>
        <dtstart>
          <date-time>2025-12-01T14:00:00Z</date-time>
        </dtstart>
        <duration>
          <duration>PT2H</duration> <!-- 2 hours -->
        </duration>
      </properties>
    </eiActivePeriod>

    <eiEventSignals>
      <eiEventSignal>
        <signalName>LOAD_CONTROL</signalName>
        <signalType>level</signalType>
        <currentValue>
          <payloadFloat>
            <value>0.85</value> <!-- Reduce to 85% of baseline -->
          </payloadFloat>
        </currentValue>
      </eiEventSignal>
    </eiEventSignals>
  </eiEvent>
</oadrDistributeEvent>
```

**Kotlin OpenADR Client:**

```kotlin
class OpenAdrClient(
    private val vtnUrl: String,
    private val venId: String
) {
    suspend fun pollForEvents(): List<DemandResponseEvent> {
        val client = HttpClient()
        val response = client.get("$vtnUrl/oadrPoll") {
            parameter("venID", venId)
        }

        // Parse OpenADR XML response
        val events = parseOpenAdrEvents(response.bodyAsText())

        return events.map { oadrEvent ->
            DemandResponseEvent(
                eventId = oadrEvent.eventId,
                startTime = oadrEvent.startTime.toEpochMillis(),
                endTime = oadrEvent.endTime.toEpochMillis(),
                targetReductionWatts = calculateTargetReduction(oadrEvent.signal),
                priority = mapPriority(oadrEvent.priority),
                compensationCentsPerKwh = 15.0 // From tariff
            )
        }
    }
}
```

---

## 5. Data Models & API Contracts

### 5.1 Device Registration

```kotlin
// POST /api/vpp/devices/register
data class VppDeviceRegistration(
    val deviceId: String,
    val userId: String,
    val model: String,
    val osVersion: String,
    val batteryCapacityMah: Int,
    val participationLevel: ParticipationLevel,
    val location: GeoLocation,
    val capabilities: DeviceCapabilities
)

data class DeviceCapabilities(
    val canControlBatterySaver: Boolean,
    val canControlSync: Boolean,
    val canControlNetwork: Boolean,
    val canMonitorPowerConsumption: Boolean,
    val estimatedMaxReductionWatts: Double
)

// Response
data class VppEnrollmentResponse(
    val enrollmentId: String,
    val status: EnrollmentStatus,
    val aggregatorId: String,
    val utilityProgram: String?
)
```

### 5.2 Event Dispatch

```kotlin
// WebSocket message from server to device
data class VppEventDispatch(
    val event: DemandResponseEvent,
    val forecast: LoadForecast,
    val compensation: CompensationEstimate
)

data class LoadForecast(
    val baselineWatts: Double,
    val targetWatts: Double,
    val confidence: Double
)

data class CompensationEstimate(
    val estimatedEarningsCents: Double,
    val rateCentsPerKwh: Double,
    val estimatedDurationMinutes: Int
)

// Response from device
data class VppEventResponse(
    val eventId: String,
    val accepted: Boolean,
    val reason: String?,
    val estimatedReductionWatts: Double?
)
```

### 5.3 Telemetry Upload

```kotlin
// POST /api/vpp/telemetry (batched)
data class VppTelemetryBatch(
    val deviceId: String,
    val eventId: String?,
    val measurements: List<PowerMeasurement>,
    val actions: List<PowerControlAction>
)
```

### 5.4 Settlement & Compensation

```kotlin
// GET /api/vpp/settlements/{userId}
data class VppSettlement(
    val settlementId: String,
    val userId: String,
    val periodStart: Long,
    val periodEnd: Long,
    val events: List<EventSettlement>,
    val totalEarningsCents: Double,
    val paymentStatus: PaymentStatus
)

data class EventSettlement(
    val eventId: String,
    val timestamp: Long,
    val durationMinutes: Int,
    val baselineKwh: Double,
    val actualKwh: Double,
    val reductionKwh: Double,
    val verifiedReduction: Boolean,
    val earningsCents: Double
)
```

---

## 6. User Experience & Interface

### 6.1 VPP Enrollment Flow

```
1. User navigates to Settings → Virtual Power Plant
2. Shows educational content:
   - "Help stabilize the grid and earn rewards"
   - "Your device will automatically reduce power during high demand"
   - "You stay in control - set your comfort level"
3. User selects participation level:
   - Minimal (Critical events only, ~$2-5/month)
   - Moderate (Most events, ~$5-15/month)
   - Aggressive (All events, ~$15-30/month)
4. User reviews what will be controlled
5. User accepts terms and enrolls
6. Device registers with VPP platform
7. User sees enrollment confirmation and dashboard
```

### 6.2 VPP Dashboard UI

**Composable Screen:**

```kotlin
@Composable
fun VppDashboardScreen(
    viewModel: VppViewModel
) {
    val uiState by viewModel.uiState.collectAsState()

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        // Enrollment Status Card
        VppStatusCard(
            isEnrolled = uiState.isEnrolled,
            participationLevel = uiState.participationLevel,
            onEnroll = { viewModel.enrollInVpp() },
            onUnenroll = { viewModel.unenrollFromVpp() }
        )

        Spacer(modifier = Modifier.height(16.dp))

        // Earnings Summary
        EarningsCard(
            totalEarnings = uiState.totalEarningsCents,
            thisMonth = uiState.earningsThisMonth,
            pendingPayment = uiState.pendingPayment
        )

        Spacer(modifier = Modifier.height(16.dp))

        // Active Event (if any)
        uiState.activeEvent?.let { event ->
            ActiveEventCard(
                event = event,
                currentReduction = uiState.currentReductionWatts,
                estimatedEarnings = uiState.eventEarningsEstimate
            )
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Event History
        Text("Recent Events", style = MaterialTheme.typography.titleMedium)
        LazyColumn {
            items(uiState.recentEvents) { event ->
                EventHistoryItem(event = event)
            }
        }
    }
}

@Composable
fun ActiveEventCard(
    event: DemandResponseEvent,
    currentReduction: Double,
    estimatedEarnings: Double
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.primaryContainer
        )
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(
                    "Active Grid Event",
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.primary
                )
                Icon(
                    imageVector = Icons.Default.ElectricBolt,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary
                )
            }

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                "Reducing power consumption to help stabilize the grid",
                style = MaterialTheme.typography.bodyMedium
            )

            Spacer(modifier = Modifier.height(16.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Column {
                    Text("Current Reduction", style = MaterialTheme.typography.labelSmall)
                    Text(
                        "${currentReduction.roundToInt()}W",
                        style = MaterialTheme.typography.titleLarge,
                        color = MaterialTheme.colorScheme.primary
                    )
                }

                Column {
                    Text("Estimated Earnings", style = MaterialTheme.typography.labelSmall)
                    Text(
                        "$${estimatedEarnings / 100}",
                        style = MaterialTheme.typography.titleLarge,
                        color = MaterialTheme.colorScheme.tertiary
                    )
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            LinearProgressIndicator(
                progress = calculateProgress(event),
                modifier = Modifier.fillMaxWidth()
            )

            Text(
                "Ends in ${calculateTimeRemaining(event)}",
                style = MaterialTheme.typography.labelSmall
            )
        }
    }
}
```

### 6.3 Notifications

```kotlin
class VppNotificationManager(private val context: Context) {

    fun notifyEventStarting(event: DemandResponseEvent) {
        val notification = NotificationCompat.Builder(context, CHANNEL_VPP)
            .setSmallIcon(R.drawable.ic_vpp)
            .setContentTitle("Grid event starting")
            .setContentText("Reducing power for ${event.duration} minutes. Est. earnings: $${event.compensation}")
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setAutoCancel(true)
            .build()

        NotificationManagerCompat.from(context).notify(EVENT_NOTIFICATION_ID, notification)
    }

    fun notifyEventComplete(
        event: DemandResponseEvent,
        actualReduction: Double,
        earnings: Double
    ) {
        val notification = NotificationCompat.Builder(context, CHANNEL_VPP)
            .setSmallIcon(R.drawable.ic_vpp)
            .setContentTitle("Grid event complete")
            .setContentText("Reduced ${actualReduction}W. You earned $${earnings}!")
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setAutoCancel(true)
            .build()

        NotificationManagerCompat.from(context).notify(EVENT_COMPLETE_ID, notification)
    }
}
```

---

## 7. Business & Regulatory Considerations

### 7.1 Revenue Streams

**A. Capacity Payments**
- Utility/ISO pays for enrolled capacity ($/kW-month)
- Typical: $5-20/kW-month
- Example: Device with 10W capacity = $0.05-0.20/month baseline

**B. Energy Payments**
- Pay for actual energy reduction during events ($/kWh)
- Typical: $0.50-2.00/kWh reduced
- Example: 10W for 2 hours = 0.02 kWh × $1.00 = $0.02/event

**C. Performance Bonuses**
- Bonus for exceeding reduction targets
- Bonus for high availability
- Bonus for fast response time

**Revenue Sharing Model:**
- 70% to device owner
- 20% to Embit platform
- 10% to grid operator/utility partnership

### 7.2 Regulatory Requirements

**FERC Order 2222 (US)**
- Allows distributed energy resources (DERs) to participate in wholesale markets
- Minimum aggregation size: Typically 100kW
- Must meet performance requirements
- Telemetry and M&V requirements

**California CPUC Programs**
- Emergency Load Reduction Program (ELRP)
- Demand Response Auction Mechanism (DRAM)
- Base Interruptible Program (BIP)

**ISO/RTO Requirements**
- Registration as Demand Response Provider
- Measurement & Verification plan approval
- Baseline methodology certification
- Performance penalties for non-compliance

### 7.3 Insurance & Liability

**Required Coverage:**
- General liability insurance
- Cyber liability insurance
- Errors & omissions insurance
- Device damage protection

**User Agreement Terms:**
- Embit not liable for device damage during DR events
- User can opt-out at any time
- User retains override control
- Compensation not guaranteed

---

## 8. Implementation Roadmap

### Phase 1: Foundation (Months 1-3)

**Objectives:**
- Build device-side control infrastructure
- Implement basic power monitoring
- Create user consent framework

**Deliverables:**
- VppControlExecutor implementation
- Power measurement module
- User preferences UI
- Basic telemetry upload

**Success Metrics:**
- Accurate power measurement (±10%)
- Reliable control action execution (>95%)
- User enrollment rate >5%

### Phase 2: Backend Platform (Months 4-6)

**Objectives:**
- Build VPP orchestration backend
- Implement M&V engine
- Create compensation system

**Deliverables:**
- Device registry and management API
- Event dispatch system
- Telemetry processing pipeline
- Settlement and payment system
- Admin dashboard

**Success Metrics:**
- Event dispatch latency <5 seconds
- M&V accuracy >90%
- Payment processing reliability >99.9%

### Phase 3: Pilot Program (Months 7-9)

**Objectives:**
- Recruit 1,000 pilot users
- Partner with local utility or aggregator
- Validate technical and business model

**Deliverables:**
- Pilot enrollment campaign
- Utility partnership agreement
- Real DR event participation
- Performance reporting

**Success Metrics:**
- Enroll 1,000 devices (10kW aggregate)
- >80% event participation rate
- Verified load reduction within 20% of forecast
- Positive user satisfaction (>4/5 stars)

### Phase 4: Scale & Certification (Months 10-12)

**Objectives:**
- ISO/RTO certification
- Scale to 10,000+ devices
- Multi-market expansion

**Deliverables:**
- FERC Order 2222 compliance
- ISO registration (CAISO, PJM, or ERCOT)
- OpenADR 2.0b certification
- Multi-state regulatory approvals

**Success Metrics:**
- 10,000+ enrolled devices (100kW+ aggregate)
- ISO market participation approval
- Revenue positive operation
- <1% user churn rate

### Phase 5: Decentralization (Year 2)

**Objectives:**
- Implement blockchain-based coordination
- Launch VPP token economy
- Enable peer-to-peer energy markets

**Deliverables:**
- Smart contract VPP coordinator
- ERC-20 reward token
- Decentralized grid signal oracles
- DAO governance structure

**Success Metrics:**
- 50,000+ devices (500kW+ aggregate)
- Decentralized coordination >50% of events
- Token market liquidity >$100k
- Revenue $50k+/month

---

## 9. Technical Challenges & Mitigations

### Challenge 1: Android Power Control Limitations

**Problem:** Cannot directly control charging hardware or force deep sleep.

**Mitigation:**
- Focus on background app control and sync management
- Partner with OEMs (Samsung Knox, OnePlus) for enhanced APIs
- Explore root/custom ROM options for power users
- Over-provision capacity (assume 50% effectiveness)

### Challenge 2: Power Measurement Accuracy

**Problem:** Android battery APIs provide limited accuracy for instantaneous power.

**Mitigation:**
- Use statistical averaging over time windows
- Calibrate per-device with machine learning
- Cross-reference with grid-side meters (for aggregates)
- Set conservative baselines

### Challenge 3: User Adoption & Trust

**Problem:** Users may be skeptical of battery drain or performance impact.

**Mitigation:**
- Transparent communication about actions taken
- User-controlled participation levels
- Visible earnings dashboard
- Performance guarantees (no more than X% battery drain)
- Money-back guarantee for first month

### Challenge 4: Regulatory Compliance

**Problem:** Complex and varying regulations across jurisdictions.

**Mitigation:**
- Start with single-state pilot (California or Texas)
- Partner with established VPP aggregator
- Hire regulatory consultant
- Build compliance into platform from day 1

### Challenge 5: M&V Verification

**Problem:** Difficult to prove device-level load reduction.

**Mitigation:**
- Statistical baseline methodology (CAISO 10-day lookback)
- Aggregate-level verification at substation
- Third-party M&V auditor
- Machine learning baseline forecasting

---

## 10. Cost Estimate & ROI Analysis

### Development Costs

| Component | Cost | Timeline |
|-----------|------|----------|
| Mobile app development (VPP features) | $80,000 | 3 months |
| Backend platform development | $120,000 | 4 months |
| M&V engine & analytics | $60,000 | 2 months |
| OpenADR integration | $40,000 | 2 months |
| Regulatory & legal | $50,000 | 6 months |
| Pilot program operations | $30,000 | 3 months |
| **Total Phase 1-3** | **$380,000** | **9 months** |

### Operational Costs (Annual)

| Component | Cost |
|-----------|------|
| Cloud infrastructure (10k devices) | $24,000 |
| Customer support | $60,000 |
| Regulatory compliance | $30,000 |
| Insurance | $20,000 |
| Payment processing (2% of revenue) | Variable |
| **Total Annual Operating** | **$134,000 + variable** |

### Revenue Projections

**Year 1 (10,000 devices @ 10W avg):**
- Aggregate capacity: 100kW
- Capacity revenue: 100kW × $10/kW-month × 12 = $120,000
- Energy revenue: 100 events/yr × 2hrs × 100kW × $1/kWh = $20,000
- **Total Revenue:** $140,000
- **Platform share (20%):** $28,000
- **Net:** -$106,000 (investment phase)

**Year 2 (50,000 devices @ 10W avg):**
- Aggregate capacity: 500kW
- Capacity revenue: 500kW × $10/kW-month × 12 = $600,000
- Energy revenue: 100 events/yr × 2hrs × 500kW × $1/kWh = $100,000
- **Total Revenue:** $700,000
- **Platform share (20%):** $140,000
- **Operating costs:** $200,000
- **Net:** -$60,000

**Year 3 (100,000 devices @ 10W avg):**
- Aggregate capacity: 1MW
- Capacity revenue: 1MW × $12/kW-month × 12 = $14,400,000
- Energy revenue: 120 events/yr × 2hrs × 1MW × $1.20/kWh = $288,000
- **Total Revenue:** $14,688,000
- **Platform share (20%):** $2,937,600
- **Operating costs:** $400,000
- **Net:** +$2,537,600 ✅ **Profitable**

**Breakeven:** ~75,000 devices (750kW)

---

## 11. Next Steps & Recommendations

### Immediate Actions (Next 30 Days)

1. **Validate Core Assumptions**
   - Build proof-of-concept power control module
   - Test on 5-10 devices to measure actual reduction capabilities
   - Validate power measurement accuracy

2. **Market Research**
   - Survey potential users for VPP interest
   - Research utility DR programs in target markets
   - Identify potential VPP aggregator partners

3. **Technical Spike**
   - Prototype VppControlExecutor
   - Implement real-time power monitoring
   - Test control actions and measure impact

### Short-term (Months 2-3)

1. **Partnership Development**
   - Reach out to VPP aggregators (Voltus, CPower, Enel X)
   - Contact utility DR program managers
   - Explore CAISO/ERCOT market participation

2. **MVP Development**
   - Complete device-side VPP module
   - Build minimal backend orchestration
   - Create enrollment and dashboard UI

3. **Regulatory Consultation**
   - Hire energy regulatory consultant
   - Understand FERC Order 2222 requirements
   - Plan certification pathway

### Medium-term (Months 4-9)

1. **Pilot Program**
   - Recruit 1,000 beta testers
   - Partner with utility for real DR events
   - Validate M&V methodology

2. **Platform Scaling**
   - Build production-grade backend
   - Implement automated settlement
   - Add OpenADR 2.0b support

3. **Market Expansion**
   - Target multiple ISOs/RTOs
   - Add multi-state support
   - Build enterprise partnerships

---

## 12. Conclusion

Building a VPP with Embit devices is **technically feasible** but with important constraints:

### ✅ Strengths:
- Novel approach leveraging millions of smartphones
- Large addressable market (3B+ Android devices globally)
- Growing regulatory support (FERC 2222, state programs)
- Scalable aggregation potential
- Strong user value proposition (earn passive income)

### ⚠️ Challenges:
- Limited direct hardware control on Android
- Modest per-device capacity (5-15W realistic)
- Requires large scale to be economically viable
- Complex regulatory landscape
- Unproven business model in mobile VPP space

### 💡 Recommendation:

**Proceed with phased approach:**

1. **Phase 1 (Months 1-3):** Build technical proof-of-concept
   - Validate power measurement and control capabilities
   - Test with 50-100 internal devices
   - Measure actual reduction potential

2. **Phase 2 (Months 4-6):** Small-scale pilot
   - Partner with VPP aggregator for market access
   - Recruit 1,000 beta users
   - Participate in real DR events
   - Validate economics

3. **Phase 3 (Months 7-12):** Scale or pivot
   - If pilot succeeds: Raise funding and scale to 10k+ devices
   - If pilot underperforms: Pivot to B2B (fleet management, IoT devices)
   - If regulatory barriers too high: Focus on decentralized model

**Success Criteria for Go/No-Go Decision:**
- Pilot demonstrates >70% event participation
- Verified load reduction within 30% of forecast
- User satisfaction >4/5 stars
- Clear path to 100kW+ aggregate capacity
- Partnership interest from utility/aggregator

The VPP opportunity is real, but execution risk is high. A disciplined, data-driven approach with clear milestones is essential.

---

**Document Version:** 1.0
**Last Updated:** 2025-12-01
**Author:** Embit Development Team
**Status:** Draft for Review
