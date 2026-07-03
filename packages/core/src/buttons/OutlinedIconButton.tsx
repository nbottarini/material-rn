import React from 'react'
import { GestureResponderEvent, Pressable, View } from 'react-native'
import { rgba } from '../color'
import { Icon } from '../Icon/Icon'
import { IconNames } from '../Icon/IconNames'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { useTheme } from '../theme/context/ThemeContext'
import { themed, themedPressable } from '../theme/themed'
import { rv } from '../rv'

export const OutlinedIconButton: React.FC<OutlinedIconButtonProps> = (props) => {
    const { ds, resolve } = useTheme()
    const iconSize = resolve(ds.comp.outlinedIconButton.iconSize)
    const buttonSize = resolve(ds.comp.outlinedIconButton.stateLayerWidth)
    const borderRadius = resolve(ds.comp.outlinedIconButton.stateLayerShape)
    const containerColor = props.containerColor ?? resolve(ds.comp.outlinedIconButton.containerColor)

    return (
        <_Pressable style={props.style} onPress={props.onPress} disabled={props.disabled} buttonSize={buttonSize} borderRadius={borderRadius} containerColor={containerColor}>
            {({ pressed }) => (
                <StateLayer pressed={pressed} buttonSize={buttonSize} borderRadius={borderRadius} disabled={props.disabled}>
                    {props.showBadge && <Badge />}
                    <_Icon
                        size={iconSize}
                        disabled={props.disabled}
                        name={props.name}
                        pressed={pressed}
                    />
                </StateLayer>
            )}
        </_Pressable>
    )
}

const _Pressable = themed(Pressable, ({ resolve, ds, buttonSize, borderRadius, disabled, containerColor }) => ({
    width: buttonSize,
    height: buttonSize,
    borderRadius: borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: disabled ? rgba(
        resolve(ds.comp.outlinedIconButton.disabledStateLayerColor),
        resolve(ds.comp.outlinedIconButton.disabledStateLayerOpacity)
    ) : containerColor,
    borderWidth: resolve(ds.comp.outlinedButton.outlineWidth),
    borderColor: rgba(
        resolve(ds.comp.outlinedButton.outlineColor),
        resolve(ds.sys.state.disabledOnContainerOpacity)
    ),
}))

const StateLayer = themedPressable(View, ({ resolve, ds, buttonSize, borderRadius, disabled }) => ({
    alignItems: 'center',
    justifyContent: 'center',
    width: buttonSize,
    height: buttonSize,
    borderRadius: borderRadius,
}), ({ resolve, ds }) => ({
    backgroundColor: rgba(
        resolve(ds.comp.outlinedIconButton.pressedStateLayerColor),
        resolve(ds.comp.outlinedIconButton.pressedStateLayerOpacity)
    ),
}))

const _Icon = themedPressable(Icon, ({ resolve, ds, disabled, color, xOffset, yOffset }) => ({
    flexShrink: 0,
    flexGrow: 0,
    color: resolve(ds.comp.outlinedIconButton.iconColor),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.outlinedIconButton.disabledIconColor), resolve(ds.comp.outlinedIconButton.disabledIconOpacity)),
    } : {}),
}), ({ resolve, ds, color }) => ({}))

const Badge = themed(View, ({ ds, resolve }) => ({
    width: rv(6),
    height: rv(6),
    borderRadius: rv(3),
    position: 'absolute',
    backgroundColor: resolve(ds.sys.color.error),
    top: rv(8),
    right: rv(8),
}))

export interface OutlinedIconButtonProps {
    name: IconNames
    onPress?: (event: GestureResponderEvent) => void
    disabled?: boolean
    style?: ViewStyle
    showBadge?: boolean
    containerColor?: string
}

