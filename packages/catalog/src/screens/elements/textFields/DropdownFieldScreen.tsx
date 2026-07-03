import React, { FC, useState } from 'react'
import { DropdownField, DropdownOption, TitleMedium, TitleSmall } from '@material-rn/core'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { NavigationProps } from '../../../navigation/NavigationProps'

export const DropdownFieldScreen: FC<NavigationProps> = ({ navigation }) => {
    const [, setValue1] = useState<DropdownOption>()
    return (
        <ScreenContainer>
            <TitleMedium>Dropdown field</TitleMedium>
            <DropdownField
                label="Tipo de producto referencia financiera *"
                placeholder="Selecciona el tipo"
                value={''}
                options={[{ id: '1', title: 'first option' }, { id: '2', title: 'second option' }]}
                onSelect={(id, title) => setValue1({ id, title })}
                errorText={''}
                navigator={navigation}
            />
            <TitleSmall>Disabled</TitleSmall>
            <DropdownField
                label="Tipo de producto referencia financiera *"
                placeholder="Selecciona el tipo"
                value={''}
                options={[{ id: '1', title: 'first option' }, { id: '2', title: 'second option' }]}
                onSelect={(id, title) => setValue1({ id, title })}
                errorText={''}
                navigator={navigation}
                disabled={true}
            />
        </ScreenContainer>
    )
}

