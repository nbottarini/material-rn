import React, { FC } from 'react'
import { StyleProp, ViewProps } from 'react-native'
import { FormField } from './FormField'
import { Dropdown, DropdownOption } from './Dropdown'

export const DropdownField: FC<DropdownFieldProps> = (props) => {
    const hasError = !!props.errorText
    return (
        <FormField label={props.label} {...props}>
            <Dropdown
                {...props}
                modalTitle={props.modalTitle ?? props.label}
                error={hasError}
                supportingText={hasError ? props.errorText : props.supportingText}
                navigator={props.navigator}
            />
        </FormField>
    )
}

interface DropdownFieldProps {
    value?: string,
    disabled?: boolean
    label?: string
    modalTitle?: string
    placeholder?: string
    onSelect?: (id: string, title: string) => void
    options: DropdownOption[]
    errorText?: string
    supportingText?: string
    style?: StyleProp<ViewProps>
    navigator: any
}
