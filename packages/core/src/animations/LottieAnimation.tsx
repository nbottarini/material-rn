import React, { FC } from 'react'
import LottieView from 'lottie-react-native'
import { StyleProp, ViewStyle } from 'react-native'

export const LottieAnimation: FC<LottieAnimationProps> = (props) => {
    return (
        <LottieView
            resizeMode={props.resizeMode ?? 'cover'}
            style={[{ width: props?.size, height: props?.size }, props.style]}
            source={props.animation}
            autoPlay={props.autoplay ?? true}
            loop={props.loop ?? false}
            onAnimationFinish={(isCanceled) => {
                if (!isCanceled) {
                    props.onAnimationFinish?.()
                }
            }}
            speed={props.speed}
            duration={props.duration}
            renderMode={props.renderMode}
        />
    )
}

export interface LottieAnimationProps {
    animation: string
    size?: number
    resizeMode?: 'contain' | 'cover' | 'center'
    speed?: number
    duration?: number
    loop?: boolean
    autoplay?: boolean
    renderMode?: 'AUTOMATIC' | 'HARDWARE' | 'SOFTWARE'
    onAnimationFinish?: () => void
    style?: StyleProp<ViewStyle>
}
