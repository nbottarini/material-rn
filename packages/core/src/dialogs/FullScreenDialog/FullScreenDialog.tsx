import React, { FC, PropsWithChildren } from 'react'
import { FullScreenDialogButtons } from './FullScreenDialogButtons'
import { View } from 'react-native'
import { styled } from '@nbottarini/react-native-styled'
import { themed } from '../../theme/themed'
import { FullScreenDialogButtonType } from './FullScreenDialogButton'

export const FullScreenDialog: FC<FullScreenDialogProps> = ({ onClose, buttons, children }) => (
    <Container>
        <Content>
            {children}
        </Content>
        <_FullScreenDialogButtons buttons={buttons} onClose={onClose} />
    </Container>
)

const Container = themed(View, ({ ds, resolve }) => ({
    flex: 1,
    backgroundColor: resolve(ds.comp.fullScreenDialog.containerColor),
}))

const Content = themed(View, ({ ds, resolve }) => ({
    paddingHorizontal: resolve(ds.comp.fullScreenDialog.contentContainerPaddingHorizontal),
    paddingTop: resolve(ds.comp.fullScreenDialog.contentContainerPaddingTop),
    paddingBottom: resolve(ds.comp.fullScreenDialog.contentContainerPaddingBottom),
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
}))

const _FullScreenDialogButtons = styled(FullScreenDialogButtons, {
    alignSelf: 'flex-end',
})

export interface FullScreenDialogProps extends PropsWithChildren {
    onClose?: () => void,
    buttons?: FullScreenDialogButtonType[],
}
