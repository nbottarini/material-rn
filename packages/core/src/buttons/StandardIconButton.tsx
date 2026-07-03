import React from 'react'
import { GestureResponderEvent, Pressable, View } from 'react-native'
import { rgba } from '../color'
import { Icon } from '../Icon/Icon'
import { IconNames } from '../Icon/IconNames'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { useTheme } from '../theme/context/ThemeContext'
import { themed, themedPressable } from '../theme/themed'
import { rv } from '../rv'

export const StandardIconButton: React.FC<StandardIconButtonProps> = (props) => {
    const { ds, resolve } = useTheme()
    const iconSize = resolve(ds.comp.standardIconButton.iconSize)
    const buttonSize = resolve(ds.comp.standardIconButton.stateLayerWidth)
    const borderRadius = resolve(ds.comp.standardIconButton.stateLayerShape)

    return (
        <_Pressable style={props.style} onPress={props.onPress} disabled={props.disabled} buttonSize={buttonSize} borderRadius={borderRadius}>
            {({ pressed }) => (
                <StateLayer pressed={pressed} buttonSize={buttonSize} borderRadius={borderRadius}>
                    {props.showBadge && <Badge />}
                    <_Icon
                        size={iconSize}
                        disabled={props.disabled}
                        name={props.name}
                        pressed={pressed}
                        color={props.iconColor}
                    />
                </StateLayer>
            )}
        </_Pressable>
    )
}

const _Pressable = themed(Pressable, ({ resolve, ds, buttonSize, borderRadius }) => ({
    width: buttonSize,
    height: buttonSize,
    borderRadius: borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
}))

const StateLayer = themedPressable(View, ({ resolve, ds, buttonSize, borderRadius }) => ({
    alignItems: 'center',
    justifyContent: 'center',
    width: buttonSize,
    height: buttonSize,
    backgroundColor: 'transparent',
    borderRadius: borderRadius,
}), ({ resolve, ds }) => ({
    backgroundColor: rgba(
        resolve(ds.comp.standardIconButton.pressedStateLayerColor),
        resolve(ds.comp.standardIconButton.pressedStateLayerOpacity)
    ),
}))

const _Icon = themedPressable(Icon, ({ resolve, ds, disabled, color, xOffset, yOffset }) => ({
    flexShrink: 0,
    flexGrow: 0,
    color: color !== '' ? color : resolve(ds.comp.standardIconButton.iconColor),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.standardIconButton.disabledIconColor), resolve(ds.comp.standardIconButton.disabledIconOpacity)),
    } : {}),
}), ({ resolve, ds, color }) => ({
    color: color !== '' ? color : resolve(ds.comp.standardIconButton.pressedIconColor),
}))

const Badge = themed(View, ({ ds, resolve }) => ({
    width: rv(6),
    height: rv(6),
    borderRadius: rv(3),
    position: 'absolute',
    backgroundColor: resolve(ds.sys.color.error),
    top: rv(8),
    right: rv(8),
}))

export interface StandardIconButtonProps {
    name?: IconNames
    iconColor?: string
    onPress?: (event: GestureResponderEvent) => void
    disabled?: boolean
    style?: ViewStyle
    showBadge?: boolean
}
