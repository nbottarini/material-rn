import React, { FC, ReactElement } from 'react'
import { useTheme } from '../../theme/context/ThemeContext'
import { FilledButton } from '../../buttons/FilledButton'

export const FullScreenDialogButton: FC<FullScreenDialogButtonProps> = (props) => {
    const { ds, resolve } = useTheme()
    return (
        <FilledButton
            title={props.title}
            onPress={props.onPress}
            labelStyle={
                props.type === FullScreenDialogButtonTypes.Secondary ? { color: resolve(ds.sys.color.onSurface) } : {}
            }
        />
    )
}

export interface FullScreenDialogButtonProps {
    type?: FullScreenDialogButtonTypes,
    title?: string,
    close?: boolean,
    onPress?: () => void,
}

export enum FullScreenDialogButtonTypes {
    Primary,
    Secondary,
}

export type FullScreenDialogButtonType = ReactElement<FullScreenDialogButtonProps>
