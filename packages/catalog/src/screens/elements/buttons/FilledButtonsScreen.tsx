import React from 'react'
import { FilledButton } from '@material-rn/core'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'

export const FilledButtonsScreen = () => {
    const toast = useToast()
    return (
        <ScreenContainer>
            <FilledButton title="Some Button" onPress={() => toast.show('Pressed')} />
            <FilledButton title="Some Button" icon="add_circle" onPress={() => toast.show('Pressed')} />
            <FilledButton title="Some Button" icon="create_new_folder" disabled={true} onPress={() => toast.show('Pressed')} />
            <FilledButton title="A very long long long long long long long long text" onPress={() => toast.show('Pressed')} />
        </ScreenContainer>
    )
}
