import React, { useState } from 'react'
import { TitleMedium } from '@material-rn/core'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'
import { OtpField } from '@material-rn/core'

export const OtpFieldScreen = () => {
    const toast = useToast()
    const [, setValue1] = useState('')
    const [, setValue2] = useState('')
    return (
        <ScreenContainer>
            <TitleMedium>OTP Field</TitleMedium>
            <OtpField
                onTextChange={value => setValue1(value)}
                onFilled={value => toast.show(`filled ${value}`)}
                onResend={() => toast.show('resend')}
                resendCountDownInSecs={5}
            />
            <TitleMedium>OTP Field (Error)</TitleMedium>
            <OtpField
                errorText="Código ingresado incorrecto o expirado."
                onTextChange={value => setValue2(value)}
                onFilled={value => toast.show(`filled ${value}`)}
                onResend={() => toast.show('resend')}
                resendCountDownInSecs={5}
            />
        </ScreenContainer>
    )
}

