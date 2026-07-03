import React, { FC } from 'react'
import { RefreshControl as RNRefreshControl } from 'react-native'
import {
    RefreshControlProps as RNRefreshControlProps,
} from 'react-native/Libraries/Components/RefreshControl/RefreshControl'
import { useTheme } from '../theme/context/ThemeContext'

export const RefreshControl: FC<RefreshControlProps> = (props) => {
    const { ds, resolve } = useTheme()
    return (
            <RNRefreshControl
                colors={[resolve(ds.comp.progressIndicator.color)]}
                tintColor={resolve(ds.comp.progressIndicator.color)}
                {...props}
            />
        )
}

export interface RefreshControlProps extends RNRefreshControlProps {
}
