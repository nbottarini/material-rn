import { Root } from './Root'
import { registerRootComponent } from 'expo'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const RootComponent = () => <GestureHandlerRootView style={{ flex: 1 }}><Root /></GestureHandlerRootView>

registerRootComponent(RootComponent)
