package eco.emergi.embit.android.ui.components;

import android.os.Build;
import androidx.compose.foundation.layout.*;
import androidx.compose.material.icons.Icons;
import androidx.compose.material3.*;
import androidx.compose.runtime.*;
import androidx.compose.ui.Alignment;
import androidx.compose.ui.Modifier;
import androidx.compose.ui.graphics.vector.ImageVector;
import androidx.compose.ui.text.font.FontWeight;
import eco.emergi.embit.android.BuildConfig;
import eco.emergi.embit.domain.models.FeedbackDeviceInfo;
import eco.emergi.embit.domain.models.Feedback;
import eco.emergi.embit.domain.models.FeedbackType;

@kotlin.Metadata(mv = {1, 9, 0}, k = 2, xi = 48, d1 = {"\u0000F\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\u001aF\u0010\u0000\u001a\u00020\u00012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00010\u00032\u0012\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00010\u00052\u0006\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\fH\u0007\u001a.\u0010\r\u001a\u00020\u00012\u0006\u0010\u000e\u001a\u00020\n2\u0012\u0010\u000f\u001a\u000e\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u00010\u00052\b\b\u0002\u0010\u0010\u001a\u00020\u0011H\u0003\u001a:\u0010\u0012\u001a\u00020\u0001*\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\b2\u0006\u0010\u0019\u001a\u00020\f2\f\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u00010\u0003H\u0003\u00a8\u0006\u001b"}, d2 = {"FeedbackDialog", "", "onDismiss", "Lkotlin/Function0;", "onSubmit", "Lkotlin/Function1;", "Leco/emergi/embit/domain/models/Feedback;", "userId", "", "batteryPercentage", "", "isCharging", "", "StarRatingBar", "rating", "onRatingChanged", "modifier", "Landroidx/compose/ui/Modifier;", "FeedbackTypeChip", "Landroidx/compose/foundation/layout/RowScope;", "type", "Leco/emergi/embit/domain/models/FeedbackType;", "icon", "Landroidx/compose/ui/graphics/vector/ImageVector;", "label", "selected", "onClick", "androidApp_devDebug"})
public final class FeedbackDialogKt {
    
    /**
     * Dialog for submitting user feedback (ratings, bug reports, feature requests).
     *
     * @param onDismiss Callback when dialog is dismissed
     * @param onSubmit Callback when feedback is submitted with the created Feedback object
     * @param userId Current user's ID
     * @param batteryPercentage Current battery percentage for device info
     * @param isCharging Whether device is currently charging
     */
    @androidx.compose.runtime.Composable()
    public static final void FeedbackDialog(@org.jetbrains.annotations.NotNull()
    kotlin.jvm.functions.Function0<kotlin.Unit> onDismiss, @org.jetbrains.annotations.NotNull()
    kotlin.jvm.functions.Function1<? super eco.emergi.embit.domain.models.Feedback, kotlin.Unit> onSubmit, @org.jetbrains.annotations.NotNull()
    java.lang.String userId, int batteryPercentage, boolean isCharging) {
    }
    
    /**
     * Chip for selecting feedback type.
     */
    @androidx.compose.runtime.Composable()
    private static final void FeedbackTypeChip(androidx.compose.foundation.layout.RowScope $this$FeedbackTypeChip, eco.emergi.embit.domain.models.FeedbackType type, androidx.compose.ui.graphics.vector.ImageVector icon, java.lang.String label, boolean selected, kotlin.jvm.functions.Function0<kotlin.Unit> onClick) {
    }
    
    /**
     * Star rating bar (1-5 stars).
     */
    @androidx.compose.runtime.Composable()
    private static final void StarRatingBar(int rating, kotlin.jvm.functions.Function1<? super java.lang.Integer, kotlin.Unit> onRatingChanged, androidx.compose.ui.Modifier modifier) {
    }
}