plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.kotlinSerialization)
    alias(libs.plugins.sqldelight)
    jacoco
}

kotlin {
    androidTarget {
        compilations.all {
            kotlinOptions {
                jvmTarget = "17"
            }
        }
    }

    js(IR) {
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
        }
        binaries.executable()
    }

    // Future iOS targets
    // iosX64()
    // iosArm64()
    // iosSimulatorArm64()

    sourceSets {
        val commonMain by getting {
            dependencies {
                // Coroutines
                implementation(libs.kotlinx.coroutines.core)

                // Serialization
                implementation(libs.kotlinx.serialization.json)

                // DateTime
                implementation(libs.kotlinx.datetime)

                // Ktor
                implementation(libs.ktor.client.core)
                implementation(libs.ktor.client.content.negotiation)
                implementation(libs.ktor.serialization.json)

                // SQLDelight
                implementation(libs.sqldelight.runtime)
                implementation(libs.sqldelight.coroutines)

                // Koin
                implementation(libs.koin.core)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(libs.kotlin.test)
                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.kotlinx.coroutines.test)
            }
        }

        val androidMain by getting {
            dependencies {
                implementation(libs.androidx.core.ktx)
                implementation(libs.androidx.lifecycle.viewmodel)
                implementation(libs.kotlinx.coroutines.android)
                implementation(libs.ktor.client.okhttp)
                implementation(libs.sqldelight.android.driver)

                // WorkManager for VPP
                implementation(libs.androidx.work.runtime)

                // Firebase - using explicit versions since KMP doesn't support platform() in sourceSets
                // Versions match Firebase BOM 33.5.1 used in androidApp
                implementation("com.google.firebase:firebase-auth:23.1.0")
                implementation("com.google.firebase:firebase-firestore:25.1.1")
                implementation(libs.play.services.auth)

                // Coroutines support for Firebase
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-play-services:1.9.0")
            }
        }

        val jsMain by getting {
            dependencies {
                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.ktor.client.js)
                implementation(libs.sqldelight.web.worker.driver)
            }
        }

        val androidUnitTest by getting {
            dependencies {
                implementation(libs.mockk)
                implementation(libs.turbine)
            }
        }

        // Future: iosMain, etc.
    }
}

android {
    namespace = "eco.emergi.embit.shared"
    compileSdk = 35

    defaultConfig {
        minSdk = 24
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

sqldelight {
    databases {
        create("EmbitDatabase") {
            packageName.set("eco.emergi.embit.data.local")
            schemaOutputDirectory.set(file("src/commonMain/sqldelight/databases"))
            verifyMigrations.set(true)
        }
    }
}

// JaCoCo Configuration for Test Coverage
tasks.withType<Test> {
    finalizedBy(tasks.named("jacocoTestReport"))
}

tasks.register<JacocoReport>("jacocoTestReport") {
    dependsOn(tasks.withType<Test>())

    reports {
        xml.required.set(true)
        html.required.set(true)
        csv.required.set(false)
    }

    classDirectories.setFrom(
        files(classDirectories.files.map {
            fileTree(it) {
                exclude(
                    "**/R.class",
                    "**/R\$*.class",
                    "**/BuildConfig.*",
                    "**/Manifest*.*",
                    "**/*\$ViewInjector*.*",
                    "**/*\$ViewBinder*.*",
                    "**/databinding/**",
                    "**/android/databinding/**",
                    "**/generated/**",
                    "**/sqldelight/**"
                )
            }
        })
    )

    executionData.setFrom(files("${project.buildDir}/jacoco/testDebugUnitTest.exec"))
}

tasks.register<JacocoCoverageVerification>("jacocoTestCoverageVerification") {
    dependsOn(tasks.named("jacocoTestReport"))

    violationRules {
        rule {
            limit {
                minimum = "0.60".toBigDecimal()
            }
        }
    }

    classDirectories.setFrom(tasks.named<JacocoReport>("jacocoTestReport").get().classDirectories)
    executionData.setFrom(files("${project.buildDir}/jacoco/testDebugUnitTest.exec"))
}
