import React, { forwardRef, MutableRefObject } from 'react'
import {
    FlexAlignType,
    InputModeOptions,
    KeyboardTypeOptions,
    Platform,
    Pressable,
    TextInput,
    View,
} from 'react-native'
import { IconNames } from '../../Icon/IconNames'
import { TypeScale } from '../../theme/Theme/SysTokens'
import { useTheme } from '../../theme/context/ThemeContext'
import { themed } from '../../theme/themed'
import { Icon } from '../../Icon/Icon'
import { rgba } from '../../color'
import { Typography } from '../../text/Typography'
import { rv } from '../../rv'

export const OutlinedTextInput = forwardRef<TextInput, OutlinedTextInputProps>((props, ref) => {
    const { ds, resolve } = useTheme()
    const disabled = props.disabled ?? false
    const editable = props.editable ?? true
    const error = props.error ?? false
    const [uncontrolledValue, setUncontrolledValue] = React.useState(props.defaultValue)
    const isControlled = props.value !== undefined
    const value = isControlled ? props.value : uncontrolledValue
    const [focused, setFocused] = React.useState(false)
    const canEnterText = !disabled && editable
    const inputTypeScale = resolve(ds.comp.outlinedTextInput.inputTextTypeScale)
    const innerRef = React.useRef<TextInput | null>(null)
    const inputRef = (ref !== undefined ? ref : innerRef) as MutableRefObject<TextInput | null>
    const forceFocus = React.useCallback(() => inputRef?.current?.focus(), [inputRef])

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
            <Container focused={focused} error={error} disabled={disabled} style={[{
                ...(disabled ? {
                    backgroundColor: rgba(
                        resolve(ds.comp.outlinedTextInput.disabledContainerColor),
                        resolve(ds.comp.outlinedTextInput.disabledContainerOpacity),
                    ),
                } : {}),
            }]}>
                {props.leadingIcon && (
                    <Pressable
                        onPress={() => { props.onLeadingIconPress?.(); forceFocus() }}
                        disabled={disabled}
                        style={{ alignSelf: props.iconAlignment ?? 'center' }}
                    >
                        <LeadingIcon
                            name={props.leadingIcon}
                            disabled={disabled}
                            size={resolve(props.typeScale?.fontSize) ?? resolve(ds.comp.outlinedTextInput.leadingIconSize)}
                            leadingIconColor={props.leadingIconColor}
                        />
                    </Pressable>
                )}
                <InputContainer typeScale={props.typeScale ?? inputTypeScale}>
                    <TextInput
                        autoCapitalize={props.autoCapitalize}
                        ref={inputRef}
                        autoFocus={props.autoFocus}
                        multiline={false}
                        value={value}
                        editable={!disabled && editable}
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
                                textAlignVertical: props.textAlignVertical ?? 'center',
                                textAlign: props.textAlign ?? 'left',
                                ...(disabled ? {
                                    color: rgba(
                                        resolve(ds.comp.outlinedTextInput.disabledInputTextColor),
                                        resolve(ds.comp.outlinedTextInput.disabledInputTextOpacity)
                                    ),
                                } : {}),
                            },
                        ]}
                    />
                </InputContainer>
                {props.trailingIcon && (
                    <Pressable
                        onPress={() => { props.onTrailingIconPress?.(); forceFocus() }}
                        disabled={disabled}
                        style={{ alignSelf: props.iconAlignment ?? 'center' }}
                    >
                        <TrailingIcon
                            name={props.trailingIcon}
                            disabled={disabled}
                            size={resolve(props.typeScale?.fontSize) ?? resolve(ds.comp.outlinedTextInput.trailingIconSize)}
                            trailingIconColor={props.trailingIconColor}
                        />
                    </Pressable>
                )}
            </Container>
            <SupportingText
                typeScale={resolve(ds.comp.outlinedTextInput.supportingTextTypeScale)}
                numberOfLines={1}
                allowFontScaling={false}
                error={error}
                disabled={disabled}
            >
                {props.supportingText}
            </SupportingText>
        </View>
    )
})


const Container = themed(View, ({ ds, resolve, error, focused }) => ({
    flexDirection: 'row',
    alignItems: 'center',
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

const InputContainer = themed(View, ({ ds, resolve, typeScale }) => ({
    flexGrow: 1,
    flexShrink: 1,
    height: resolve(typeScale?.lineHeight),
    justifyContent: 'center',
    minHeight: Math.max(
        resolve(ds.comp.outlinedTextInput.leadingIconSize),
        resolve(ds.comp.outlinedTextInput.trailingIconSize)
    ),
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

const LeadingIcon = themed(Icon, ({ ds, resolve, disabled }) => ({
    lineHeight: undefined,
    color: resolve(ds.sys.color.onSurface),
    ...(disabled ? {
        color: rgba(
            resolve(ds.comp.outlinedTextInput.disabledLeadingIconColor),
            resolve(ds.comp.outlinedTextInput.disabledLeadingIconOpacity)
        ),
    } : {}),
}))

const TrailingIcon = themed(Icon, ({ ds, resolve, disabled, trailingIconColor }) => ({
    lineHeight: undefined,
    color: trailingIconColor ?? resolve(ds.comp.outlinedTextInput.trailingIconColor),
    ...(disabled ? {
        color: rgba(
            resolve(ds.comp.outlinedTextInput.disabledTrailingIconColor),
            resolve(ds.comp.outlinedTextInput.disabledTrailingIconOpacity)
        ),
    } : {}),
}))

export interface OutlinedTextInputProps {
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
}



