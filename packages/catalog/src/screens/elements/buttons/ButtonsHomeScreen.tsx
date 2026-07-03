import React from 'react'
import { MenuItem } from '../../../components/MenuItem'
import { Menu } from '../../../components/Menu'

export const ButtonsHomeScreen = () => (
    <Menu>
        <MenuItem title="Filled Button" screen="/buttons/filledButtons" />
        <MenuItem title="Outlined Button" screen="/buttons/outlinedButtons" />
        <MenuItem title="Text Button" screen="/buttons/textButtons" />
        <MenuItem title="Standard Icon Button" screen="/buttons/standardIconButtons" />
        <MenuItem title="Filled Icon Button" screen="/buttons/filledIconButtons" />
        <MenuItem title="Outlined Icon Button" screen="/buttons/outlinedIconButtons" />
        <MenuItem title="Tonal Icon Button" screen="/buttons/tonalIconButtons" />
        <MenuItem title="Link Button" screen="/buttons/linkButtons" />
        <MenuItem title="Underlined Link Button" screen="/buttons/underlinedLinkButtons" />
    </Menu>
)
