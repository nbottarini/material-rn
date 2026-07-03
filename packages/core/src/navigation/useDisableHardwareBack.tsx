import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { BackHandler } from 'react-native'

export function useDisableHardwareBack(disabled: boolean = true) {
    useFocusEffect(
        useCallback(() => {
            if (!disabled) return () => {}
            const subscription = BackHandler.addEventListener('hardwareBackPress', () => true)
            return () => subscription.remove()
        }, [disabled])
    )
}
