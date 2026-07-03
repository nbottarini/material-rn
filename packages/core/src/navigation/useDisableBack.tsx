import { useDisableHardwareBack } from './useDisableHardwareBack'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

export function useDisableBack(disabled: boolean = true) {
    useDisableHardwareBack(disabled)
    const navigation = useNavigation()
    useLayoutEffect(() => {
        if (!disabled) return
        navigation.setOptions({
            headerLeft: () => null,
            headerBackVisible: false,
        })
    }, [navigation, disabled])
}
