import React from 'react'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'
import { TonalIconButton } from '@material-rn/core/src/buttons/TonalIconButton'
import { rv } from '@material-rn/core/src/rv'

export const TonalIconButtonsScreen = () => {
    const toast = useToast()
    return (
        <ScreenContainer>
            <TonalIconButton name="search" onPress={() => toast.show('Pressed')} />
            <TonalIconButton name="favorite" disabled={true} onPress={() => toast.show('Pressed')} />
            <TonalIconButton name="favorite" onPress={() => toast.show('Pressed')} buttonSize={rv(24)} iconSize={rv(18)}/>
        </ScreenContainer>
    )
}
