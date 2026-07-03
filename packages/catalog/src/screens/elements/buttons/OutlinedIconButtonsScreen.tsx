import React from 'react'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'
import { OutlinedIconButton } from '@material-rn/core/src/buttons/OutlinedIconButton'

export const OutlinedIconButtonsScreen = () => {
    const toast = useToast()
    return (
        <ScreenContainer>
            <OutlinedIconButton name="search" onPress={() => toast.show('Pressed')} />
            <OutlinedIconButton name="favorite" disabled={true} onPress={() => toast.show('Pressed')} />
        </ScreenContainer>
    )
}
