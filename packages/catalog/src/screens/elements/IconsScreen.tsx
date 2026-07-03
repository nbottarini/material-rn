import React from 'react'
import { ScreenContainer } from '../../components/ScreenContainer'
import { Icon } from '@material-rn/core'

export const IconsScreen = () => (
    <ScreenContainer>
        <Icon name="360" size={30} color="#900" />
        <Icon name="battery_change" size={50} color="#333" />
        <Icon name="local_pizza" size={50} color="#333" />
    </ScreenContainer>
)
