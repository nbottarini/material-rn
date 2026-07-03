import React, { FC, useMemo } from 'react'
import { useTheme } from '../theme/context/ThemeContext'
import { Platform, Switch as NativeSwitch } from 'react-native'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { rgba } from '../color'

export const Switch: FC<SwitchProps> = (props) => {
    const { ds, resolve } = useTheme()
    const thumbColor = useMemo(() => {
        if (Platform.OS === 'ios') return undefined
        if (props.disabled) {
            return resolve(props.checked ? ds.comp.switch.disabledCheckedThumbColor : ds.comp.switch.disabledUncheckedThumbColor)
        }
        return resolve(props.checked ? ds.comp.switch.checkedThumbColor : ds.comp.switch.uncheckedThumbColor)
    }, [ds, props.disabled, props.checked, resolve])

    const checkedTrackColor = useMemo(() => {
        if (props.disabled) {
            return rgba(resolve(ds.comp.switch.disabledCheckedTrackColor), resolve(ds.comp.switch.disabledTrackOpacity))
        }
        return resolve(ds.comp.switch.checkedTrackColor)
    }, [ds, resolve, props.disabled])

    const uncheckedTrackColor = useMemo(() => {
        if (props.disabled) {
            return rgba(resolve(ds.comp.switch.disabledCheckedTrackColor), resolve(ds.comp.switch.disabledTrackOpacity))
        }
        return resolve(ds.comp.switch.uncheckedTrackColor)
    }, [ds, resolve, props.disabled])

    return (
        <NativeSwitch
            value={props.checked}
            disabled={props.disabled}
            onValueChange={props.disabled ? undefined : props.onPress}
            style={props.style}
            thumbColor={thumbColor}
            trackColor={{
                true: checkedTrackColor,
                false: uncheckedTrackColor,
            }}
        />
    )
}

interface SwitchProps {
    checked: boolean
    disabled?: boolean
    onPress?: () => void
    style?: ViewStyle
}
