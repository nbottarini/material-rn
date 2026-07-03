import React from 'react'
import { MenuItem } from '../../../components/MenuItem'
import { Menu } from '../../../components/Menu'

export const TextFieldsHomeScreen = () => (
    <Menu>
        <MenuItem title="Filled Text Field" screen="/textFields/filledTextField"/>
        <MenuItem title="Search Field" screen="/textFields/searchField"/>
        <MenuItem title="One Time Password Field" screen="/textFields/otpField"/>
        <MenuItem title="Text Area" screen="/textFields/textArea"/>
        <MenuItem title="Dropdown" screen="/textFields/dropdown"/>
    </Menu>
)
