import { Platform } from 'react-native'

export const singleLineTextInputLineHeight = (
    lineHeight: number,
    platform: string = Platform.OS,
): number | undefined => {
    return platform === 'ios' ? undefined : lineHeight
}
