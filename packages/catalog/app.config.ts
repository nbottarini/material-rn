import { ExpoConfig } from 'expo/config'

module.exports = {
    'name': 'Catalog',
    'slug': 'catalog',
    'version': '1.0.0',
    'orientation': 'portrait',
    'platforms': ['android', 'ios'],
    'icon': './assets/images/icon.png',
    'userInterfaceStyle': 'light',
    'ios': {
        'buildNumber': '1',
        'bundleIdentifier': 'com.nbottarini.materialrn.catalog',
        'supportsTablet': false,
    },
    'android': {
        'versionCode': 1,
        'package': 'com.nbottarini.materialrn.catalog',
        'adaptiveIcon': {
            'foregroundImage': './assets/images/adaptive-icon.png',
            'backgroundColor': '#ffffff',
        },
        'allowBackup': false,
    },
    'plugins': [
        [
            'expo-build-properties',
            {
                'android': {
                    'buildToolsVersion': '36.0.0',
                    'compileSdkVersion': 36,
                    'targetSdkVersion': 36,
                    'minSdkVersion': 26,
                },
                'ios': {
                    'deploymentTarget': '16.4',
                    'useFrameworks': 'static',
                },
            },
        ],
        [
            'expo-font',
            {
                'fonts': [
                    './assets/fonts/MaterialSymbols.ttf',
                    './assets/fonts/inter-300.ttf',
                    './assets/fonts/inter-400.ttf',
                    './assets/fonts/inter-500.ttf',
                    './assets/fonts/inter-600.ttf',
                ],
            },
        ],
    ],
}  satisfies ExpoConfig
