import React from 'react'
import { View } from 'react-native'
import { styled } from '@nbottarini/react-native-styled'
import { TabItem, Tabs, TitleLarge } from '@material-rn/core'

export const TabsScreen = () => {

    const tabItems : TabItem[] = [
        { icon: 'description', title: 'Resumen de creditos', component: CreditsResumeView },
        { icon: 'event_upcoming', title: 'Solicitudes', component: CreditsRequestView },
    ]
    return (
        <View style={{ flex: 1 }}>
                <Tabs tabItems={tabItems} />
        </View>
    )
}

const CreditsResumeView = () => {
    return <_View><TitleLarge>Resumen de creditos</TitleLarge></_View>
}

const CreditsRequestView = () => {
    return <_View><TitleLarge>Solicitudes</TitleLarge></_View>
}

const _View = styled(View, {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
})
