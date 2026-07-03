import { RefTokens } from './RefTokens'
import { LiteralValue } from './LiteralValue'

export interface SysTokens {
    typeScale: TypeScales
    color: Colors
    shape: Shapes
    state: States
    elevation: Elevations
}

export interface TypeScales {
    displayLarge: TypeScale
    displayMedium: TypeScale
    displaySmall: TypeScale
    headlineLarge: TypeScale
    headlineMedium: TypeScale
    headlineSmall: TypeScale
    titleLarge: TypeScale
    titleMedium: TypeScale
    titleSmall: TypeScale
    labelLarge: TypeScale
    labelMedium: TypeScale
    labelSmall: TypeScale
    bodyLarge: TypeScale
    bodyMedium: TypeScale
    bodySmall: TypeScale
}

export interface TypeScale {
    fontFamily: SysTokenValue<string>
    lineHeight: SysTokenValue<number>
    fontSize: SysTokenValue<number>
    letterSpacing: SysTokenValue<number>
}

export interface Colors {
    screenBackground: SysTokenValue<string>
    primary: SysTokenValue<string>
    onPrimary: SysTokenValue<string>
    primaryContainer: SysTokenValue<string>
    onPrimaryContainer: SysTokenValue<string>
    secondary: SysTokenValue<string>
    onSecondary: SysTokenValue<string>
    secondaryContainer: SysTokenValue<string>
    onSecondaryContainer: SysTokenValue<string>
    tertiary: SysTokenValue<string>
    onTertiary: SysTokenValue<string>
    tertiaryContainer: SysTokenValue<string>
    onTertiaryContainer: SysTokenValue<string>
    info: SysTokenValue<string>
    onInfo: SysTokenValue<string>
    infoContainer: SysTokenValue<string>
    onInfoContainer: SysTokenValue<string>
    warning: SysTokenValue<string>
    onWarning: SysTokenValue<string>
    warningContainer: SysTokenValue<string>
    onWarningContainer: SysTokenValue<string>
    success: SysTokenValue<string>
    onSuccess: SysTokenValue<string>
    successContainer: SysTokenValue<string>
    onSuccessContainer: SysTokenValue<string>
    error: SysTokenValue<string>
    onError: SysTokenValue<string>
    errorContainer: SysTokenValue<string>
    onErrorContainer: SysTokenValue<string>
    surface: SysTokenValue<string>
    onSurface: SysTokenValue<string>
    onSurfaceVariant: SysTokenValue<string>
    surfaceDim: SysTokenValue<string>
    surfaceBright: SysTokenValue<string>
    surfaceContainer: SysTokenValue<string>
    inverseSurface: SysTokenValue<string>
    inverseOnSurface: SysTokenValue<string>
    inversePrimary: SysTokenValue<string>
    scrim: SysTokenValue<string>
    shadow: SysTokenValue<string>
    outline: SysTokenValue<string>
    outlineVariant: SysTokenValue<string>
}

export interface Shapes {
    none: number
    extraSmall: number
    small: number
    medium: number
    large: number
    extraLarge: number
    full: number
}

export interface States {
    pressedStateLayerOpacity: SysTokenValue<number>
    disabledContainerOpacity: SysTokenValue<number>
    disabledOnContainerOpacity: SysTokenValue<number>
}

export interface Elevations {
    level0: number
    level1: number
    level2: number
    level3: number
    level4: number
    level5: number
}

export type SysTheme = { ref: RefTokens }

export type SysTokenValue<T extends LiteralValue> = T | ((ds: SysTheme) => T)
