import React, { forwardRef } from 'react'
import { StyleProp, TextInput, ViewProps } from 'react-native'
import { FormField } from './FormField'
import { useTheme } from '../theme/context/ThemeContext'
import { OutlinedFileInput } from './OutlinedFileInput'

export const UploadField = forwardRef<TextInput, UploadFieldProps>((props, ref) => {
    const hasError = !!props.errorText
    const { ds, resolve } = useTheme()
    return (
        <FormField label={props.label} {...props}>
            <OutlinedFileInput
                ref={ref}
                editable={false}
                {...props}
                error={hasError}
                trailingIcon={props.isUploading ? 'progress_activity' : (props.value ? 'cancel' : 'upload')}
                trailingIconColor={props.errorText ? resolve(ds.ref.palette.error._50) : resolve(ds.sys.color.primary)}
                onTrailingIconPress={() => props.onUploadPress?.()}
                errorText={props.errorText}
                uploadText={props.uploadText}
                supportingText={props.supportingText}
            />
        </FormField>
    )
})

interface UploadFieldProps {
    value?: string,
    isUploading?: boolean,
    disabled?: boolean
    label?: string
    placeholder?: string
    errorText?: string
    supportingText?: string
    uploadText?: string
    onUploadPress?: () => void
    style?: StyleProp<ViewProps>
}
