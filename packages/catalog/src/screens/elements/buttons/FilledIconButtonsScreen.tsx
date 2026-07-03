import React from 'react'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'
import { FilledIconButton } from '@material-rn/core'

export const FilledIconButtonsScreen = () => {
    const toast = useToast()
    return (
        <ScreenContainer>
            <FilledIconButton name="search" onPress={() => toast.show('Pressed')} />
            <FilledIconButton name="favorite" disabled={true} onPress={() => toast.show('Pressed')} />
        </ScreenContainer>
    )
}
