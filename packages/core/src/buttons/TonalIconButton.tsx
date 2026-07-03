import React from 'react'
import { GestureResponderEvent, Pressable, View } from 'react-native'
import { rgba } from '../color'
import { Icon } from '../Icon/Icon'
import { IconNames } from '../Icon/IconNames'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { useTheme } from '../theme/context/ThemeContext'
import { themed, themedPressable } from '../theme/themed'
import { rv } from '../rv'

export const TonalIconButton: React.FC<TonalIconButtonProps> = (props) => {
    const { ds, resolve } = useTheme()
    const iconSize = props.iconSize ?? resolve(ds.comp.tonalIconButton.iconSize)
    const buttonSize = props.buttonSize ?? resolve(ds.comp.tonalIconButton.stateLayerWidth)

    return (
        <_Pressable style={props.style} onPress={props.onPress} disabled={props.disabled} buttonSize={buttonSize}>
            {({ pressed }) => (
                <StateLayer pressed={pressed} buttonSize={buttonSize} disabled={props.disabled}>
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

const _Pressable = themed(Pressable, ({ resolve, ds, buttonSize, disabled }) => ({
    width: buttonSize,
    height: buttonSize,
    borderRadius: resolve(ds.comp.tonalIconButton.stateLayerShape),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: disabled ? rgba(
        resolve(ds.comp.tonalIconButton.disabledStateLayerColor),
        resolve(ds.comp.tonalIconButton.disabledStateLayerOpacity)
    ) : resolve(ds.comp.tonalIconButton.containerColor),
}))

const StateLayer = themedPressable(View, ({ resolve, ds, buttonSize, disabled }) => ({
    alignItems: 'center',
    justifyContent: 'center',
    width: buttonSize,
    height: buttonSize,
    borderRadius: resolve(ds.comp.tonalIconButton.stateLayerShape),
    backgroundColor: 'transparent',
}), ({ resolve, ds }) => ({
    backgroundColor: rgba(
        resolve(ds.comp.tonalIconButton.pressedStateLayerColor),
        resolve(ds.comp.tonalIconButton.pressedStateLayerOpacity)
    ),
    borderRadius: resolve(ds.comp.tonalIconButton.stateLayerShape),
}))

const _Icon = themedPressable(Icon, ({ resolve, ds, disabled, color, xOffset, yOffset }) => ({
    flexShrink: 0,
    flexGrow: 0,
    color: color ?? resolve(ds.comp.tonalIconButton.iconColor),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.tonalIconButton.disabledIconColor), resolve(ds.comp.tonalIconButton.disabledIconOpacity)),
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

export interface TonalIconButtonProps {
    name: IconNames
    onPress?: (event: GestureResponderEvent) => void
    disabled?: boolean
    style?: ViewStyle
    showBadge?: boolean
    iconColor?: string
    iconSize?: number
    buttonSize?: number
}

