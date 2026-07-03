import React, { forwardRef } from 'react'
import { FlexAlignType, InputModeOptions, KeyboardTypeOptions, StyleProp, TextInput, ViewProps } from 'react-native'
import { FormField } from '../FormField'
import { IconNames } from '../../Icon/IconNames'
import { TypeScale } from '../../theme/Theme/SysTokens'
import { OutlinedTextInput } from './OutlinedTextInput'

export const TextField = forwardRef<TextInput, TextFieldProps>((props, ref) => {
    const hasError = !!props.errorText
    return (
        <FormField label={props.label} {...props}>
            <OutlinedTextInput
                ref={ref}
                {...props}
                error={hasError}
                supportingText={hasError ? props.errorText : props.supportingText}
            />
        </FormField>
    )
})

interface TextFieldProps {
    value?: string,
    defaultValue?: string
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
    leadingIconColor?: string
    onLeadingIconPress?: () => void
    trailingIcon?: IconNames
    trailingIconColor?: string
    onTrailingIconPress?: () => void
    iconAlignment?: FlexAlignType
    onChangeText?: (text: string) => void
    onFocus?: (args: any) => void
    onBlur?: (args: any) => void
    typeScale?: TypeScale
    textAlign?: 'auto' | 'center' | 'left' | 'right' | 'justify'
    textAlignVertical?: 'auto' | 'center' | 'top' | 'bottom'
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
    style?: StyleProp<ViewProps>
}
