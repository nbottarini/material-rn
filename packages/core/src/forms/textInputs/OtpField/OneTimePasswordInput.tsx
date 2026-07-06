import React, { FC } from 'react'
import { OtpInput } from 'react-native-otp-entry'
import { useTheme } from '../../../theme/context/ThemeContext'
import { View, ViewStyle } from 'react-native'
import { rv } from '../../../rv'
import { rgba } from '../../../color'

export const OneTimePasswordInput: FC<OneTimePasswordInputProps> = (props) => {
    const { ds, resolve } = useTheme()
    return (
        <View style={[{ alignItems: 'center' }, props.style]}>
            <OtpInput
                autoFocus={false}
                numberOfDigits={props.numberOfDigits ?? 6}
                focusColor={resolve(ds.sys.color.primary)}
                onFilled={props.onFilled}
                onTextChange={props.onTextChange}
                theme={{
                    containerStyle: { width: 'auto', gap: rv(16) },
                    pinCodeContainerStyle: { width: rv(48), height: rv(48), borderRadius: rv(16), borderColor: props.hasError ? resolve(ds.ref.palette.error._50) : resolve(ds.sys.color.outlineVariant) },
                    pinCodeTextStyle: {
                        fontFamily: resolve(ds.sys.typeScale.bodyMedium.fontFamily),
                        fontSize: resolve(ds.sys.typeScale.bodyMedium.fontSize),
                        letterSpacing: resolve(ds.sys.typeScale.bodyMedium.letterSpacing),
                        lineHeight: resolve(ds.sys.typeScale.bodyMedium.lineHeight),
                        color: '#262626',
                    },
                    focusedPinCodeContainerStyle: {
                        backgroundColor: rgba(
                            resolve(ds.comp.textButton.pressedStateLayerColor),
                            resolve(0.1)
                        ),
                        borderColor: rgba(
                            resolve(ds.comp.textButton.pressedStateLayerColor),
                            resolve(0.1)
                        ),
                    },
                }}
            />
        </View>
    )
}

export interface OneTimePasswordInputProps {
    numberOfDigits?: number
    onFilled?: (text: string) => void
    onTextChange?: (text: string) => void
    style?: ViewStyle
    hasError?: boolean
}
