package eco.emergi.embit.android.ui.components;

import androidx.compose.foundation.layout.*;
import androidx.compose.material.icons.Icons;
import androidx.compose.material.icons.filled.*;
import androidx.compose.material3.*;
import androidx.compose.runtime.Composable;
import androidx.compose.ui.Alignment;
import androidx.compose.ui.Modifier;
import androidx.compose.ui.text.font.FontWeight;
import eco.emergi.embit.domain.models.GridStatus;
import eco.emergi.embit.domain.models.GridStressLevel;
import eco.emergi.embit.domain.models.PricingTier;
import eco.emergi.embit.domain.models.CarbonLevel;
import eco.emergi.embit.domain.models.ChargingRecommendation;

@kotlin.Metadata(mv = {1, 9, 0}, k = 2, xi = 48, d1 = {"\u0000L\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a2\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\bH\u0003\u00f8\u0001\u0000\u00a2\u0006\u0004\b\t\u0010\n\u001a\u0010\u0010\u000b\u001a\u00020\u00012\u0006\u0010\f\u001a\u00020\rH\u0003\u001a&\u0010\u000e\u001a\u00020\u00012\b\u0010\f\u001a\u0004\u0018\u00010\r2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00102\b\b\u0002\u0010\u0011\u001a\u00020\u0012H\u0007\u001a\u0010\u0010\u0013\u001a\u00020\u00012\u0006\u0010\u0014\u001a\u00020\u0010H\u0003\u001a\u0015\u0010\u0015\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u0017H\u0003\u00a2\u0006\u0002\u0010\u0018\u001a\u0015\u0010\u0019\u001a\u00020\b2\u0006\u0010\u001a\u001a\u00020\u001bH\u0003\u00a2\u0006\u0002\u0010\u001c\u001a\u0015\u0010\u001d\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u001eH\u0003\u00a2\u0006\u0002\u0010\u001f\u0082\u0002\u0007\n\u0005\b\u00a1\u001e0\u0001\u00a8\u0006 "}, d2 = {"GridDetailRow", "", "icon", "Landroidx/compose/ui/graphics/vector/ImageVector;", "label", "", "value", "color", "Landroidx/compose/ui/graphics/Color;", "GridDetailRow-g2O1Hgs", "(Landroidx/compose/ui/graphics/vector/ImageVector;Ljava/lang/String;Ljava/lang/String;J)V", "GridDetailsSection", "gridStatus", "Leco/emergi/embit/domain/models/GridStatus;", "GridStatusCard", "chargingRecommendation", "Leco/emergi/embit/domain/models/ChargingRecommendation;", "modifier", "Landroidx/compose/ui/Modifier;", "RecommendationSection", "recommendation", "getCarbonLevelColor", "level", "Leco/emergi/embit/domain/models/CarbonLevel;", "(Leco/emergi/embit/domain/models/CarbonLevel;)J", "getPricingColor", "tier", "Leco/emergi/embit/domain/models/PricingTier;", "(Leco/emergi/embit/domain/models/PricingTier;)J", "getStressLevelColor", "Leco/emergi/embit/domain/models/GridStressLevel;", "(Leco/emergi/embit/domain/models/GridStressLevel;)J", "androidApp_stagingDebug"})
public final class GridStatusCardKt {
    
    /**
     * Card showing grid status and smart charging recommendations
     */
    @androidx.compose.runtime.Composable()
    public static final void GridStatusCard(@org.jetbrains.annotations.Nullable()
    eco.emergi.embit.domain.models.GridStatus gridStatus, @org.jetbrains.annotations.Nullable()
    eco.emergi.embit.domain.models.ChargingRecommendation chargingRecommendation, @org.jetbrains.annotations.NotNull()
    androidx.compose.ui.Modifier modifier) {
    }
    
    @androidx.compose.runtime.Composable()
    private static final void RecommendationSection(eco.emergi.embit.domain.models.ChargingRecommendation recommendation) {
    }
    
    @androidx.compose.runtime.Composable()
    private static final void GridDetailsSection(eco.emergi.embit.domain.models.GridStatus gridStatus) {
    }
    
    @androidx.compose.runtime.Composable()
    private static final long getStressLevelColor(eco.emergi.embit.domain.models.GridStressLevel level) {
        return 0L;
    }
    
    @androidx.compose.runtime.Composable()
    private static final long getCarbonLevelColor(eco.emergi.embit.domain.models.CarbonLevel level) {
        return 0L;
    }
    
    @androidx.compose.runtime.Composable()
    private static final long getPricingColor(eco.emergi.embit.domain.models.PricingTier tier) {
        return 0L;
    }
}