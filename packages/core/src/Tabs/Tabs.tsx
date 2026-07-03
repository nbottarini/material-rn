import React, { ComponentType, FC, Ref, useMemo } from 'react'
import { TabView } from 'react-native-tab-view'
import { TabBar } from './TabBar/TabBar'
import { IconNames } from '../Icon/IconNames'
import { Keyboard, TextInput } from 'react-native'

export const Tabs: FC<TabProps> = ({ tabItems, lazy, activeTab, onChange }) => {
    const initialActiveTabIndex = tabItems.findIndex(it => it.component.name === activeTab)
    const [index, setIndex] = React.useState(initialActiveTabIndex >= 0 ? initialActiveTabIndex : 0)

    const routes = useMemo(() => parseRoutesFromTabItems(tabItems), [tabItems])

    return (
        <TabView
            lazy={lazy || false}
            navigationState={{ index, routes }}
            onIndexChange={(idx) => {
                setIndex(idx)
                onChange?.(tabItems[idx].component.name, idx)
            }}
            renderTabBar={(props) => <TabBar {...props} />}
            renderScene={({ route }) => renderScene(route, index)}
            keyboardDismissMode={'none'}
            onSwipeStart={() => Keyboard.dismiss()}
        />
    )
}

function parseRoutesFromTabItems(items: TabItem[]): Route[] {
    return items.map((it, index) => ({
        ...it,
        key: index.toString(),
        component: it.component,
    }))
}

function renderScene(route: Route, activeRouteIndex: number) {
    const isActive = activeRouteIndex.toString() === route.key
    const { component: Component, componentProps } = route
    return <Component {...componentProps} isActive={isActive} />
}

type Route = TabItem & { key: string }

export interface TabProps {
    tabItems: TabItem[]
    lazy?: boolean
    activeTab?: string
    onChange?: (tabName: string, index: number) => void
}

export interface TabItem {
    title?: string
    icon?: IconNames
    inputRef?: Ref<TextInput>
    component: ComponentType
    componentProps?: any
}
