import React from 'react'
import { View } from 'react-native'
import { LottieAnimation, styled } from '@material-rn/core'

export const AnimationsScreen = () => (
    <_ScreenContainer>
        <LottieAnimation
            animation={require('./loader.json')}
            onAnimationFinish={() => {}}
            loop={true}
            style={{ width: '100%', height: '100%' }}
            resizeMode={'contain'}
        />
    </_ScreenContainer>
)

const _ScreenContainer = styled(View, {
    width: '100%',
    height: '100%',
})
