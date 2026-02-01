package eco.emergi.embit.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import dagger.hilt.android.AndroidEntryPoint
import eco.emergi.embit.android.analytics.AnalyticsManager
import eco.emergi.embit.android.analytics.RemoteConfigManager
import eco.emergi.embit.android.ui.EmbitApp
import eco.emergi.embit.android.ui.theme.EmbitTheme
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository
import org.koin.compose.koinInject
import javax.inject.Inject

/**
 * Main activity for the Embit app.
 * Uses Jetpack Compose for the entire UI.
 */
@AndroidEntryPoint
class MainActivity : ComponentActivity() {

    @Inject
    lateinit var analyticsManager: AnalyticsManager

    @Inject
    lateinit var remoteConfigManager: RemoteConfigManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            // Get user preferences repository from Koin
            val userPreferencesRepository: IUserPreferencesRepository = koinInject()

            // Observe user preferences for high-contrast mode
            val userPreferences by userPreferencesRepository.observeUserPreferences()
                .collectAsState(initial = null)

            EmbitTheme(
                highContrast = userPreferences?.highContrastMode ?: false
            ) {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    EmbitApp(
                        analyticsManager = analyticsManager,
                        remoteConfigManager = remoteConfigManager
                    )
                }
            }
        }
    }
}
