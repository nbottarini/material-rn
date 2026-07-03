import React from 'react'
import { MenuItem } from '../components/MenuItem'
import { Menu } from '../components/Menu'

export const HomeScreen = () => (
    <Menu>
        <MenuItem title="Animations" screen="/animations"/>
        <MenuItem title="Bottom Sheet" screen="/bottomSheet"/>
        <MenuItem title="Buttons" screen="/buttons"/>
        <MenuItem title="Cards" screen="/cards"/>
        <MenuItem title="Checkboxes" screen="/checkboxes"/>
        <MenuItem title="Chips" screen="/chips"/>
        <MenuItem title="Full screen dialog" screen="/fullScreenDialog"/>
        <MenuItem title="Icons" screen="/icons"/>
        <MenuItem title="Text Fields" screen="/textFields"/>
        <MenuItem title="Typography" screen="/typography"/>
        <MenuItem title="Switch" screen="/switch"/>
        <MenuItem title="UploadField" screen="/uploadField"/>
        <MenuItem title="Tabs" screen="/tabs"/>
    </Menu>
)
