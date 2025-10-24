plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.jetbrainsCompose)
    alias(libs.plugins.compose.compiler)
}

kotlin {
    js(IR) {
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
                outputFileName = "embit.js"
            }
        }
        binaries.executable()
    }

    sourceSets {
        val jsMain by getting {
            dependencies {
                implementation(project(":shared"))
                implementation(compose.html.core)
                implementation(compose.runtime)
                implementation(libs.koin.core)
                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.kotlinx.datetime)

                // Chart.js for data visualization
                implementation(npm("chart.js", "4.4.1"))
            }
        }
    }
}

// Configure webpack to copy resources
tasks.named("jsBrowserDevelopmentWebpack") {
    doLast {
        copy {
            from("src/jsMain/resources")
            into("build/distributions")
        }
    }
}

tasks.named("jsBrowserProductionWebpack") {
    doLast {
        copy {
            from("src/jsMain/resources")
            into("build/distributions")
        }
    }
}
