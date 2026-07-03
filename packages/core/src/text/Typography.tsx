import React from 'react'
import { Text, TextProps } from 'react-native'
import { useTheme } from '../theme/context/ThemeContext'
import { Theme } from '../theme/Theme/Theme'
import { TypeScale } from '../theme/Theme/SysTokens'

export const Typography: React.FC<TypographyProps> = (props) => {
    const { ds, resolve } = useTheme()
    const font = {
        fontFamily: resolve(props.typeScale.fontFamily),
        fontSize: resolve(props.typeScale.fontSize),
        lineHeight: resolve(props.typeScale.lineHeight),
        letterSpacing: resolve(props.typeScale.letterSpacing),
    }
    const color = {
        color: resolve(ds.sys.color.onSurface),
    }
    return <Text {...props} style={[color, props.style, font]} allowFontScaling={false}>{props.children}</Text>
}

const createTypeScaleComponent = (typeScaleFunc: (ds: Theme) => TypeScale) => {
    return function TypeScaleComponent(props: TextProps) {
        const { ds } = useTheme()
        return <Typography {...props} typeScale={typeScaleFunc(ds)}>{props.children}</Typography>
    }
}

export const DisplayLarge = createTypeScaleComponent(ds => ds.sys.typeScale.displayLarge)

export const DisplayMedium = createTypeScaleComponent(ds => ds.sys.typeScale.displayMedium)

export const DisplaySmall = createTypeScaleComponent(ds => ds.sys.typeScale.displaySmall)

export const HeadlineLarge = createTypeScaleComponent(ds => ds.sys.typeScale.headlineLarge)

export const HeadlineMedium = createTypeScaleComponent(ds => ds.sys.typeScale.headlineMedium)

export const HeadlineSmall = createTypeScaleComponent(ds => ds.sys.typeScale.headlineSmall)

export const TitleLarge = createTypeScaleComponent(ds => ds.sys.typeScale.titleLarge)

export const TitleMedium = createTypeScaleComponent(ds => ds.sys.typeScale.titleMedium)

export const TitleSmall = createTypeScaleComponent(ds => ds.sys.typeScale.titleSmall)

export const LabelLarge = createTypeScaleComponent(ds => ds.sys.typeScale.labelLarge)

export const LabelMedium = createTypeScaleComponent(ds => ds.sys.typeScale.labelMedium)

export const LabelSmall = createTypeScaleComponent(ds => ds.sys.typeScale.labelSmall)

export const BodyLarge = createTypeScaleComponent(ds => ds.sys.typeScale.bodyLarge)

export const BodyMedium = createTypeScaleComponent(ds => ds.sys.typeScale.bodyMedium)

export const BodySmall = createTypeScaleComponent(ds => ds.sys.typeScale.bodySmall)

export interface TypographyProps extends TextProps {
    typeScale: TypeScale
}
