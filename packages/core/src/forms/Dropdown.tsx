import React, { FC, useMemo } from 'react'
import { Pressable, View } from 'react-native'
import { themed, themedPressable } from '../theme/themed'
import { rgba } from '../color'
import { Typography } from '../text/Typography'
import { rv } from '../rv'
import { Icon } from '../Icon/Icon'
import { useTheme } from '../theme/context/ThemeContext'

export const Dropdown: FC<DropdownProps> = (props) => {
    const { ds, resolve } = useTheme()
    const selectedText = useMemo(() => props.options.find(it => it.id === props.value)?.title, [props.options, props.value])
    const hasValue = !!props.value && props.value.length > 0
    const openModal = () => {
        props.navigator.navigate('/modals/dropdown', {
            title: props.modalTitle ?? 'Seleccione',
            options: props.options,
            selectedId: props.value,
            onSelect: props.onSelect,
        })
    }
    return (
        <View>
            <Pressable onPress={openModal} disabled={props.disabled}>
                {({ pressed }) => (
                    <Container error={props.error} disabled={props.disabled}>
                        <StateLayer pressed={pressed}>
                            <Input
                                hasValue={hasValue}
                                typeScale={resolve(ds.comp.dropdown.inputTextTypeScale)}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                disabled={props.disabled}
                            >
                                {hasValue ? selectedText : props.placeholder}
                            </Input>
                            <ArrowIcon
                                name="keyboard_arrow_down"
                                disabled={props.disabled}
                                size={resolve(ds.comp.dropdown.iconSize)}
                                style={{ alignSelf: 'center' }}
                            />
                        </StateLayer>
                    </Container>
                )}
            </Pressable>
            <SupportingText
                typeScale={resolve(ds.comp.dropdown.supportingTextTypeScale)}
                numberOfLines={1}
                allowFontScaling={false}
                error={props.error}
                disabled={props.disabled}
            >
                {props.supportingText}
            </SupportingText>
        </View>
    )
}


const Container = themed(View, ({ ds, resolve, error, disabled }) => ({
    backgroundColor: resolve(ds.comp.dropdown.containerColor),
    borderRadius: resolve(ds.comp.dropdown.containerShape),
    borderColor: resolve(ds.comp.dropdown.outlineColor),
    borderWidth: resolve(ds.comp.dropdown.outlineWidth),
    ...(error ? {
        borderColor: resolve(ds.comp.dropdown.errorOutlineColor),
    } : {}),
    ...(disabled ? {
        backgroundColor: resolve(ds.comp.dropdown.disabledContainerColor),
    } : {}),
}))

const StateLayer = themedPressable(View, ({ resolve, ds }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: resolve(ds.comp.dropdown.containerPaddingVertical),
    paddingHorizontal: resolve(ds.comp.dropdown.containerPaddingHorizontal),
    gap: resolve(ds.comp.dropdown.containerGap),
}), ({ resolve, ds }) => ({
    borderRadius: resolve(ds.comp.dropdown.containerShape),
    backgroundColor: rgba(
        resolve(ds.comp.dropdown.pressedStateLayerColor),
        resolve(ds.comp.dropdown.pressedStateLayerOpacity)
    ),
}))

const Input = themed(Typography, ({ ds, resolve, hasValue, disabled }) => ({
    flexGrow: 1,
    flexShrink: 1,
    textAlignVertical: 'center',
    textAlign: 'left',
    color: hasValue ?
        resolve(ds.comp.dropdown.inputTextColor) :
        rgba(resolve(ds.comp.dropdown.placeholderTextColor), resolve(ds.comp.dropdown.placeholderOpacity)),
    ...(disabled ? {
        color: rgba(
            resolve(ds.comp.dropdown.disabledInputTextColor),
            resolve(ds.comp.dropdown.disabledInputTextOpacity)
        ),
    } : {}),
}))

const SupportingText = themed(Typography, ({ ds, resolve, error, disabled }) => ({
    marginTop: rv(2),
    paddingHorizontal: resolve(ds.comp.dropdown.containerPaddingHorizontal),
    minHeight: resolve(resolve(ds.comp.dropdown.supportingTextTypeScale).lineHeight),
    color: resolve(ds.comp.dropdown.supportingTextColor),
    ...(error ? {
        color: resolve(ds.comp.dropdown.errorSupportingTextColor),
    } : {}),
    ...(disabled ? {
        color: rgba(
            resolve(ds.comp.dropdown.disabledSupportingTextColor),
            resolve(ds.comp.dropdown.disabledSupportingTextOpacity)
        ),
    } : {}),
}))

const ArrowIcon = themed(Icon, ({ ds, resolve, disabled, trailingIconColor }) => ({
    lineHeight: undefined,
    color: trailingIconColor ?? resolve(ds.comp.dropdown.iconColor),
    ...(disabled ? {
        color: rgba(
            resolve(ds.comp.dropdown.disabledIconColor),
            resolve(ds.comp.dropdown.disabledIconOpacity)
        ),
    } : {}),
}))

export interface DropdownProps {
    value?: string,
    disabled?: boolean
    placeholder?: string
    supportingText?: string
    modalTitle?: string
    error?: boolean
    onSelect?: (id: string, title: string) => void
    options: DropdownOption[]
    navigator: any
}

export interface DropdownOption {
    id: string
    title: string
}

