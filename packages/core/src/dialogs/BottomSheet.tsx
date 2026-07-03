import React, { FC, PropsWithChildren } from 'react'
import Modal from 'react-native-modal'
import { useTheme } from '../theme/context/ThemeContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { themed } from '../theme/themed'
import { View } from 'react-native'
import { StandardIconButton } from '../buttons/StandardIconButton'
import { styled } from '@nbottarini/react-native-styled'
import { rv } from '../rv'

export const BottomSheet: FC<BottomSheetProps> = (props) => {
    const { ds, resolve } = useTheme()
    const insets = useSafeAreaInsets()
    // noinspection RequiredAttributes
    return (
        <Modal
            isVisible={true}
            onBackdropPress={props.onClose}
            backdropColor={resolve(ds.comp.bottomSheet.scrimColor)}
            backdropOpacity={resolve(ds.comp.bottomSheet.scrimOpacity)}
            style={{ justifyContent: 'flex-end', margin: 0 }}
        >
            <Container style={{ paddingBottom: insets.bottom }}>
                {props.showClose && (<CloseButton name="close" onPress={props.onClose} />)}
                <Content>
                    {props.children}
                </Content>
            </Container>
        </Modal>
    )
}

const Container = themed(View, ({ ds, resolve }) => ({
    maxHeight: '80%',
    paddingTop: rv(30),
    backgroundColor: resolve(ds.comp.bottomSheet.containerColor),
    borderTopLeftRadius: resolve(ds.comp.bottomSheet.containerShape),
    borderTopRightRadius: resolve(ds.comp.bottomSheet.containerShape),
}))

const CloseButton = styled(StandardIconButton, {
    top: rv(4),
    right: rv(4),
    position: 'absolute',
})

const Content = themed(View, ({ ds, resolve }) => ({
    flexShrink: 1,
    paddingHorizontal: resolve(ds.comp.bottomSheet.contentContainerPaddingHorizontal),
    paddingTop: resolve(ds.comp.bottomSheet.contentContainerPaddingTop),
    paddingBottom: resolve(ds.comp.bottomSheet.contentContainerPaddingBottom),
}))

export interface BottomSheetProps extends PropsWithChildren {
    onClose?: () => void
    showClose?: boolean
}
