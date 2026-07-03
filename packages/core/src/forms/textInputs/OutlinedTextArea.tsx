import React, { forwardRef, MutableRefObject } from 'react'
import { InputModeOptions, KeyboardTypeOptions, Platform, TextInput, View } from 'react-native'
import { TypeScale } from '../../theme/Theme/SysTokens'
import { useTheme } from '../../theme/context/ThemeContext'
import { themed } from '../../theme/themed'
import { rgba } from '../../color'
import { Typography } from '../../text/Typography'
import { rv } from '../../rv'

export const OutlinedTextArea = forwardRef<TextInput, OutlinedTextAreaProps>((props, ref) => {
    const { ds, resolve } = useTheme()
    const [uncontrolledValue, setUncontrolledValue] = React.useState(props.defaultValue)
    const isControlled = props.value !== undefined
    const value = isControlled ? props.value : uncontrolledValue
    const [focused, setFocused] = React.useState(false)
    const canEnterText = !props.disabled && props.editable
    const inputTypeScale = resolve(ds.comp.outlinedTextInput.inputTextTypeScale)
    const innerRef = React.useRef<TextInput>()
    const inputRef = (ref !== undefined ? ref : innerRef) as MutableRefObject<TextInput>

    const handleFocus = (args: any) => {
        if (!canEnterText) return
        setFocused(true)
        props.onFocus?.(args)
    }

    const handleBlur = (args: Object) => {
        setFocused(false)
        if (canEnterText) props.onBlur?.(args)
    }

    const handleChangeText = (value: string) => {
        if (!canEnterText) return
        if (!isControlled) setUncontrolledValue(value)
        props.onChangeText?.(value)
    }

    return (
        <View>
            <Container focused={focused} error={props.error} disabled={props.disabled} style={[{
                ...(props.disabled ? {
                    backgroundColor: rgba(
                        resolve(ds.comp.outlinedTextInput.disabledContainerColor),
                        resolve(ds.comp.outlinedTextInput.disabledContainerOpacity),
                    ),
                } : {}),
            }]}>
                <InputContainer>
                    <TextInput
                        autoCapitalize={props.autoCapitalize}
                        ref={inputRef}
                        textAlignVertical={'top'}
                        autoFocus={props.autoFocus}
                        multiline={true}
                        value={value}
                        editable={!props.disabled && props.editable}
                        secureTextEntry={props.secureTextEntry}
                        keyboardType={props.keyboardType ?? (Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password')}
                        inputMode={props.inputMode}
                        maxLength={props.maxLength}
                        placeholder={props.placeholder}
                        placeholderTextColor={rgba(
                            resolve(ds.comp.outlinedTextInput.placeholderTextColor),
                            resolve(ds.comp.outlinedTextInput.placeholderOpacity)
                        )}
                        onChangeText={handleChangeText}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        cursorColor={resolve(ds.comp.outlinedTextInput.caretColor)}
                        selectionColor={resolve(ds.comp.outlinedTextInput.caretColor)}
                        underlineColorAndroid="transparent"
                        allowFontScaling={false}
                        style={[
                            {
                                fontFamily: resolve(props.typeScale?.fontFamily) ?? resolve(inputTypeScale.fontFamily),
                                fontSize: resolve(props.typeScale?.fontSize) ?? resolve(inputTypeScale.fontSize),
                                letterSpacing: resolve(props.typeScale?.letterSpacing) ?? resolve(inputTypeScale.letterSpacing),
                                color: resolve(ds.comp.outlinedTextInput.inputTextColor),
                                height: rv(100),
                                ...(props.disabled ? {
                                    color: rgba(
                                        resolve(ds.comp.outlinedTextInput.disabledInputTextColor),
                                        resolve(ds.comp.outlinedTextInput.disabledInputTextOpacity)
                                    ),
                                } : {}),
                            },
                        ]}
                    />
                </InputContainer>
            </Container>
            <SupportingText
                typeScale={resolve(ds.comp.outlinedTextInput.supportingTextTypeScale)}
                numberOfLines={1}
                allowFontScaling={false}
                error={props.error}
                disabled={props.disabled}
            >
                {props.supportingText ?? (value.length === 0 ? `0/${props.maxLength}` : `${value.length}/${props.maxLength}`)
                }
            </SupportingText>
        </View>
    )
})

OutlinedTextArea.defaultProps = {
    editable: true,
    error: false,
    disabled: false,
    maxLength: 300,
}

const Container = themed(View, ({ ds, resolve, error, focused }) => ({
    backgroundColor: resolve(ds.comp.outlinedTextInput.containerColor),
    borderRadius: resolve(ds.comp.outlinedTextInput.containerShape),
    borderColor: resolve(ds.comp.outlinedTextInput.outlineColor),
    borderWidth: resolve(ds.comp.outlinedTextInput.outlineWidth),
    paddingVertical: resolve(ds.comp.outlinedTextInput.containerPaddingVertical),
    paddingHorizontal: resolve(ds.comp.outlinedTextInput.containerPaddingHorizontal),
    gap: resolve(ds.comp.outlinedTextInput.containerGap),
    ...(focused ? {
        borderColor: resolve(ds.comp.outlinedTextInput.focusedOutlineColor),
        borderWidth: resolve(ds.comp.outlinedTextInput.focusedOutlineWidth),
        paddingVertical: resolve(ds.comp.outlinedTextInput.focusedContainerPaddingVertical),
        paddingHorizontal: resolve(ds.comp.outlinedTextInput.focusedContainerPaddingHorizontal),
    } : {}),
    ...(error ? {
        borderColor: resolve(ds.comp.outlinedTextInput.errorOutlineColor),
    } : {}),
}))

const InputContainer = themed(View, ({ ds, resolve }) => ({
    height: rv(100),
}))

const SupportingText = themed(Typography, ({ ds, resolve, error, disabled }) => ({
    marginTop: rv(4),
    paddingHorizontal: resolve(ds.comp.outlinedTextInput.containerPaddingHorizontal),
    minHeight: resolve(resolve(ds.comp.outlinedTextInput.supportingTextTypeScale).lineHeight),
    color: resolve(ds.comp.outlinedTextInput.supportingTextColor),
    ...(error ? {
        color: resolve(ds.comp.outlinedTextInput.errorSupportingTextColor),
    } : {}),
    ...(disabled ? {
        color: rgba(
            resolve(ds.comp.outlinedTextInput.disabledSupportingTextColor),
            resolve(ds.comp.outlinedTextInput.disabledSupportingTextOpacity)
        ),
    } : {}),
}))

export interface OutlinedTextAreaProps {
    value?: string,
    defaultValue?: string
    disabled?: boolean
    editable?: boolean
    placeholder?: string
    supportingText?: string
    error?: boolean
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    autoFocus?: boolean
    secureTextEntry?: boolean
    keyboardType?: KeyboardTypeOptions
    inputMode?: InputModeOptions
    maxLength?: number
    onChangeText?: (text: string) => void
    onFocus?: (args: any) => void
    onBlur?: (args: any) => void
    typeScale?: TypeScale
    textAlign?: 'auto' | 'center' | 'left' | 'right' | 'justify'
    textAlignVertical?: 'auto' | 'center' | 'top' | 'bottom'
}
