import React, { FC } from 'react'
import { ActivityIndicator, StyleProp, View } from 'react-native'
import { styled } from '@nbottarini/react-native-styled'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { useTheme } from '../theme/context/ThemeContext'

export const ProgressIndicator: FC<ProgressIndicatorProps> = (props) => {
    const { ds, resolve } = useTheme()
    return <_View style={props.style}>
        <ActivityIndicator size={props.size ?? 'large'} color={resolve(ds.comp.progressIndicator.color)}/>
    </_View>
}

const _View = styled(View, {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
})

export interface ProgressIndicatorProps {
    style?: StyleProp<ViewStyle>
    size?: 'small' | 'large';
}
