import React from 'react'
import { GestureResponderEvent, Pressable, TextStyle } from 'react-native'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { Typography } from '../text/Typography'
import { themedPressable } from '../theme/themed'
import { TypeScale } from '../theme/Theme/SysTokens'
import { useTheme } from '../theme/context/ThemeContext'

export const UnderlinedLinkButton: React.FC<UnderlinedLinkButtonProps> = (props) => {
    const { ds, resolve } = useTheme()
    return (
        <Pressable onPress={props.onPress} style={props.style}>
            {({ pressed }) => (
                <Label
                    typeScale={props.typeScale ?? resolve(ds.sys.typeScale.bodySmall)}
                    pressed={pressed}
                    numberOfLines={1}
                    allowFontScaling={false}
                    ellipsizeMode="tail"
                    style={props.labelStyle}
                >
                    {props.title}
                </Label>
            )}
        </Pressable>
    )
}

const Label = themedPressable(Typography, ({ resolve, ds }) => ({
    color: resolve(ds.sys.color.primary),
    textDecorationLine: 'underline',
}), ({ resolve, ds }) => ({
    color: resolve(ds.sys.color.onSurface),
}))

export interface UnderlinedLinkButtonProps {
    title: string
    typeScale?: TypeScale
    onPress?: (event: GestureResponderEvent) => void
    style?: ViewStyle
    labelStyle?: TextStyle
}
