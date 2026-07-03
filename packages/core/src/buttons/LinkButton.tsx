import React from 'react'
import { GestureResponderEvent, Pressable, TextStyle, View } from 'react-native'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { Typography } from '../text/Typography'
import { themed, themedPressable } from '../theme/themed'
import { TypeScale } from '../theme/Theme/SysTokens'
import { useTheme } from '../theme/context/ThemeContext'
import { rv } from '../rv'

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
    const { ds, resolve } = useTheme()
    return (
        <Pressable onPress={props.onPress} style={props.style}>
            {({ pressed }) => (
                <StateLayer pressed={pressed}>
                    <Label
                        typeScale={props.typeScale ?? resolve(ds.sys.typeScale.bodyMedium)}
                        numberOfLines={1}
                        allowFontScaling={false}
                        ellipsizeMode="tail"
                        style={props.labelStyle}
                    >
                        {props.title}
                    </Label>
                </StateLayer>
            )}
        </Pressable>
    )
}

const StateLayer = themedPressable(View, () => ({
    flexDirection: 'row',
    paddingHorizontal: rv(8),
    paddingVertical: rv(10),
}), ({ resolve, ds }) => ({
    borderRadius: resolve(ds.sys.shape.small),
    backgroundColor: resolve(ds.ref.palette.primary._90),
}))

const Label = themed(Typography, ({ resolve, ds }) => ({
    color: resolve(ds.sys.color.onSurface),
}))

export interface LinkButtonProps {
    title: string
    typeScale?: TypeScale
    onPress?: (event: GestureResponderEvent) => void
    style?: ViewStyle
    labelStyle?: TextStyle
}
