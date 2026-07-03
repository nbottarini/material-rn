import React, { FC } from 'react'
import { FullScreenDialog, FullScreenDialogButton } from '@material-rn/core'
import { NavigationProps } from '../../navigation/NavigationProps'
import { Text } from 'react-native'

export const FullScreenDialogScreen: FC<NavigationProps> = ({ navigation }) => {
    return (
        <FullScreenDialog buttons={[
            <FullScreenDialogButton title="volver" onPress={() => navigation.goBack()} />,
        ]}>
            <Text>Full screen dialog</Text>
        </FullScreenDialog>
    )
}
