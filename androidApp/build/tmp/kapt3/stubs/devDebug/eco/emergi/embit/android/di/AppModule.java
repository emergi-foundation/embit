package eco.emergi.embit.android.di;

import android.content.Context;
import dagger.Module;
import dagger.Provides;
import dagger.hilt.InstallIn;
import dagger.hilt.android.qualifiers.ApplicationContext;
import dagger.hilt.components.SingletonComponent;
import eco.emergi.embit.android.services.AppStateManager;
import eco.emergi.embit.android.services.LocationBasedGridManager;
import eco.emergi.embit.domain.repositories.IUserPreferencesRepository;
import eco.emergi.embit.domain.usecases.auth.ObserveAuthStateUseCase;
import eco.emergi.embit.domain.usecases.sync.BidirectionalSyncUseCase;
import javax.inject.Singleton;

/**
 * Hilt module for app-level services and managers.
 */
@dagger.Module()
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u00c7\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002J\u0012\u0010\u0003\u001a\u00020\u00042\b\b\u0001\u0010\u0005\u001a\u00020\u0006H\u0007J\u0012\u0010\u0007\u001a\u00020\b2\b\b\u0001\u0010\u0005\u001a\u00020\u0006H\u0007\u00a8\u0006\t"}, d2 = {"Leco/emergi/embit/android/di/AppModule;", "", "()V", "provideAppStateManager", "Leco/emergi/embit/android/services/AppStateManager;", "context", "Landroid/content/Context;", "provideLocationBasedGridManager", "Leco/emergi/embit/android/services/LocationBasedGridManager;", "androidApp_devDebug"})
@dagger.hilt.InstallIn(value = {dagger.hilt.components.SingletonComponent.class})
public final class AppModule {
    @org.jetbrains.annotations.NotNull()
    public static final eco.emergi.embit.android.di.AppModule INSTANCE = null;
    
    private AppModule() {
        super();
    }
    
    @dagger.Provides()
    @javax.inject.Singleton()
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.android.services.AppStateManager provideAppStateManager(@dagger.hilt.android.qualifiers.ApplicationContext()
    @org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        return null;
    }
    
    @dagger.Provides()
    @javax.inject.Singleton()
    @org.jetbrains.annotations.NotNull()
    public final eco.emergi.embit.android.services.LocationBasedGridManager provideLocationBasedGridManager(@dagger.hilt.android.qualifiers.ApplicationContext()
    @org.jetbrains.annotations.NotNull()
    android.content.Context context) {
        return null;
    }
}