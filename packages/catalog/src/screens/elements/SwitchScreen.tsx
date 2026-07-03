import React from 'react'
import { ScreenContainer } from '../../components/ScreenContainer'
import { TitleMedium, Switch  } from '@material-rn/core'

export const SwitchScreen = () => {
    return (
        <ScreenContainer>
            <TitleMedium>Default Switch active</TitleMedium>
            <Switch checked={true} onPress={() => {}}/>

            <TitleMedium>Default Switch inactive</TitleMedium>
            <Switch checked={false} onPress={() => {}}/>

            <TitleMedium>Default Switch inactive and disabled</TitleMedium>
            <Switch checked={false} disabled={true} onPress={() => {}}/>

            <TitleMedium>Default Switch active and disabled</TitleMedium>
            <Switch checked={true} disabled={true} onPress={() => {}}/>
        </ScreenContainer>
    )
}
