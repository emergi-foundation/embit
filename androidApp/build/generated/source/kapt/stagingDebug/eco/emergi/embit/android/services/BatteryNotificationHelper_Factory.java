package eco.emergi.embit.android.services;

import android.content.Context;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import javax.annotation.processing.Generated;
import javax.inject.Provider;

@ScopeMetadata("javax.inject.Singleton")
@QualifierMetadata
@DaggerGenerated
@Generated(
    value = "dagger.internal.codegen.ComponentProcessor",
    comments = "https://dagger.dev"
)
@SuppressWarnings({
    "unchecked",
    "rawtypes",
    "KotlinInternal",
    "KotlinInternalInJava",
    "cast",
    "deprecation"
})
public final class BatteryNotificationHelper_Factory implements Factory<BatteryNotificationHelper> {
  private final Provider<Context> contextProvider;

  public BatteryNotificationHelper_Factory(Provider<Context> contextProvider) {
    this.contextProvider = contextProvider;
  }

  @Override
  public BatteryNotificationHelper get() {
    return newInstance(contextProvider.get());
  }

  public static BatteryNotificationHelper_Factory create(Provider<Context> contextProvider) {
    return new BatteryNotificationHelper_Factory(contextProvider);
  }

  public static BatteryNotificationHelper newInstance(Context context) {
    return new BatteryNotificationHelper(context);
  }
}
