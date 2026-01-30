package eco.emergi.embit.android.ui;

import androidx.compose.foundation.layout.*;
import androidx.compose.material.icons.Icons;
import androidx.compose.material.icons.filled.*;
import androidx.compose.material3.*;
import androidx.compose.runtime.Composable;
import androidx.compose.ui.Alignment;
import androidx.compose.ui.Modifier;
import androidx.compose.ui.graphics.vector.ImageVector;
import androidx.compose.ui.text.font.FontWeight;
import androidx.compose.ui.text.style.TextAlign;
import androidx.navigation.NavHostController;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.android.analytics.RemoteConfigManager;
import eco.emergi.embit.android.ui.screens.*;
import eco.emergi.embit.domain.models.AuthState;
import eco.emergi.embit.domain.models.GridStatus;
import eco.emergi.embit.domain.usecases.auth.ObserveAuthStateUseCase;
import eco.emergi.embit.domain.usecases.grid.ObserveGridStatusUseCase;

@kotlin.Metadata(mv = {1, 9, 0}, k = 2, xi = 48, d1 = {"\u0000(\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\u001a\u0018\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\bH\u0007\u001a\u0010\u0010\t\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\u000bH\u0003\u001a\u0010\u0010\f\u001a\u00020\u00042\u0006\u0010\r\u001a\u00020\u000bH\u0003\"\u0014\u0010\u0000\u001a\b\u0012\u0004\u0012\u00020\u00020\u0001X\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u000e"}, d2 = {"bottomNavItems", "", "Leco/emergi/embit/android/ui/Screen;", "EmbitApp", "", "analyticsManager", "Leco/emergi/embit/android/analytics/AnalyticsManager;", "remoteConfigManager", "Leco/emergi/embit/android/analytics/RemoteConfigManager;", "ForceUpdateScreen", "minVersion", "", "MaintenanceScreen", "message", "androidApp_devDebug"})
public final class NavigationKt {
    @org.jetbrains.annotations.NotNull()
    private static final java.util.List<eco.emergi.embit.android.ui.Screen> bottomNavItems = null;
    
    /**
     * Main app composable with navigation
     */
    @kotlin.OptIn(markerClass = {androidx.compose.material3.ExperimentalMaterial3Api.class})
    @androidx.compose.runtime.Composable()
    public static final void EmbitApp(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.analytics.AnalyticsManager analyticsManager, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.analytics.RemoteConfigManager remoteConfigManager) {
    }
    
    /**
     * Maintenance mode screen shown when app is under maintenance.
     */
    @androidx.compose.runtime.Composable()
    private static final void MaintenanceScreen(java.lang.String message) {
    }
    
    /**
     * Force update screen shown when app version is too old.
     */
    @androidx.compose.runtime.Composable()
    private static final void ForceUpdateScreen(java.lang.String minVersion) {
    }
}