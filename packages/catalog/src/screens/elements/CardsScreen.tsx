import React from 'react'
import { ScreenContainer } from '../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'
import { BodyMedium, Card, TitleMedium } from '@material-rn/core'

export const CardsScreen = () => {
    const toast = useToast()
    return (
        <ScreenContainer>
            <TitleMedium>Standard Cards</TitleMedium>
            <Card>
                <BodyMedium>Some text</BodyMedium>
            </Card>

            <TitleMedium>Disabled</TitleMedium>
            <Card disabled={true}>
                <BodyMedium>Some text</BodyMedium>
            </Card>

            <TitleMedium>Pressable</TitleMedium>
            <Card onPress={() => toast.show('Pressed')}>
                <BodyMedium>Click Me</BodyMedium>
            </Card>
        </ScreenContainer>
    )
}
