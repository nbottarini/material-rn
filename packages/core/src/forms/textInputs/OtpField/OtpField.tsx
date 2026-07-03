import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { styled } from '../../../styled'
import { rv } from '../../../rv'
import { themed } from '../../../theme/themed'
import { BodyMedium, BodySmall } from '../../../text/Typography'
import { TextLink } from '../../../text/TextLink'
import { CountDown } from './CountDown'
import { OneTimePasswordInput, OneTimePasswordInputProps } from './OneTimePasswordInput'

export const OtpField: FC<OtpFieldProps> = (props) => {
    const [canResend, setCanResend] = React.useState(true)
    const [resetTimer, setResetTimer] = React.useState(false)

    return (
        <View>
            <_OneTimePasswordInput
                onTextChange={(text) => props.onTextChange(text)}
                onFilled={(text) => props.onFilled(text)}
                hasError={!!props.errorText}
            />
            <OtpError>{props.errorText ?? ''}</OtpError>
            <Actions>
                <BodyMedium>{props.resendText ?? '¿No lo recibió?'}</BodyMedium>
                {canResend ?
                    <TextLink
                        onPress={() => {
                            props.onResend()
                            setResetTimer(!resetTimer)
                            setCanResend(!canResend)
                        }}
                        style={{ width: rv(103) }}
                    >
                        {props.resendButtonText ?? 'Reenviar código'}
                    </TextLink>
                    :
                    <CountDown duration={props.resendCountDownInSecs} onFinish={() => setCanResend(true)} resetCount={resetTimer}/>

                }
            </Actions>
        </View>
    )

}

const Actions = styled(View, {
    alignItems: 'center',
    marginTop: rv(50),
})

const _OneTimePasswordInput = styled(OneTimePasswordInput, {
    marginBottom: rv(4),
})

const OtpError = themed(BodySmall, ({ ds, resolve }) => ({
    color: resolve(ds.ref.palette.error._50),
    paddingLeft: rv(4),
}))

interface OtpFieldProps extends OneTimePasswordInputProps {
    resendText?: string
    resendButtonText?: string
    errorText?: string
    resendCountDownInSecs: number
    onResend: () => void
}
