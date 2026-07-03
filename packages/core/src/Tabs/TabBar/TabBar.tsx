import React, { FC } from 'react'
import { Label } from './Label'
import { TabBar as RNTabBar, TabBarProps } from 'react-native-tab-view'
import { rgba } from '../../color'
import { Keyboard } from 'react-native'
import { useTheme } from '../../theme/context/ThemeContext'
import { rv } from '../../rv'

export const TabBar: FC<TabBarProps<any>> = (props) => {
    const { ds, resolve } = useTheme()
    return <RNTabBar
        {...props}
        renderLabel={({ route, color }) => <Label title={route.title} icon={route.icon} color={color}/>}
        style={{
            backgroundColor: resolve(ds.comp.tabs.containerColor),
            borderRadius: resolve(ds.comp.tabs.containerShape),
            elevation: resolve(ds.comp.tabs.containerElevation),
            borderBottomWidth: resolve(ds.comp.tabs.dividerThickness),
            borderBottomColor: resolve(ds.comp.tabs.dividerColor),
        }}
        indicatorStyle={{
            backgroundColor: resolve(ds.comp.tabs.activeIndicatorColor),
            height: resolve(ds.comp.tabs.activeIndicatorHeight),
            width: resolve(ds.comp.tabs.activeIndicatorWidth),
            marginLeft: rv(38),
            borderTopLeftRadius: rv(100),
            borderTopRightRadius: rv(100),
        }}
        activeColor={resolve(ds.comp.tabs.labelActiveColor)}
        inactiveColor={resolve(ds.comp.tabs.labelInactiveColor)}
        pressColor={rgba(resolve(ds.comp.tabs.pressedStateLayerColor), resolve(ds.comp.tabs.pressedStateLayerOpacity))}
        onTabPress={() => Keyboard.dismiss()}
    />
}
