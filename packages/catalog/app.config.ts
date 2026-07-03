import { ExpoConfig } from 'expo/config'

module.exports = {
    'name': 'Catalog',
    'slug': 'catalog',
    'version': '1.0.0',
    'orientation': 'portrait',
    'platforms': ['android', 'ios'],
    'icon': './assets/images/icon.png',
    'userInterfaceStyle': 'light',
    'splash': {
        'backgroundColor': '#ffffff',
    },
    'assetBundlePatterns': [
        '**/*',
    ],
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
                    'buildToolsVersion': '34.0.0',
                    'compileSdkVersion': 34,
                    'targetSdkVersion': 34,
                    'minSdkVersion': 23,
                    'kotlinVersion': '1.9.0',
                },
                'ios': {
                    'deploymentTarget': '13.4',
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
