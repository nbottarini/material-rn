import React, { FC } from 'react'
import { useTheme } from '../theme/context/ThemeContext'
import { GestureResponderEvent, Pressable, View } from 'react-native'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { themed, themedPressable } from '../theme/themed'
import { rgba } from '../color'
import { Icon } from '../Icon/Icon'
import { styled } from '@nbottarini/react-native-styled'

export const RadioButton: FC<RadioButtonProps> = (props) => {
    const { ds, resolve } = useTheme()
    const iconSize = resolve(ds.comp.radioButton.size)
    const buttonSize = resolve(ds.comp.radioButton.stateLayerSize)
    const borderRadius = buttonSize

    return (
        <_Pressable style={props.style} onPress={props.onPress} disabled={props.disabled} buttonSize={buttonSize} borderRadius={borderRadius}>
            {({ pressed }) => (
                <StateLayer pressed={pressed} buttonSize={buttonSize} borderRadius={borderRadius}>
                    <_Icon
                        size={iconSize}
                        disabled={props.disabled}
                        selected={props.selected}
                        name={props.selected ? 'radio_button_checked' : 'radio_button_unchecked'}
                        pressed={pressed}
                        color={resolve(props.selected ? ds.comp.radioButton.selectedColor : ds.comp.radioButton.unselectedColor)}
                    />
                </StateLayer>
            )}
        </_Pressable>
    )
}

const _Pressable = styled(Pressable, ({ buttonSize, borderRadius }) => ({
    width: buttonSize,
    height: buttonSize,
    borderRadius: borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
}))

const StateLayer = themedPressable(View, ({ buttonSize, borderRadius }) => ({
    alignItems: 'center',
    justifyContent: 'center',
    width: buttonSize,
    height: buttonSize,
    backgroundColor: 'transparent',
    borderRadius: borderRadius,
}), ({ resolve, ds }) => ({
    backgroundColor: rgba(
        resolve(ds.comp.radioButton.pressedStateLayerColor),
        resolve(ds.comp.radioButton.pressedStateLayerOpacity)
    ),
}))

const _Icon = themed(Icon, ({ resolve, ds, disabled, color, selected }) => ({
    flexShrink: 0,
    flexGrow: 0,
    color: color !== '' ? color : resolve(selected ? ds.comp.radioButton.selectedColor : ds.comp.radioButton.unselectedColor),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.radioButton.disabledColor), resolve(ds.comp.radioButton.disabledOpacity)),
    } : {}),
}))

interface RadioButtonProps {
    selected: boolean
    disabled?: boolean
    onPress?: (event: GestureResponderEvent) => void
    style?: ViewStyle
}
