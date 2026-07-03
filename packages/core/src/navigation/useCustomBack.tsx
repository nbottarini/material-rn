import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useLayoutEffect } from 'react'
import { BackHandler } from 'react-native'
import { AppBarBackButton } from './AppBarBackButton'

export function useCustomBack(options: BackOptions) {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: ({ tintColor, canGoBack }) => {
                if (!canGoBack || options.isVisible === false) return null
                return <AppBarBackButton onPress={options.onPress ?? (() => navigation.goBack())} tintColor={tintColor} />
            },
            headerBackVisible: options.isVisible === false ? false : undefined,
        })
    }, [navigation, options.onPress, options.isVisible])
    useFocusEffect(
        useCallback(() => {
            const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
                if (options.isVisible !== false) {
                    options.onPress?.()
                }
                return true
            })
            return () => subscription.remove()
        }, [options])
    )
}

export interface BackOptions {
    onPress?: () => void
    isVisible?: boolean
}

