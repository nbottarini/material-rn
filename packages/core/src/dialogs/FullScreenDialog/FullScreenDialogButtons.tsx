import React, { FC } from 'react'
import { View } from 'react-native'
import { themed } from '../../theme/themed'
import { FullScreenDialogButtonType } from './FullScreenDialogButton'

export const FullScreenDialogButtons: FC<Props> = (props) => {
    if (!props.buttons) return null
    return (
        <Container>
            {props.buttons.map((it, i) =>
                <React.Fragment key={i}>
                    {React.cloneElement(it, it.props)}
                </React.Fragment>,
            )}
        </Container>
    )
}

const Container = themed(View, ({ ds, resolve }) => ({
    paddingHorizontal: resolve(ds.comp.fullScreenDialog.buttonsContainerPaddingHorizontal),
    paddingTop: resolve(ds.comp.fullScreenDialog.buttonsContainerPaddingTop),
    paddingBottom: resolve(ds.comp.fullScreenDialog.buttonsContainerPaddingBottom),
    gap: resolve(ds.comp.fullScreenDialog.buttonsContainerGap),
}))

interface Props {
    buttons?: FullScreenDialogButtonType[]
    onClose?: () => void
}
