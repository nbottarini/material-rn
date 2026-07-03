import React from 'react'
import { HeaderBackButton } from '@react-navigation/elements'
import { styled } from '@nbottarini/react-native-styled'

export const AppBarBackButton: React.FC<AppBarBackButtonProps> = ({ onPress, tintColor }) => {
    return <_HeaderBackButton onPress={onPress} labelVisible={false} tintColor={tintColor} />
}

export interface AppBarBackButtonProps {
    onPress: () => void
    tintColor?: string
}

const _HeaderBackButton = styled(HeaderBackButton, {
    marginLeft: -6,
})
