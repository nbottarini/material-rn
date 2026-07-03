import React, { useContext } from 'react'
import { Theme } from '../Theme/Theme'
import { TokenResolveFunc } from '../Theme/tokenResolver/TokenResolveFunc'
import { tokenResolveFuncFor } from '../Theme/tokenResolver/tokenResolveFuncFor'
import { defaultTheme } from '../defaultTheme/defaultTheme'

export interface ThemeContextValue {
    ds: Theme
    resolve: TokenResolveFunc
}

export const ThemeContext = React.createContext<ThemeContextValue>({
    ds: defaultTheme,
    resolve: tokenResolveFuncFor(defaultTheme),
})

export const useTheme = () => useContext(ThemeContext)
