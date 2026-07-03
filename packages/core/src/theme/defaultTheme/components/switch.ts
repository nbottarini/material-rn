import { SwitchTokens } from '../../Theme/components/SwitchTokens'

export const switchComponent: SwitchTokens = {
    checkedThumbColor: (ds) => ds.sys.color.onPrimary,
    uncheckedThumbColor: (ds) => ds.sys.color.outline,
    checkedTrackColor: (ds) => ds.sys.color.primary,
    uncheckedTrackColor: (ds) => ds.sys.color.outlineVariant,
    disabledCheckedThumbColor: (ds) => ds.sys.color.surface,
    disabledUncheckedThumbColor: (ds) => ds.sys.color.surfaceBright,
    disabledCheckedTrackColor: (ds) => ds.sys.color.onSurface,
    disabledUncheckedTrackColor: (ds) => ds.sys.color.surfaceContainer,
    disabledTrackOpacity: (ds) => ds.sys.state.disabledContainerOpacity,
}
