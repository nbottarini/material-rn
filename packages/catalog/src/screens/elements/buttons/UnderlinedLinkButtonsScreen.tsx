import React from 'react'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'
import { UnderlinedLinkButton } from '@material-rn/core'

export const UnderlinedLinkButtonsScreen = () => {
    const toast = useToast()
    return (
        <ScreenContainer>
            <UnderlinedLinkButton title="Some Button" onPress={() => toast.show('Pressed')} />
        </ScreenContainer>
    )
}
