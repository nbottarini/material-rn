import React, { FC } from 'react'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { FormField } from './FormField'
import { View } from 'react-native'
import { styled } from '@nbottarini/react-native-styled'
import { RadioButton } from './RadioButton'
import { BodyMedium, BodySmall } from '../text/Typography'
import { rv } from '../rv'
import { themed } from '../theme/themed'

export const YesNoField: FC<YesNoFieldProps> = (props) => {
    return (
        <FormField label={props.label} style={props.style}>
            <RadioContainer>
                <OptionContainer>
                    <RadioButton selected={props.value === true} onPress={() => props.onChange?.(true)} disabled={props.disabled} />
                    <OptionLabel>{props.yesTitle ?? 'Si'}</OptionLabel>
                </OptionContainer>
                <OptionContainer>
                    <RadioButton selected={props.value === false} onPress={() => props.onChange?.(false)} disabled={props.disabled} />
                    <OptionLabel>{props.noTitle ?? 'No'}</OptionLabel>
                </OptionContainer>
            </RadioContainer>
            <ErrorText>{props.errorText}</ErrorText>
        </FormField>
    )
}

const RadioContainer = styled(View, {
    flexDirection: 'row',
    gap: rv(20),
    alignItems: 'center',
    marginBottom: rv(5),
})

const OptionContainer = styled(View, {
    flexDirection: 'row',
    alignItems: 'center',
})

const OptionLabel = styled(BodyMedium, {
})

const ErrorText = themed(BodySmall, ({ ds, resolve }) => ({
    minHeight: resolve(ds.sys.typeScale.bodySmall.lineHeight),
    color: resolve(ds.sys.color.error),
}))

interface YesNoFieldProps {
    value?: boolean
    label?: string
    yesTitle?: string
    noTitle?: string
    errorText?: string
    disabled?: boolean
    onChange?: (value: boolean) => void
    style?: ViewStyle
}
