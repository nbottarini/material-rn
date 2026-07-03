import React from 'react'
import { GestureResponderEvent, Pressable, TextStyle, View } from 'react-native'
import { IconNames } from '../Icon/IconNames'
import { Icon } from '../Icon/Icon'
import { rgba } from '../color'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { Typography } from '../text/Typography'
import { useTheme } from '../theme/context/ThemeContext'
import { themed, themedPressable } from '../theme/themed'

export const FilledButton: React.FC<FilledButtonProps> = (props) => {
    const { ds, resolve } = useTheme()
    return (
        <Pressable onPress={props.onPress} disabled={props.disabled} style={props.style}>
            {({ pressed }) => (
                <Container disabled={props.disabled} style={props.containerStyle}>
                        <StateLayer pressed={pressed} style={props.contentStyle}>
                            {props.icon && (
                                <_Icon
                                    size={resolve(ds.comp.filledButton.iconSize)}
                                    disabled={props.disabled}
                                    name={props.icon}
                                    pressed={pressed}
                                />
                            )}
                            <Label
                                typeScale={resolve(ds.comp.filledButton.labelTypeScale)}
                                pressed={pressed}
                                disabled={props.disabled}
                                numberOfLines={1}
                                allowFontScaling={false}
                                ellipsizeMode="tail"
                                style={props.labelStyle}
                            >
                                {props.title}
                            </Label>
                        </StateLayer>
                </Container>
            )}
        </Pressable>
    )
}

const Container = themed(View, ({ resolve, ds, disabled }) => ({
    borderRadius: resolve(ds.comp.filledButton.containerShape),
    backgroundColor: resolve(ds.comp.filledButton.containerColor),
    ...(disabled ? {
        backgroundColor: rgba(resolve(ds.comp.filledButton.disabledContainerColor), resolve(ds.comp.filledButton.disabledContainerOpacity)),
    } : {}),
}))

const StateLayer = themedPressable(View, ({ resolve, ds }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: resolve(ds.comp.filledButton.containerPaddingVertical),
    paddingHorizontal: resolve(ds.comp.filledButton.containerPaddingVertical),
    gap: resolve(ds.comp.filledButton.containerGap),
}), ({ resolve, ds }) => ({
    borderRadius: resolve(ds.comp.filledButton.containerShape),
    backgroundColor: rgba(
        resolve(ds.comp.filledButton.pressedStateLayerColor),
        resolve(ds.comp.filledButton.pressedStateLayerOpacity)
    ),
}))

const Label = themedPressable(Typography, ({ resolve, ds, disabled }) => ({
    flexShrink: 1,
    flexGrow: 0,
    textAlign: 'center',
    color: resolve(ds.comp.filledButton.labelColor),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.filledButton.disabledLabelColor), resolve(ds.comp.filledButton.disabledLabelOpacity)),
    } : {}),
}), ({ resolve, ds }) => ({
    color: resolve(ds.comp.filledButton.pressedLabelColor),
}))

const _Icon = themedPressable(Icon, ({ resolve, ds, disabled }) => ({
    color: resolve(ds.comp.filledButton.iconColor),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.filledButton.disabledIconColor), resolve(ds.comp.filledButton.disabledIconOpacity)),
    } : {}),
}), ({ resolve, ds }) => ({
    color: resolve(ds.comp.filledButton.pressedIconColor),
}))

export interface FilledButtonProps {
    title: string
    icon?: IconNames
    onPress?: (event: GestureResponderEvent) => void
    style?: ViewStyle
    containerStyle?: ViewStyle
    contentStyle?: ViewStyle
    labelStyle?: TextStyle
    disabled?: boolean
}
