export interface RefTokens {
    palette: Palettes
    typeface: Typefaces
}

export interface Palettes {
    primary: Palette
    secondary: Palette
    tertiary: Palette
    neutral: ExtendedPalette
    neutralVariant: Palette
    info: Palette
    warning: Palette
    success: Palette
    error: Palette
}

export interface Palette {
    _0: string
    _10: string
    _20: string
    _30: string
    _40: string
    _50: string
    _60: string
    _70: string
    _80: string
    _90: string
    _95: string
    _99: string
    _100: string
}

export interface ExtendedPalette extends Palette {
    _87: string
    _92: string
    _94: string
    _96: string
    _98: string
}

export interface Typefaces {
    brandLight: string
    plainLight: string
    brandRegular: string
    plainRegular: string
    brandMedium: string
    plainMedium: string
    brandSemiBold: string
    plainSemiBold: string
}

