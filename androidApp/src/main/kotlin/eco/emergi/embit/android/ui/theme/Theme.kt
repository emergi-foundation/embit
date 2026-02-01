package eco.emergi.embit.android.ui.theme

import android.app.Activity
import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

private val LightColorScheme = lightColorScheme(
    primary = GreenPrimary,
    secondary = GreenSecondary,
    tertiary = GreenTertiary,
)

private val DarkColorScheme = darkColorScheme(
    primary = GreenPrimaryDark,
    secondary = GreenSecondaryDark,
    tertiary = GreenTertiaryDark,
)

// High Contrast Light Color Scheme (WCAG AAA - 7:1 contrast ratio)
private val HighContrastLightColorScheme = lightColorScheme(
    primary = HighContrastPrimaryLight,
    onPrimary = HighContrastBackgroundLight,
    primaryContainer = HighContrastSecondaryLight,
    onPrimaryContainer = HighContrastBackgroundLight,
    secondary = HighContrastSecondaryLight,
    onSecondary = HighContrastBackgroundLight,
    tertiary = HighContrastTertiaryLight,
    onTertiary = HighContrastBackgroundLight,
    background = HighContrastBackgroundLight,
    onBackground = HighContrastPrimaryLight,
    surface = HighContrastSurfaceLight,
    onSurface = HighContrastPrimaryLight,
    error = HighContrastErrorLight,
    onError = HighContrastBackgroundLight,
)

// High Contrast Dark Color Scheme (WCAG AAA - 7:1 contrast ratio)
private val HighContrastDarkColorScheme = darkColorScheme(
    primary = HighContrastPrimaryDark,
    onPrimary = HighContrastBackgroundDark,
    primaryContainer = HighContrastSecondaryDark,
    onPrimaryContainer = HighContrastBackgroundDark,
    secondary = HighContrastSecondaryDark,
    onSecondary = HighContrastBackgroundDark,
    tertiary = HighContrastTertiaryDark,
    onTertiary = HighContrastBackgroundDark,
    background = HighContrastBackgroundDark,
    onBackground = HighContrastPrimaryDark,
    surface = HighContrastSurfaceDark,
    onSurface = HighContrastPrimaryDark,
    error = HighContrastErrorDark,
    onError = HighContrastBackgroundDark,
)

@Composable
fun EmbitTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    dynamicColor: Boolean = true,
    highContrast: Boolean = false,  // NEW: High-contrast mode for accessibility
    content: @Composable () -> Unit
) {
    val colorScheme = when {
        // High-contrast mode takes precedence over dynamic colors
        highContrast && darkTheme -> HighContrastDarkColorScheme
        highContrast -> HighContrastLightColorScheme
        dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
            val context = LocalContext.current
            if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
        }
        darkTheme -> DarkColorScheme
        else -> LightColorScheme
    }

    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = colorScheme.primary.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = !darkTheme
        }
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
