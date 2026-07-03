import React, { FC } from 'react'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '@material-rn/core'
import { ToastProvider } from 'react-native-toast-notifications'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from './screens/HomeScreen'
import { AnimationsScreen } from './screens/elements/animations/AnimationsScreen'
import { CardsScreen } from './screens/elements/CardsScreen'
import { ChipsScreen } from './screens/elements/ChipsScreen'
import { FilledButtonsScreen } from './screens/elements/buttons/FilledButtonsScreen'
import { IconsScreen } from './screens/elements/IconsScreen'
import { TextFieldsHomeScreen } from './screens/elements/textFields/TextFieldsHomeScreen'
import { TextFieldScreen } from './screens/elements/textFields/TextFieldScreen'
import { SearchFieldScreen } from './screens/elements/textFields/SearchFieldScreen'
import { TypographyScreen } from './screens/elements/TypographyScreen'
import { SwitchScreen } from './screens/elements/SwitchScreen'
import { ButtonsHomeScreen } from './screens/elements/buttons/ButtonsHomeScreen'
import { OutlinedButtonsScreen } from './screens/elements/buttons/OutlinedButtonsScreen'
import { TextButtonsScreen } from './screens/elements/buttons/TextButtonsScreen'
import { StandardIconButtonsScreen } from './screens/elements/buttons/StandardIconButtonsScreen'
import { CheckboxesScreen } from './screens/elements/CheckboxesScreen'
import { BottomSheetScreen } from './screens/elements/BottomSheetScreen'
import { LinkButtonsScreen } from './screens/elements/buttons/LinkButtonsScreen'
import { OtpFieldScreen } from './screens/elements/textFields/OtpFieldScreen'
import { UnderlinedLinkButtonsScreen } from './screens/elements/buttons/UnderlinedLinkButtonsScreen'
import { FullScreenDialogScreen } from './screens/elements/FullScreenDialogScreen'
import { TextAreaScreen } from './screens/elements/textFields/TextAreaScreen'
import { FilledIconButtonsScreen } from './screens/elements/buttons/FilledIconButtonsScreen'
import { TonalIconButtonsScreen } from './screens/elements/buttons/TonalIconButtonsScreen'
import { UploadFieldScreen } from './screens/elements/UploadFieldScreen'
import { TabsScreen } from './screens/elements/TabsScreen'
import { DropdownFieldScreen } from './screens/elements/textFields/DropdownFieldScreen'
import { DropdownModal } from './screens/DropdownModal/DropdownModal'
import { OutlinedIconButtonsScreen } from './screens/elements/buttons/OutlinedIconButtonsScreen'

const Stack = createNativeStackNavigator()

export const Root: FC = () => (
    <SafeAreaProvider>
        <ThemeProvider>
            <ToastProvider duration={1000}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="/home" component={HomeScreen} options={{ title: 'Home' }}/>
                        <Stack.Screen name="/animations" component={AnimationsScreen} options={{ title: 'Animations' }}/>
                        <Stack.Screen name="/cards" component={CardsScreen} options={{ title: 'Cards' }}/>
                        <Stack.Screen name="/chips" component={ChipsScreen} options={{ title: 'Chips' }}/>
                        <Stack.Screen name="/checkboxes" component={CheckboxesScreen} options={{ title: 'Checkboxes' }}/>
                        <Stack.Screen name="/buttons" component={ButtonsHomeScreen} options={{ title: 'Buttons' }}/>
                        <Stack.Screen name="/buttons/filledButtons" component={FilledButtonsScreen} options={{ title: 'Filled Buttons' }}/>
                        <Stack.Screen name="/buttons/outlinedButtons" component={OutlinedButtonsScreen} options={{ title: 'Outlined Buttons' }} />
                        <Stack.Screen name="/buttons/textButtons" component={TextButtonsScreen} options={{ title: 'Text Buttons' }} />
                        <Stack.Screen name="/buttons/standardIconButtons" component={StandardIconButtonsScreen} options={{ title: 'Standard Icon Buttons' }} />
                        <Stack.Screen name="/buttons/filledIconButtons" component={FilledIconButtonsScreen} options={{ title: 'Filled Icon Buttons' }} />
                        <Stack.Screen name="/buttons/outlinedIconButtons" component={OutlinedIconButtonsScreen} options={{ title: 'Outlined Icon Buttons' }} />
                        <Stack.Screen name="/buttons/tonalIconButtons" component={TonalIconButtonsScreen} options={{ title: 'Tonal Icon Buttons' }} />
                        <Stack.Screen name="/buttons/linkButtons" component={LinkButtonsScreen} options={{ title: 'Link Buttons' }} />
                        <Stack.Screen name="/buttons/underlinedLinkButtons" component={UnderlinedLinkButtonsScreen} options={{ title: 'Underlined Link Buttons' }} />
                        <Stack.Screen name="/icons" component={IconsScreen} options={{ title: 'Icons' }}/>
                        <Stack.Screen name="/textFields" component={TextFieldsHomeScreen} options={{ title: 'Text Fields' }}/>
                        <Stack.Screen name="/textFields/filledTextField" component={TextFieldScreen} options={{ title: 'Filled Text Field' }}/>
                        <Stack.Screen name="/textFields/searchField" component={SearchFieldScreen} options={{ title: 'Search Field' }}/>
                        <Stack.Screen name="/textFields/otpField" component={OtpFieldScreen} options={{ title: 'Otp Field' }}/>
                        <Stack.Screen name="/textFields/textArea" component={TextAreaScreen} options={{ title: 'Text Area' }}/>
                        <Stack.Screen name="/textFields/dropdown" component={DropdownFieldScreen} options={{ title: 'Dropdown' }}/>
                        <Stack.Screen name="/typography" component={TypographyScreen} options={{ title: 'Typography' }}/>
                        <Stack.Screen name="/switch" component={SwitchScreen} options={{ title: 'Switch' }}/>
                        <Stack.Screen name="/uploadField" component={UploadFieldScreen} options={{ title: 'Upload field' }}/>
                        <Stack.Screen name="/tabs" component={TabsScreen} options={{ title: 'Tabs navigation' }}/>

                        <Stack.Group screenOptions={modalGroupOptions}>
                            <Stack.Screen name="/bottomSheet" component={BottomSheetScreen} />
                            <Stack.Screen name="/fullScreenDialog" component={FullScreenDialogScreen} />
                            <Stack.Screen name="/modals/dropdown" component={DropdownModal} />
                        </Stack.Group>
                    </Stack.Navigator>
                </NavigationContainer>
            </ToastProvider>
        </ThemeProvider>
    </SafeAreaProvider>
)

const modalGroupOptions = {
    presentation: 'transparentModal',
    animation: 'none',
    headerShown: false,
} satisfies NativeStackNavigationOptions


