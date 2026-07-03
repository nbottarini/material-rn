import React, { FC } from 'react'
import { useTheme } from '../theme/context/ThemeContext'
import { GestureResponderEvent, Pressable, View } from 'react-native'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { themed, themedPressable } from '../theme/themed'
import { rgba } from '../color'
import { Icon } from '../Icon/Icon'
import { styled } from '@nbottarini/react-native-styled'
import { rv } from '../rv'

export const Checkbox: FC<CheckboxProps> = (props) => {
    const { ds, resolve } = useTheme()
    const iconSize = resolve(ds.comp.checkbox.size)
    const buttonSize = resolve(ds.comp.checkbox.stateLayerSize)
    const borderRadius = resolve(ds.comp.checkbox.stateLayerShape)

    return (
        <_Pressable style={props.style} onPress={props.onPress} disabled={props.disabled} buttonSize={buttonSize} borderRadius={borderRadius}>
            {({ pressed }) => (
                <StateLayer pressed={pressed} buttonSize={buttonSize} borderRadius={borderRadius}>
                    <CheckeableContainer checked={props.checked} disabled={props.disabled}>
                        <_Icon
                            size={iconSize}
                            disabled={props.disabled}
                            name={'check'}
                            pressed={pressed}
                            color={props.checked ? resolve(ds.sys.color.surface) : 'transparent'}
                        />
                    </CheckeableContainer>
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
    width: buttonSize / 1.5,
    height: buttonSize / 1.5,
    backgroundColor: 'transparent',
    borderRadius: borderRadius,
}), ({ resolve, ds }) => ({
    backgroundColor: rgba(
        resolve(ds.comp.checkbox.pressedStateLayerColor),
        resolve(ds.comp.checkbox.pressedStateLayerOpacity)
    ),
}))

const CheckeableContainer = themed(View, ({ resolve, ds, checked, disabled }) => ({
    width: rv(16),
    height: rv(16),
    borderWidth: rv(2),
    borderColor: resolve(ds.sys.color.primary),
    backgroundColor: checked ? resolve(ds.sys.color.primary) : 'transparent',
    ...(disabled ? {
        backgroundColor: rgba(resolve(ds.comp.checkbox.disabledColor), resolve(ds.comp.checkbox.disabledOpacity)),
        borderColor: rgba(resolve(ds.comp.checkbox.disabledColor), resolve(ds.comp.checkbox.disabledOpacity)),
    } : {}),
    borderRadius: rv(2),
    alignItems: 'center',
    justifyContent: 'center',
}))

const _Icon = themed(Icon, ({ resolve, ds, disabled, color }) => ({
    flexShrink: 0,
    flexGrow: 0,
    ...(disabled ? {
        color: resolve(ds.sys.color.surface),
    } : {}),
}))

interface CheckboxProps {
    checked: boolean
    disabled?: boolean
    onPress?: (event: GestureResponderEvent) => void
    style?: ViewStyle
}
