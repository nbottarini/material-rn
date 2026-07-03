import React from 'react'
import { ScreenContainer } from '../../components/ScreenContainer'
import { Checkbox } from '@material-rn/core'

export const CheckboxesScreen = () => (
    <ScreenContainer style={{ alignItems: 'flex-start' }}>
        <Checkbox checked={false} />
        <Checkbox checked={true} />
        <Checkbox checked={false} disabled={true} />
        <Checkbox checked={true} disabled={true} />
    </ScreenContainer>
)
