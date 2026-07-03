import React from 'react'
import { GestureResponderEvent, Pressable, TextStyle, View } from 'react-native'
import { rgba } from '../color'
import { Icon } from '../Icon/Icon'
import { IconNames } from '../Icon/IconNames'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { Typography } from '../text/Typography'
import { useTheme } from '../theme/context/ThemeContext'
import { themed, themedPressable } from '../theme/themed'
import { TypeScale } from '../theme/Theme/SysTokens'

export const TextButton: React.FC<TextButtonProps> = (props) => {
    const { ds, resolve } = useTheme()
    return (
        <Pressable onPress={props.onPress} disabled={props.disabled} style={props.style}>
            {({ pressed }) => (
                <Container disabled={props.disabled} pressed={pressed} style={props.containerStyle}>
                        <StateLayer style={props.contentStyle}>
                            {props.icon && <_Icon size={resolve(ds.comp.textButton.iconSize)} disabled={props.disabled} name={props.icon} pressed={pressed} />}
                            <Label
                                typeScale={props.typeScale ?? resolve(ds.comp.textButton.labelTypeScale)}
                                pressed={pressed}
                                disabled={props.disabled}
                                numberOfLines={1}
                                allowFontScaling={false}
                                ellipsizeMode="tail"
                                style={props.labelStyle}
                            >
                                {props.title}
                            </Label>
                            {props.trailingComponent}
                        </StateLayer>
                </Container>
            )}
        </Pressable>
    )
}

const Container = themedPressable(View, ({ resolve, ds }) => ({
    paddingVertical: resolve(ds.comp.textButton.containerPaddingVertical),
}), ({ resolve, ds }) => ({
    borderRadius: resolve(ds.comp.textButton.containerShape),
    backgroundColor: rgba(
        resolve(ds.comp.textButton.pressedStateLayerColor),
        resolve(ds.comp.textButton.pressedStateLayerOpacity)
    ),
}))

const StateLayer = themed(View, ({ resolve, ds }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: resolve(ds.comp.textButton.containerGap),
    paddingHorizontal: resolve(ds.comp.textButton.containerPaddingHorizontal),
}))

const Label = themedPressable(Typography, ({ resolve, ds, disabled }) => ({
    flexShrink: 1,
    flexGrow: 0,
    textAlign: 'center',
    color: resolve(ds.comp.textButton.labelColor),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.textButton.disabledLabelColor), resolve(ds.comp.textButton.disabledLabelOpacity)),
    } : {}),
}), ({ resolve, ds }) => ({
    color: resolve(ds.comp.textButton.pressedLabelColor),
}))

const _Icon = themedPressable(Icon, ({ resolve, ds, disabled }) => ({
    flexShrink: 0,
    flexGrow: 0,
    color: resolve(ds.comp.textButton.iconColor),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.textButton.disabledIconColor), resolve(ds.comp.textButton.disabledIconOpacity)),
    } : {}),
}), ({ resolve, ds }) => ({
    color: resolve(ds.comp.textButton.pressedIconColor),
}))

export interface TextButtonProps {
    title: string
    icon?: IconNames
    onPress?: (event: GestureResponderEvent) => void
    style?: ViewStyle
    containerStyle?: ViewStyle
    contentStyle?: ViewStyle
    labelStyle?: TextStyle
    typeScale?: TypeScale
    disabled?: boolean
    trailingComponent?: React.ReactElement
}
