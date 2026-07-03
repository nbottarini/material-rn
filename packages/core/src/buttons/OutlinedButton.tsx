import React from 'react'
import { GestureResponderEvent, Pressable, TextStyle, View } from 'react-native'
import { IconNames } from '../Icon/IconNames'
import { Icon } from '../Icon/Icon'
import { rgba } from '../color'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { Typography } from '../text/Typography'
import { useTheme } from '../theme/context/ThemeContext'
import { themedPressable } from '../theme/themed'

export const OutlinedButton: React.FC<OutlinedButtonProps> = (props) => {
    const { ds, resolve } = useTheme()
    return (
        <Pressable onPress={props.onPress} disabled={props.disabled} style={props.style}>
            {({ pressed }) => (
                <Container disabled={props.disabled} style={props.containerStyle} pressed={pressed}>
                        <StateLayer pressed={pressed} style={props.contentStyle}>
                            {props.icon && (
                                <_Icon
                                    size={resolve(ds.comp.outlinedButton.iconSize)}
                                    disabled={props.disabled}
                                    name={props.icon}
                                    pressed={pressed}
                                />
                            )}
                            <Label
                                typeScale={resolve(ds.comp.outlinedButton.labelTypeScale)}
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

const Container = themedPressable(View, ({ resolve, ds, disabled }) => ({
    borderRadius: resolve(ds.comp.outlinedButton.containerShape),
    borderWidth: resolve(ds.comp.outlinedButton.outlineWidth),
    borderColor: resolve(ds.comp.outlinedButton.outlineColor),
    ...(disabled ? {
        borderColor: rgba(resolve(ds.comp.outlinedButton.disabledOutlineColor), resolve(ds.comp.outlinedButton.disabledOutlineOpacity)),
    } : {}),
}), ({ resolve, ds }) => ({
    borderColor: resolve(ds.comp.outlinedButton.pressedOutlineColor),
}))

const StateLayer = themedPressable(View, ({ resolve, ds }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: resolve(ds.comp.outlinedButton.containerPaddingVertical),
    paddingHorizontal: resolve(ds.comp.outlinedButton.containerPaddingVertical),
    gap: resolve(ds.comp.outlinedButton.containerGap),
}), ({ resolve, ds }) => ({
    borderRadius: resolve(ds.comp.outlinedButton.containerShape),
    backgroundColor: rgba(
        resolve(ds.comp.outlinedButton.pressedStateLayerColor),
        resolve(ds.comp.outlinedButton.pressedStateLayerOpacity)
    ),
}))

const Label = themedPressable(Typography, ({ resolve, ds, disabled }) => ({
    flexShrink: 1,
    flexGrow: 0,
    textAlign: 'center',
    color: resolve(ds.comp.outlinedButton.labelColor),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.outlinedButton.disabledLabelColor), resolve(ds.comp.outlinedButton.disabledLabelOpacity)),
    } : {}),
}), ({ resolve, ds }) => ({
    color: resolve(ds.comp.outlinedButton.pressedLabelColor),
}))

const _Icon = themedPressable(Icon, ({ resolve, ds, disabled }) => ({
    color: resolve(ds.comp.outlinedButton.iconColor),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.outlinedButton.disabledIconColor), resolve(ds.comp.outlinedButton.disabledIconOpacity)),
    } : {}),
}), ({ resolve, ds }) => ({
    color: resolve(ds.comp.outlinedButton.pressedIconColor),
}))

export interface OutlinedButtonProps {
    title: string
    icon?: IconNames
    onPress?: (event: GestureResponderEvent) => void
    style?: ViewStyle
    containerStyle?: ViewStyle
    contentStyle?: ViewStyle
    labelStyle?: TextStyle
    disabled?: boolean
}
