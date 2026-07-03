const { getDefaultConfig } = require('expo/metro-config')
const { mergeConfig } = require('@react-native/metro-config')

const getExpoWorkspaceDefaultConfig = (projectRoot) => {
    const config = {
        resolver: {
            unstable_conditionNames: ['require', 'react-native', 'browser'],
            // Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
            disableHierarchicalLookup: true,
        },
    }
    return mergeConfig(getDefaultConfig(projectRoot), config)
}

module.exports = getExpoWorkspaceDefaultConfig(__dirname)
