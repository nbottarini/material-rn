import React, { FC } from 'react'
import { ScrollView, ViewProps } from 'react-native'
import { RefreshControl } from './RefreshControl'

export const PullToRefreshScrollView: FC<PullToRefreshScrollViewProps> = (props) => {
    return (
        <ScrollView
            refreshControl={<RefreshControl refreshing={props.refreshing} onRefresh={props.onRefresh} />}
            {...props}
        >
            {props.children}
        </ScrollView>
    )
}

export interface PullToRefreshScrollViewProps extends ViewProps {
    onRefresh?: (() => void) | undefined
    refreshing: boolean
}
