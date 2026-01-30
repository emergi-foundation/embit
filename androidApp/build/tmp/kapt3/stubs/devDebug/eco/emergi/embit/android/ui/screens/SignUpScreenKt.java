package eco.emergi.embit.android.ui.screens;

import android.app.Activity;
import androidx.activity.result.IntentSenderRequest;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.compose.foundation.layout.*;
import androidx.compose.foundation.text.KeyboardOptions;
import androidx.compose.material.icons.Icons;
import androidx.compose.material3.*;
import androidx.compose.runtime.*;
import androidx.compose.ui.Alignment;
import androidx.compose.ui.Modifier;
import androidx.compose.ui.focus.FocusDirection;
import androidx.compose.ui.text.font.FontWeight;
import androidx.compose.ui.text.input.ImeAction;
import androidx.compose.ui.text.input.KeyboardType;
import androidx.compose.ui.text.input.PasswordVisualTransformation;
import androidx.compose.ui.text.input.VisualTransformation;
import androidx.compose.ui.text.style.TextAlign;
import eco.emergi.embit.android.analytics.AnalyticsManager;
import eco.emergi.embit.domain.models.AuthState;
import eco.emergi.embit.domain.usecases.auth.*;
import eco.emergi.embit.platform.auth.GoogleSignInManager;
import eco.emergi.embit.presentation.AuthUiState;
import eco.emergi.embit.presentation.AuthViewModel;

@kotlin.Metadata(mv = {1, 9, 0}, k = 2, xi = 48, d1 = {"\u0000$\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0002\u0018\u0002\n\u0002\b\u0003\u001aA\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00010\u00052!\u0010\u0006\u001a\u001d\u0012\u0013\u0012\u00110\b\u00a2\u0006\f\b\t\u0012\b\b\n\u0012\u0004\b\b(\u000b\u0012\u0004\u0012\u00020\u00010\u0007H\u0007\u00a8\u0006\f"}, d2 = {"SignUpScreen", "", "analyticsManager", "Leco/emergi/embit/android/analytics/AnalyticsManager;", "onNavigateBack", "Lkotlin/Function0;", "onSignUpSuccess", "Lkotlin/Function1;", "", "Lkotlin/ParameterName;", "name", "isNewUser", "androidApp_devDebug"})
public final class SignUpScreenKt {
    
    /**
     * Sign up screen for creating a new user account
     */
    @kotlin.OptIn(markerClass = {androidx.compose.material3.ExperimentalMaterial3Api.class})
    @androidx.compose.runtime.Composable()
    public static final void SignUpScreen(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.android.analytics.AnalyticsManager analyticsManager, @org.jetbrains.annotations.NotNull()
    kotlin.jvm.functions.Function0<kotlin.Unit> onNavigateBack, @org.jetbrains.annotations.NotNull()
    kotlin.jvm.functions.Function1<? super java.lang.Boolean, kotlin.Unit> onSignUpSuccess) {
    }
}