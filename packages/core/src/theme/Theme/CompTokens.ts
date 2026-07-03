import { LiteralValue } from './LiteralValue'
import { RefTokens } from './RefTokens'
import { SysTokens, SysTokenValue } from './SysTokens'
import { FilledButtonTokens } from './components/FilledButtonTokens'
import { TextButtonTokens } from './components/TextButtonTokens'
import { DialogTokens } from './components/DialogTokens'
import { TopAppBarTokens } from './components/TopAppBarTokens'
import { DividerTokens } from './components/DividerTokens'
import { CardTokens } from './components/CardTokens'
import { ListItemTokens } from './components/ListItemTokens'
import { TabsTokens } from './components/TabsTokens'
import { BottomSheetTokens } from './components/BottomSheetTokens'
import { BadgeTokens } from './components/BadgeTokens'
import { ProgressIndicatorTokens } from './components/ProgressIndicatorTokens'
import { OutlinedTextInputTokens } from './components/OutlinedTextInputTokens'
import { FullScreenDialogTokens } from './components/FullScreenDialogTokens'
import { CheckboxTokens } from './components/CheckboxTokens'
import { StandardIconButtonTokens } from './components/StandardIconButtonTokens'
import { DropdownTokens } from './components/DropdownTokens'
import { SearchFieldTokens } from './components/SearchFieldTokens'
import { SwitchTokens } from './components/SwitchTokens'
import { RadioButtonTokens } from './components/RadioButtonTokens'
import { ChipTokens } from './components/ChipTokens'
import { OutlinedButtonTokens } from './components/OutlinedButtonTokens'
import { FilledIconButtonTokens } from './components/FilledIconButtonTokens'
import { TonalIconButtonTokens } from './components/TonalIconButtonTokens'
import { FilterChipTokens } from './components/FilterChipTokens'
import { OutlinedIconButtonTokens } from './components/OutlinedIconButtonTokens'

export interface CompTokens {
    badge: BadgeTokens
    bottomSheet: BottomSheetTokens
    card: CardTokens
    checkbox: CheckboxTokens
    chip: ChipTokens
    filterChip: FilterChipTokens
    dialog: DialogTokens
    dropdown: DropdownTokens
    fullScreenDialog: FullScreenDialogTokens
    divider: DividerTokens
    filledButton: FilledButtonTokens
    outlinedButton: OutlinedButtonTokens
    listItem: ListItemTokens
    outlinedTextInput: OutlinedTextInputTokens
    progressIndicator: ProgressIndicatorTokens
    radioButton: RadioButtonTokens
    searchField: SearchFieldTokens
    standardIconButton: StandardIconButtonTokens
    filledIconButton: FilledIconButtonTokens
    outlinedIconButton: OutlinedIconButtonTokens
    tonalIconButton: TonalIconButtonTokens
    switch: SwitchTokens
    tabs: TabsTokens
    textButton: TextButtonTokens
    topAppBar: TopAppBarTokens
}

export type CompTheme = { ref: RefTokens, sys: SysTokens }

export type CompTokenValue<T extends LiteralValue> = T | ((ds: CompTheme) => SysTokenValue<T>)
