import React from 'react'
import { LinkButton } from '@material-rn/core'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'

export const LinkButtonsScreen = () => {
    const toast = useToast()
    return (
        <ScreenContainer>
            <LinkButton title="Some Button" onPress={() => toast.show('Pressed')} />
        </ScreenContainer>
    )
}
