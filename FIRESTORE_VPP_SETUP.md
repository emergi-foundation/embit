# Firestore VPP Backend Setup

This guide explains how to configure Firebase Firestore for the Virtual Power Plant (VPP) / Demand Response feature.

---

## Firestore Collections Schema

### 1. `/demand_response_events/{eventId}`

Active demand response events from grid operators.

**Fields:**
```javascript
{
  eventId: string,           // Auto-generated or custom ID
  startTime: timestamp,      // Event start time (milliseconds since epoch)
  endTime: timestamp,        // Event end time (milliseconds since epoch)
  targetReductionWatts: number,  // Target power reduction in watts (e.g., 10.0)
  priority: string,          // "LOW", "MEDIUM", "HIGH", or "CRITICAL"
  message: string,           // User-facing message (e.g., "Grid demand is high. Help reduce load!")
  location: string,          // Geographic location (e.g., "California", "New York")
  createdAt: timestamp,      // Event creation time
  createdBy: string          // Optional: Who created this event
}
```

**Example Event:**
```json
{
  "eventId": "dr_20250112_1830",
  "startTime": 1736724600000,
  "endTime": 1736731800000,
  "targetReductionWatts": 10.0,
  "priority": "MEDIUM",
  "message": "Evening peak demand. Help balance the grid!",
  "location": "California",
  "createdAt": 1736724000000,
  "createdBy": "admin"
}
```

---

### 2. `/users/{userId}/event_performance/{performanceId}`

User participation history and performance metrics.

**Fields:**
```javascript
{
  eventId: string,           // Reference to the DR event
  deviceId: string,          // Android device ID
  startTime: timestamp,      // When participation started
  endTime: timestamp,        // When participation ended
  baselinePowerWatts: number,    // Power consumption before reduction
  actualPowerWatts: number,      // Power consumption during event
  reductionWatts: number,        // Actual power reduced
  reductionPercentage: number,   // Percentage reduction
  actionsApplied: array<string>, // List of power control actions applied
  completed: boolean,            // Whether event was completed successfully
  durationMinutes: number,       // Calculated: event duration
  energyReducedWh: number       // Calculated: energy saved in watt-hours
}
```

**Example Performance:**
```json
{
  "eventId": "dr_20250112_1830",
  "deviceId": "abc123def456",
  "startTime": 1736724600000,
  "endTime": 1736731800000,
  "baselinePowerWatts": 12.5,
  "actualPowerWatts": 4.3,
  "reductionWatts": 8.2,
  "reductionPercentage": 65.6,
  "actionsApplied": [
    "Background Sync Disabled",
    "Background Tasks Deferred",
    "WiFi-Only Mode",
    "CPU Usage Limited"
  ],
  "completed": true,
  "durationMinutes": 120,
  "energyReducedWh": 16.4
}
```

---

### 3. `/users/{userId}/vpp_settings/participation`

User participation settings and preferences.

**Fields:**
```javascript
{
  enabled: boolean,              // Master toggle for participation
  minimumPriority: string,       // Minimum event priority to respond to
  allowBatterySaver: boolean,    // Allow battery saver mode
  allowBackgroundSync: boolean,  // Allow disabling background sync
  allowNetworkControl: boolean,  // Allow WiFi-only mode
  maxDurationMinutes: number,    // Maximum event duration willing to participate
  lastUpdated: timestamp         // Last settings update time
}
```

**Example Settings:**
```json
{
  "enabled": true,
  "minimumPriority": "MEDIUM",
  "allowBatterySaver": true,
  "allowBackgroundSync": true,
  "allowNetworkControl": true,
  "maxDurationMinutes": 120,
  "lastUpdated": 1736724000000
}
```

---

### 4. `/users/{userId}` (aggregate stats field)

User document with VPP statistics.

**vppStats sub-field:**
```javascript
{
  vppStats: {
    totalEvents: number,           // Total events participated in
    completedEvents: number,       // Successfully completed events
    totalEnergyReducedWh: number,  // Total energy saved across all events
    totalCO2SavedGrams: number,    // Estimated CO2 prevented (0.75g per Wh)
    averageReductionWatts: number, // Average power reduction per event
    lastUpdated: timestamp         // Last stats update time
  }
}
```

**Example:**
```json
{
  "vppStats": {
    "totalEvents": 15,
    "completedEvents": 14,
    "totalEnergyReducedWh": 240.5,
    "totalCO2SavedGrams": 180.4,
    "averageReductionWatts": 8.2,
    "lastUpdated": 1736724000000
  }
}
```

---

## Firestore Security Rules

Add these rules to your `firestore.rules` file:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Demand Response Events - Read-only for authenticated users
    match /demand_response_events/{eventId} {
      // Anyone can read active events (for their location)
      allow read: if request.auth != null;

      // Only admins can create/update/delete events
      allow write: if request.auth != null &&
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // User VPP Settings - User can read/write their own settings
    match /users/{userId}/vpp_settings/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // User Event Performance - User can read/write their own performance
    match /users/{userId}/event_performance/{performanceId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // User aggregate stats - User can read, app can write
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow update: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## Firestore Indexes

Create these composite indexes for efficient queries:

### Index 1: Active Events by Location
```
Collection: demand_response_events
Fields:
  - location (Ascending)
  - endTime (Ascending)
Query Scope: Collection
```

### Index 2: User Performance History
```
Collection Group: event_performance
Fields:
  - endTime (Descending)
Query Scope: Collection group
```

**To create indexes:**
1. Go to Firebase Console → Firestore Database → Indexes
2. Click "Create Index"
3. Add the fields as specified above
4. Click "Create"

Or use the Firebase CLI:
```bash
firebase deploy --only firestore:indexes
```

---

## Creating Test DR Events

### Method 1: Firebase Console (Manual)

1. Go to Firebase Console → Firestore Database
2. Navigate to `demand_response_events` collection
3. Click "Add document"
4. Set document ID (e.g., `test_event_1`)
5. Add fields:
   - `eventId`: `test_event_1` (string)
   - `startTime`: Current timestamp - 1 hour (number)
   - `endTime`: Current timestamp + 2 hours (number)
   - `targetReductionWatts`: `10` (number)
   - `priority`: `MEDIUM` (string)
   - `message`: `Test grid event - help reduce load!` (string)
   - `location`: `California` (string)
   - `createdAt`: Current timestamp (number)

### Method 2: Firebase Cloud Function

Create `functions/src/index.ts`:

```typescript
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Create a test DR event (callable function)
export const createTestDREvent = functions.https.onCall(async (data, context) => {
  // Verify authentication
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Must be authenticated');
  }

  const now = Date.now();
  const eventId = `test_${now}`;

  const event = {
    eventId,
    startTime: now,
    endTime: now + (2 * 60 * 60 * 1000), // 2 hours from now
    targetReductionWatts: data.targetReduction || 10.0,
    priority: data.priority || 'MEDIUM',
    message: data.message || 'Test grid demand event. Help reduce load!',
    location: data.location || 'California',
    createdAt: now,
    createdBy: context.auth.uid
  };

  await admin.firestore()
    .collection('demand_response_events')
    .doc(eventId)
    .set(event);

  return { success: true, eventId };
});

// Auto-update user stats when performance is saved
export const updateUserStats = functions.firestore
  .document('users/{userId}/event_performance/{performanceId}')
  .onCreate(async (snap, context) => {
    const userId = context.params.userId;
    const performance = snap.data();

    // Get all user performance records
    const performanceSnapshot = await admin.firestore()
      .collection(`users/${userId}/event_performance`)
      .get();

    let totalEvents = 0;
    let completedEvents = 0;
    let totalEnergyWh = 0;
    let totalReductionWatts = 0;

    performanceSnapshot.forEach(doc => {
      const perf = doc.data();
      totalEvents++;
      if (perf.completed) completedEvents++;

      totalEnergyWh += perf.energyReducedWh || 0;
      totalReductionWatts += perf.reductionWatts || 0;
    });

    const averageReduction = totalEvents > 0 ? totalReductionWatts / totalEvents : 0;
    const totalCO2 = totalEnergyWh * 0.75; // 0.75g CO2 per Wh

    const stats = {
      totalEvents,
      completedEvents,
      totalEnergyReducedWh: totalEnergyWh,
      totalCO2SavedGrams: totalCO2,
      averageReductionWatts: averageReduction,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    };

    await admin.firestore()
      .collection('users')
      .doc(userId)
      .set({ vppStats: stats }, { merge: true });
  });
```

Deploy:
```bash
cd functions
npm install
firebase deploy --only functions
```

Call from app:
```kotlin
val functions = Firebase.functions
functions.getHttpsCallable("createTestDREvent")
    .call(hashMapOf(
        "targetReduction" to 10.0,
        "priority" to "MEDIUM",
        "location" to "California"
    ))
    .await()
```

### Method 3: REST API

```bash
# Get access token
ACCESS_TOKEN=$(gcloud auth print-access-token)

# Create event
curl -X POST \
  "https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/demand_response_events" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "fields": {
      "eventId": {"stringValue": "test_event_123"},
      "startTime": {"integerValue": "1736724600000"},
      "endTime": {"integerValue": "1736731800000"},
      "targetReductionWatts": {"doubleValue": 10.0},
      "priority": {"stringValue": "MEDIUM"},
      "message": {"stringValue": "Test grid event!"},
      "location": {"stringValue": "California"},
      "createdAt": {"integerValue": "1736724000000"}
    }
  }'
```

---

## Testing the VPP Flow

### 1. Enable Participation in App
1. Open the app
2. Navigate to "Grid" tab (lightning bolt icon)
3. Toggle "Grid Participation" ON
4. Verify settings are saved

### 2. Create a Test Event
Use one of the methods above to create a test DR event with:
- Start time: Current time
- End time: Current time + 2 hours
- Location matching user's location

### 3. Verify Event Appears in App
1. App should automatically observe the active event
2. "Active Grid Event" card should appear
3. Power reduction should start automatically
4. Real-time reduction should be displayed

### 4. Check Performance Tracking
1. Wait for event to complete (or manually end it)
2. Check "Performance History" section
3. Verify stats card shows:
   - Events participated
   - Energy saved
   - CO2 prevented
   - Average reduction

### 5. Verify Firestore Sync
1. Go to Firebase Console → Firestore
2. Check `users/{userId}/event_performance` collection
3. Verify performance record was created
4. Check `users/{userId}` document for updated `vppStats`

---

## Troubleshooting

### Events Not Appearing
- Check Firestore security rules allow read access
- Verify `location` field matches user's location
- Check `endTime` is in the future
- Check Firebase authentication is working

### Performance Not Saving
- Check Firestore security rules allow write to event_performance
- Verify user is authenticated
- Check network connectivity
- Look for errors in Logcat

### Stats Not Updating
- Ensure Cloud Function `updateUserStats` is deployed
- Check function logs in Firebase Console
- Verify function has permissions to update user document

---

## Production Considerations

1. **Event Scheduling:**
   - Implement admin dashboard for creating real DR events
   - Integrate with ISO/RTO APIs for actual grid data
   - Add notification system for upcoming events

2. **Location Management:**
   - Store user location in profile
   - Support multiple grid regions
   - Handle location changes dynamically

3. **Performance Validation:**
   - Validate power measurements are reasonable
   - Detect and handle anomalies
   - Implement fraud detection

4. **Scalability:**
   - Use Cloud Functions for aggregation
   - Implement caching for active events
   - Consider Firestore capacity limits

5. **Privacy & Security:**
   - Don't expose other users' data
   - Encrypt sensitive information
   - Implement rate limiting on API calls

---

## Next Steps

1. ✅ Deploy Firestore security rules
2. ✅ Create composite indexes
3. ✅ Deploy Cloud Functions (optional but recommended)
4. ✅ Create test DR events
5. ✅ Test end-to-end flow in app
6. ⏳ Implement admin dashboard for event management
7. ⏳ Add push notifications for DR events
8. ⏳ Integrate with real grid data sources

---

**VPP Feature is now ready for testing! 🚀**
