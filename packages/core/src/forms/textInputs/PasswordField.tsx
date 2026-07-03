import React, { FC, useState } from 'react'
import { InputModeOptions, KeyboardTypeOptions, StyleProp, ViewProps } from 'react-native'
import { FormField } from '../FormField'
import { IconNames } from '../../Icon/IconNames'
import { OutlinedTextInput } from './OutlinedTextInput'
import { useTheme } from '../../theme/context/ThemeContext'

export const PasswordField: FC<PasswordFieldProps> = (props) => {
    const hasError = !!props.errorText
    const [showPassword, setShowPassword] = useState(false)
    const { resolve, ds } = useTheme()
    return (
        <FormField label={props.label} {...props}>
            <OutlinedTextInput
                {...props}
                autoCapitalize="none"
                secureTextEntry={!showPassword}
                trailingIcon={showPassword ? 'visibility_off' : 'visibility'}
                onTrailingIconPress={() => setShowPassword(!showPassword)}
                error={hasError}
                supportingText={hasError ? props.errorText : props.supportingText}
                keyboardType="default"
                trailingIconColor={resolve(ds.sys.color.primary)}
            />
        </FormField>
    )
}

export interface PasswordFieldProps {
    value?: string,
    disabled?: boolean
    editable?: boolean
    label?: string
    placeholder?: string
    errorText?: string
    supportingText?: string
    autoFocus?: boolean
    keyboardType?: KeyboardTypeOptions
    inputMode?: InputModeOptions
    maxLength?: number
    leadingIcon?: IconNames
    onLeadingIconPress?: () => void
    onChangeText?: (text: string) => void
    onFocus?: (args: any) => void
    onBlur?: (args: any) => void
    style?: StyleProp<ViewProps>
}
