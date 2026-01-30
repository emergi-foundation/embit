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
import javax.inject.Inject;
import javax.inject.Singleton;

/**
 * Helper class for creating and showing battery-related notifications.
 */
@javax.inject.Singleton()
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0004\b\u0007\u0018\u0000 \u00192\u00020\u0001:\u0001\u0019B\u000f\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0002\u0010\u0004J\b\u0010\u0007\u001a\u00020\bH\u0002J\u0016\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eJ\b\u0010\u000f\u001a\u00020\u0010H\u0002J\b\u0010\u0011\u001a\u00020\u0012H\u0002J\u0006\u0010\u0013\u001a\u00020\u0010J\u000e\u0010\u0014\u001a\u00020\u00102\u0006\u0010\u0015\u001a\u00020\u0016J\u000e\u0010\u0017\u001a\u00020\u00102\u0006\u0010\u0018\u001a\u00020\fR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0006X\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u001a"}, d2 = {"Leco/emergi/embit/android/services/BatteryNotificationHelper;", "", "context", "Landroid/content/Context;", "(Landroid/content/Context;)V", "notificationManager", "Landroidx/core/app/NotificationManagerCompat;", "createMainActivityPendingIntent", "Landroid/app/PendingIntent;", "createMonitoringNotification", "Landroid/app/Notification;", "currentPercentage", "", "powerMilliwatts", "", "createNotificationChannels", "", "hasNotificationPermission", "", "showFullyChargedNotification", "showHighTemperatureNotification", "temperature", "", "showLowBatteryNotification", "percentage", "Companion", "androidApp_stagingDebug"})
public final class BatteryNotificationHelper {
    @org.jetbrains.annotations.NotNull()
    private final android.content.Context context = null;
    @org.jetbrains.annotations.NotNull()
    private final androidx.core.app.NotificationManagerCompat notificationManager = null;
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String CHANNEL_BATTERY_STATUS = "battery_status";
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String CHANNEL_BATTERY_ALERTS = "battery_alerts";
    @org.jetbrains.annotations.NotNull()
    public static final java.lang.String CHANNEL_MONITORING = "battery_monitoring";
    public static final int NOTIFICATION_ID_LOW_BATTERY = 1001;
    public static final int NOTIFICATION_ID_FULLY_CHARGED = 1002;
    public static final int NOTIFICATION_ID_HIGH_TEMP = 1003;
    public static final int NOTIFICATION_ID_MONITORING = 1000;
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.services.BatteryNotificationHelper.Companion Companion = null;
    
    @javax.inject.Inject()
    public BatteryNotificationHelper(@org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        super();
    }
    
    /**
     * Create notification channels for different types of battery notifications
     */
    private final void createNotificationChannels() {
    }
    
    /**
     * Show low battery notification
     */
    public final void showLowBatteryNotification(int percentage) {
    }
    
    /**
     * Show fully charged notification
     */
    public final void showFullyChargedNotification() {
    }
    
    /**
     * Show high temperature notification
     */
    public final void showHighTemperatureNotification(float temperature) {
    }
    
    /**
     * Create ongoing notification for foreground service
     */
    @org.jetbrains.annotations.NotNull()
    public final android.app.Notification createMonitoringNotification(int currentPercentage, double powerMilliwatts) {
        return null;
    }
    
    private final android.app.PendingIntent createMainActivityPendingIntent() {
        return null;
    }
    
    private final boolean hasNotificationPermission() {
        return false;
    }
    
    @kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\bX\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\bX\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\bX\u0086T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\f"}, d2 = {"Leco/emergi/embit/android/services/BatteryNotificationHelper$Companion;", "", "()V", "CHANNEL_BATTERY_ALERTS", "", "CHANNEL_BATTERY_STATUS", "CHANNEL_MONITORING", "NOTIFICATION_ID_FULLY_CHARGED", "", "NOTIFICATION_ID_HIGH_TEMP", "NOTIFICATION_ID_LOW_BATTERY", "NOTIFICATION_ID_MONITORING", "androidApp_stagingDebug"})
    public static final class Companion {
        
        private Companion() {
            super();
        }
    }
}