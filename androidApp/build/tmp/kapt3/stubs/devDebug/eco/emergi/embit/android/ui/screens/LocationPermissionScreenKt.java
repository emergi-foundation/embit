package eco.emergi.embit.android.ui.screens;

import android.Manifest;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.compose.foundation.layout.*;
import androidx.compose.material.icons.Icons;
import androidx.compose.material3.*;
import androidx.compose.runtime.*;
import androidx.compose.ui.Alignment;
import androidx.compose.ui.Modifier;
import androidx.compose.ui.text.font.FontWeight;
import androidx.compose.ui.text.style.TextAlign;
import eco.emergi.embit.android.services.LocationBasedGridManager;

@kotlin.Metadata(mv = {1, 9, 0}, k = 2, xi = 48, d1 = {"\u0000\u0016\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u001a\u0010\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0003H\u0003\u001a\u0016\u0010\u0004\u001a\u00020\u00012\f\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00010\u0006H\u0007\u00a8\u0006\u0007"}, d2 = {"BulletPoint", "", "text", "", "LocationPermissionScreen", "onComplete", "Lkotlin/Function0;", "androidApp_devDebug"})
public final class LocationPermissionScreenKt {
    
    /**
     * Location permission request screen shown after user completes preferences setup.
     *
     * This screen:
     * - Explains why location is needed (for accurate grid region detection)
     * - Requests location permission
     * - Triggers grid region detection once permission is granted
     * - Allows skipping (will default to CAISO_NORTH)
     */
    @androidx.compose.runtime.Composable()
    public static final void LocationPermissionScreen(@org.jetbrains.annotations.NotNull()
    kotlin.jvm.functions.Function0<kotlin.Unit> onComplete) {
    }
    
    @androidx.compose.runtime.Composable()
    private static final void BulletPoint(java.lang.String text) {
    }
}