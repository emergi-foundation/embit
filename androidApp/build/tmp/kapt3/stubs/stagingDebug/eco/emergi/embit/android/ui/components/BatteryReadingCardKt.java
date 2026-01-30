package eco.emergi.embit.android.ui.components;

import androidx.compose.foundation.layout.*;
import androidx.compose.material.icons.Icons;
import androidx.compose.material.icons.filled.*;
import androidx.compose.material3.*;
import androidx.compose.runtime.Composable;
import androidx.compose.ui.Alignment;
import androidx.compose.ui.Modifier;
import androidx.compose.ui.text.font.FontWeight;
import eco.emergi.embit.domain.models.BatteryReading;
import eco.emergi.embit.domain.models.BatteryState;
import kotlinx.datetime.TimeZone;

@kotlin.Metadata(mv = {1, 9, 0}, k = 2, xi = 48, d1 = {"\u0000<\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\u001a\u001a\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005H\u0007\u001a\u0010\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0002\u001a\u0015\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0003\u00a2\u0006\u0002\u0010\u000e\u001a\u0010\u0010\u000f\u001a\u00020\u00072\u0006\u0010\f\u001a\u00020\rH\u0002\u001a$\u0010\u0010\u001a\u00020\u0001*\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00072\u0006\u0010\u0013\u001a\u00020\u00072\u0006\u0010\u0014\u001a\u00020\u0015H\u0003\u00a8\u0006\u0016"}, d2 = {"BatteryReadingCard", "", "reading", "Leco/emergi/embit/domain/models/BatteryReading;", "modifier", "Landroidx/compose/ui/Modifier;", "formatTimestamp", "", "instant", "Lkotlinx/datetime/Instant;", "getBatteryStateColor", "Landroidx/compose/ui/graphics/Color;", "state", "Leco/emergi/embit/domain/models/BatteryState;", "(Leco/emergi/embit/domain/models/BatteryState;)J", "getBatteryStateText", "MetricItem", "Landroidx/compose/foundation/layout/RowScope;", "label", "value", "icon", "Landroidx/compose/ui/graphics/vector/ImageVector;", "androidApp_stagingDebug"})
public final class BatteryReadingCardKt {
    
    /**
     * Card displaying current battery reading information
     */
    @androidx.compose.runtime.Composable()
    public static final void BatteryReadingCard(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.models.BatteryReading reading, @org.jetbrains.annotations.NotNull()
    androidx.compose.ui.Modifier modifier) {
    }
    
    @androidx.compose.runtime.Composable()
    private static final void MetricItem(androidx.compose.foundation.layout.RowScope $this$MetricItem, java.lang.String label, java.lang.String value, androidx.compose.ui.graphics.vector.ImageVector icon) {
    }
    
    private static final java.lang.String getBatteryStateText(eco.emergi.embit.domain.models.BatteryState state) {
        return null;
    }
    
    @androidx.compose.runtime.Composable()
    private static final long getBatteryStateColor(eco.emergi.embit.domain.models.BatteryState state) {
        return 0L;
    }
    
    private static final java.lang.String formatTimestamp(kotlinx.datetime.Instant instant) {
        return null;
    }
}