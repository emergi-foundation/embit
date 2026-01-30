package eco.emergi.embit.android.services;

import android.Manifest;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import eco.emergi.embit.android.MainActivity;
import eco.emergi.embit.android.R;
import eco.emergi.embit.domain.models.ChargingRecommendation;
import eco.emergi.embit.domain.models.GridStatus;
import eco.emergi.embit.domain.models.GridStressLevel;

/**
 * Manager for grid-aware charging notifications
 */
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0007\u0018\u0000 \u00112\u00020\u0001:\u0001\u0011B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0002\u0010\u0004J\u0006\u0010\u0005\u001a\u00020\u0006J\b\u0010\u0007\u001a\u00020\u0006H\u0002J\b\u0010\b\u001a\u00020\tH\u0002J\u0016\u0010\n\u001a\u00020\u00062\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eJ\u0016\u0010\u000f\u001a\u00020\u00062\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eJ\u000e\u0010\u0010\u001a\u00020\u00062\u0006\u0010\r\u001a\u00020\u000eR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0012"}, d2 = {"Leco/emergi/embit/android/services/ChargingNotificationManager;", "", "context", "Landroid/content/Context;", "(Landroid/content/Context;)V", "cancelAllNotifications", "", "createNotificationChannel", "hasNotificationPermission", "", "notifyBadTimeToCharge", "recommendation", "Leco/emergi/embit/domain/models/ChargingRecommendation;", "gridStatus", "Leco/emergi/embit/domain/models/GridStatus;", "notifyGoodTimeToCharge", "notifyGridCritical", "Companion", "androidApp_stagingDebug"})
public final class ChargingNotificationManager {
    @org.jetbrains.annotations.NotNull()
    private final android.content.Context context = null;
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String CHANNEL_ID = "charging_recommendations";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String CHANNEL_NAME = "Smart Charging";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String CHANNEL_DESCRIPTION = "Notifications for optimal charging times based on grid conditions";
    private static final int NOTIFICATION_ID_GOOD_TIME = 1001;
    private static final int NOTIFICATION_ID_BAD_TIME = 1002;
    private static final int NOTIFICATION_ID_GRID_ALERT = 1003;
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.services.ChargingNotificationManager.Companion Companion = null;
    
    public ChargingNotificationManager(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        super();
    }
    
    /**
     * Create notification channel for charging recommendations
     */
    private final void createNotificationChannel() {
    }
    
    /**
     * Show notification for good charging conditions
     */
    public final void notifyGoodTimeToCharge(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.models.ChargingRecommendation recommendation, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.models.GridStatus gridStatus) {
    }
    
    /**
     * Show notification to avoid charging
     */
    public final void notifyBadTimeToCharge(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.models.ChargingRecommendation recommendation, @org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.models.GridStatus gridStatus) {
    }
    
    /**
     * Show notification for critical grid conditions
     */
    public final void notifyGridCritical(@org.jetbrains.annotations.NotNull()
    eco.emergi.embit.domain.models.GridStatus gridStatus) {
    }
    
    /**
     * Cancel all charging notifications
     */
    public final void cancelAllNotifications() {
    }
    
    /**
     * Check if notification permission is granted
     */
    private final boolean hasNotificationPermission() {
        return false;
    }
    
    @kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\bX\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\bX\u0082T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u000b"}, d2 = {"Leco/emergi/embit/android/services/ChargingNotificationManager$Companion;", "", "()V", "CHANNEL_DESCRIPTION", "", "CHANNEL_ID", "CHANNEL_NAME", "NOTIFICATION_ID_BAD_TIME", "", "NOTIFICATION_ID_GOOD_TIME", "NOTIFICATION_ID_GRID_ALERT", "androidApp_stagingDebug"})
    public static final class Companion {
        
        private Companion() {
            super();
        }
    }
}