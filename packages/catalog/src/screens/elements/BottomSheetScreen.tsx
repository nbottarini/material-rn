import React, { FC } from 'react'
import { BottomSheet } from '@material-rn/core'
import { HeadlineLarge } from '@material-rn/core/src/text/Typography'
import { NavigationProps } from '../../navigation/NavigationProps'

export const BottomSheetScreen: FC<NavigationProps> = (props) => {
    return (
        <BottomSheet onClose={() => props.navigation.goBack()}>
            <HeadlineLarge>Sample content</HeadlineLarge>
        </BottomSheet>
    )
}
