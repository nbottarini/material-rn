import React, { FC, useMemo, useState } from 'react'
import Modal from 'react-native-modal'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styled } from '@nbottarini/react-native-styled'
import { NavigationProps } from '../../navigation/NavigationProps'
import { useTheme } from '@material-rn/core/src/theme/context/ThemeContext'
import { DropdownOption } from '@material-rn/core/src/forms/Dropdown'
import { Option } from './Option'
import { rv } from '@material-rn/core/src/rv'
import { themed } from '@material-rn/core/src/theme/themed'
import { SearchField } from '@material-rn/core/src/forms/textInputs/SearchField'

export const DropdownModal: FC<NavigationProps> = (props) => {
    const { ds, resolve } = useTheme()
    const [searchText, setSearchText] = useState('')
    const insets = useSafeAreaInsets()
    const routeParams = props.route.params ?? {}
    const options = useMemo(() => routeParams.options as DropdownOption[] ?? [], [routeParams.options])
    const filteredOptions = useMemo(() => (
        options.filter(it => it.title?.toLowerCase().includes(searchText?.toLowerCase()))
    ), [options, searchText])
    const showSearch = options.length > 10
    const selectedId = routeParams.selectedId
    const close = () => {
        props.navigation.goBack()
        const onClose = props.route.params?.['onClose']
        onClose?.()
    }
    // noinspection RequiredAttributes
    return (
        <Modal
            isVisible={true}
            onBackdropPress={close}
            backdropColor={resolve(ds.comp.dialog.scrimColor)}
            backdropOpacity={resolve(ds.comp.dialog.scrimOpacity)}
            style={{ justifyContent: 'flex-end', margin: 0 }}
        >
            <Container style={{ paddingBottom: insets.bottom }}>
                <Content>
                    <Headline>{routeParams.title ?? 'Seleccione'}</Headline>
                    {showSearch && (
                        <_SearchField onClear={() => setSearchText('')} value={searchText} onChangeText={(text) => setSearchText(text)} />
                    )}
                    <FlatList
                        style={{ marginVertical: rv(16) }}
                        data={filteredOptions}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Option
                                key={item.id}
                                title={item.title}
                                selected={item.id === selectedId}
                                onPress={() => {
                                    if (item.id !== selectedId) {
                                        props.route.params?.onSelect?.(item.id, item.title)
                                    }
                                    close()
                                }}
                            />
                        )}
                    />
                </Content>
            </Container>
        </Modal>
    )
}

const Container = themed(View, ({ ds, resolve }) => ({
    maxHeight: '80%',
    backgroundColor: resolve(ds.comp.dialog.containerColor),
    borderTopLeftRadius: resolve(ds.comp.dialog.containerShape),
    borderTopRightRadius: resolve(ds.comp.dialog.containerShape),
}))

const Content = themed(View, ({ ds, resolve }) => ({
    flexShrink: 1,
    paddingHorizontal: resolve(ds.comp.dialog.contentContainerPaddingHorizontal),
    paddingTop: resolve(ds.comp.dialog.contentContainerPaddingTop),
    paddingBottom: resolve(ds.comp.dialog.contentContainerPaddingBottom),
}))

const Headline = themed(Text, ({ resolve, ds }) => ({
    fontFamily: resolve(ds.sys.typeScale.titleMedium.fontFamily),
    fontSize: resolve(ds.sys.typeScale.titleMedium.fontSize),
    lineHeight: resolve(ds.sys.typeScale.titleMedium.lineHeight),
    color: resolve(ds.sys.color.onSurface),
}))

const _SearchField = styled(SearchField, {
    marginTop: rv(16),
})


