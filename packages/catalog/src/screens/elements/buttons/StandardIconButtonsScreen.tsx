import React from 'react'
import { StandardIconButton } from '@material-rn/core'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'

export const StandardIconButtonsScreen = () => {
    const toast = useToast()
    return (
        <ScreenContainer>
            <StandardIconButton name="search" onPress={() => toast.show('Pressed')} />
            <StandardIconButton name="favorite" disabled={true} onPress={() => toast.show('Pressed')} />
        </ScreenContainer>
    )
}
