import React, { FC, PropsWithChildren } from 'react'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { TypeScale } from '../theme/Theme/SysTokens'
import { Pressable } from 'react-native'
import { Typography } from './Typography'
import { useTheme } from '../theme/context/ThemeContext'
import { rgba } from '../color'

export const TextLink: FC<Props> = (props) => {
    const { ds, resolve } = useTheme()
    const typeScale = props.typeScale ?? ds.sys.typeScale.bodyMedium
    return (
        <Pressable style={props.style} onPress={props.onPress} >
            {({ pressed }) => (
                <Typography
                    typeScale={typeScale}
                    style={{
                        color: pressed ? rgba(resolve(ds.sys.color.primary), 0.38) : resolve(ds.sys.color.primary),
                        textDecorationLine: 'underline',
                    }}
                >{props.children}</Typography>
            )}
        </Pressable>
    )
}

interface Props extends PropsWithChildren {
    typeScale?: TypeScale
    onPress?: () => void
    style?: ViewStyle
}
