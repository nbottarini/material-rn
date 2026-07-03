import React from 'react'
import { Animated, StyleProp, TextInput, ViewProps } from 'react-native'
import { Icon } from '../../Icon/Icon'
import { StandardIconButton } from '../../buttons/StandardIconButton'
import View = Animated.View
import { useTheme } from '../../theme/context/ThemeContext'
import { themed } from '../../theme/themed'

export const SearchField: React.FC<SearchFieldProps> = (props) => {
    const { ds, resolve } = useTheme()
    return (
        <Container style={props.style}>
            <SearchIcon name={'search'} size={resolve(ds.comp.searchField.searchIconSize)}/>
            <InputText selectionColor={resolve(ds.comp.searchField.caretColor)}
                       placeholder={props.placeHolderText ?? 'Buscar'}
                       placeholderTextColor={resolve(ds.comp.searchField.placeholderColor)}
                       value={props.value}
                       onChangeText={(text) => props.onChangeText(text)}/>
            {props.value && <ClearIcon name={'clear'} onPress={() => props.onClear()}/>}
        </Container>
    )
}

const Container = themed(View, ({ resolve, ds }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: resolve(ds.comp.searchField.containerShape),
    borderWidth: resolve(ds.comp.searchField.outlineWidth),
    borderColor: resolve(ds.comp.searchField.outlineColor),
    height: resolve(ds.comp.searchField.containerHeight),
    paddingHorizontal: resolve(ds.comp.searchField.containerPaddingHorizontal),
    gap: resolve(ds.comp.searchField.containerGap),
    backgroundColor: resolve(ds.comp.searchField.containerColor),
}))

const SearchIcon = themed(Icon, ({ resolve, ds }) => ({
    flex: 0,
    fontSize: resolve(ds.comp.searchField.searchIconSize),
    color: resolve(ds.comp.searchField.searchIconColor),
}))

const InputText = themed(TextInput, ({ resolve, ds }) => ({
    flex: 1,
    fontFamily: resolve(resolve(ds.comp.searchField.inputTextTypeScale).fontFamily),
    lineHeight: resolve(resolve(ds.comp.searchField.inputTextTypeScale).lineHeight),
    fontSize: resolve(resolve(ds.comp.searchField.inputTextTypeScale).fontSize),
    letterSpacing: resolve(resolve(ds.comp.searchField.inputTextTypeScale).letterSpacing),
    color: resolve(ds.comp.searchField.inputTextColor),
}))

const ClearIcon = themed(StandardIconButton, ({ resolve, ds }) => ({
    flex: 0,
    fontSize: resolve(ds.comp.searchField.clearIconSize),
    color: resolve(ds.comp.searchField.clearIconColor),
}))

export interface SearchFieldProps {
    onClear: () => void
    placeHolderText?: string
    value: string
    onChangeText: (text: string) => void
    style?: StyleProp<ViewProps>
}
