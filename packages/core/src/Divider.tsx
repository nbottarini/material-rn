import React, { FC } from 'react'
import { View } from 'react-native'
import { useTheme } from './theme/context/ThemeContext'

export const Divider: FC<DividerProps> = ({ marginVertical }) => {
    const { ds, resolve } = useTheme()
    return (
        <View
            style={{
                marginVertical,
                height: resolve(ds.comp.divider.thickness),
                backgroundColor: resolve(ds.comp.divider.color),
            }}
        />
    )
}

export interface DividerProps {
    marginVertical?: number
}
