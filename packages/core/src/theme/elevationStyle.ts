import { Platform, ViewStyle } from 'react-native'

export const elevationStyle = (
    elevation: number,
    shadowColor: string,
    platform: string = Platform.OS,
): ViewStyle => {
    if (platform === 'android') return { elevation }
    if (platform !== 'ios') return {}
    if (elevation <= 0) return { shadowOpacity: 0 }

    return {
        shadowColor,
        shadowOffset: {
            width: 0,
            height: Math.max(1, Math.round(elevation / 2)),
        },
        shadowOpacity: 0.18,
        shadowRadius: Math.max(2, elevation),
    }
}
