import { Theme } from '../theme/Theme/Theme'
import { TokenResolveFunc } from '../theme/Theme/tokenResolver/TokenResolveFunc'
import { rv } from '../rv'
import { EdgeInsets } from 'react-native-safe-area-context'
import { Platform } from 'react-native'

export const topAppBarConfig = (ds: Theme, resolve: TokenResolveFunc, insets?: EdgeInsets) => {
    const headerTypeScale = resolve(ds.sys.typeScale.headlineSmall)
    return {
        headerStyle: {
            backgroundColor: resolve(ds.comp.topAppBar.containerColor),
            elevation: resolve(ds.comp.topAppBar.containerElevation),
            shadowOffset: { width: 0, height: 0 },
            shadowColor: resolve(ds.sys.color.outline),
            height: (Platform.OS === 'android' ? rv(64) : rv(48)) + (insets?.top ?? 0),
        },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: resolve(ds.comp.topAppBar.leadingIconButtonColor),
        headerTitleStyle: {
            fontFamily: resolve(headerTypeScale.fontFamily),
            fontSize: resolve(headerTypeScale.fontSize),
            lineHeight: resolve(headerTypeScale.lineHeight),
            letterSpacing: resolve(headerTypeScale.letterSpacing),
            color: resolve(ds.comp.topAppBar.headlineColor),
        },
    }
}
