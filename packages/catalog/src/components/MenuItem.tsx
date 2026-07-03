import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FilledButton } from '@material-rn/core'

export const MenuItem: FC<Props> = ({ screen, title, onPress }) => {
    const navigation = useNavigation<any>()
    let doOnPress = onPress || (() => navigation.navigate(screen))
    return <FilledButton title={title} onPress={doOnPress} />
}

interface Props {
    title: string
    screen?: string
    onPress?: () => void
}
