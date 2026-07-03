import React, { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { themed } from '../../../theme/themed'

export const CountDown: FC<Props> = ({ duration, onFinish, resetCount }) => {
    const [timeLeft, setTimeLeft] = useState(duration)

    useEffect(() => {
        if (resetCount) setTimeLeft(duration)
    }, [resetCount, duration])

    useEffect(() => {
        if (timeLeft === 0) {
            onFinish()
            return () => null
        }

        const interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000)

        return () => clearInterval(interval)
    }, [timeLeft, onFinish])

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return minutes > 0
            ? `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            : seconds.toString().padStart(2, '0')
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <Text>Podrá reintentar en </Text>
            <Time>{formatTime(timeLeft)} seg</Time>
        </View>
    )
}

const Time = themed(Text , ({ resolve, ds }) => ({
    color: resolve(ds.sys.color.primary)
}))

interface Props {
    duration: number
    onFinish: () => void
    resetCount: boolean
}
