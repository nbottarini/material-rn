import React from 'react'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'
import { StandardIconButton } from '@material-rn/core/src/buttons/StandardIconButton'

export const StandardIconButtonsScreen = () => {
    const toast = useToast()
    return (
        <ScreenContainer>
            <StandardIconButton name="search" onPress={() => toast.show('Pressed')} />
            <StandardIconButton name="favorite" disabled={true} onPress={() => toast.show('Pressed')} />
        </ScreenContainer>
    )
}
