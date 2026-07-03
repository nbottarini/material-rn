import React, { FC, useMemo } from 'react'
import { Theme } from '../Theme/Theme'
import { ThemeContext, useTheme } from './ThemeContext'
import { tokenResolveFuncFor } from '../Theme/tokenResolver/tokenResolveFuncFor'
import { deepMerge, DeepPartial } from '@material-rn/stdlib'

export const ThemeProvider: FC<Props> = ({ children, ds }) => {
    const { ds: currentDs } = useTheme()
    const newDs = useMemo(() => deepMerge(currentDs, ds ?? {}) as Theme, [currentDs, ds])
    const newResolve = useMemo(() => tokenResolveFuncFor(newDs), [newDs])

    return (
        <ThemeContext.Provider value={{ ds: newDs, resolve: newResolve }}>
            {children}
        </ThemeContext.Provider>
    )
}

interface Props {
    children: React.ReactNode,
    ds?: DeepPartial<Theme>,
}

