import React from 'react'
import { TextButton } from '@material-rn/core'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'

export const TextButtonsScreen = () => {
    const toast = useToast()
    return (
        <ScreenContainer>
            <TextButton title="Some Button" onPress={() => toast.show('Pressed')} />
            <TextButton title="Some Button" icon="add_circle" onPress={() => toast.show('Pressed')} />
            <TextButton title="Some Button" icon="create_new_folder" disabled={true} onPress={() => toast.show('Pressed')} />
            <TextButton title="A very long long long long long long long long text" onPress={() => toast.show('Pressed')} />
            <TextButton title="Some Button" onPress={() => toast.show('Pressed')} icon="favorite" contentStyle={{ justifyContent: 'space-between' }} />
        </ScreenContainer>
    )
}
