[![npm](https://img.shields.io/npm/v/@material-rn/core.svg)](https://www.npmjs.com/package/@material-rn/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/nbottarini/material-rn/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/nbottarini/material-rn/actions)
[![Docs](https://img.shields.io/badge/docs-material--rn-blue.svg)](https://nbottarini.github.io/material-rn/)

# Material RN
React Native components based on [Material Design 3](https://m3.material.io/), built on design tokens so you can adapt
them to your brand.

Read the full documentation, with the specs and tokens of each component, at
[nbottarini.github.io/material-rn](https://nbottarini.github.io/material-rn/).

## Installation

Npm:
```
$ npm install --save @material-rn/core
```

Yarn:
```
$ yarn add @material-rn/core
```

Material RN is built for [Expo](https://expo.dev/) and needs these peer dependencies:

```
$ npx expo install react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-keyboard-aware-scroll-view
```

## Usage

Wrap your app with the `ThemeProvider` and use the components:

```typescript jsx
import { FilledButton, ThemeProvider } from '@material-rn/core'

export const App = () => (
    <ThemeProvider>
        <FilledButton title="Sign in" onPress={signIn}/>
    </ThemeProvider>
)
```

## Theming

Every component is styled with design tokens: reference tokens (the palettes), system tokens (colors, typography,
shapes, elevation) and component tokens. Override any of them by passing a partial theme to the `ThemeProvider`:

```typescript jsx
<ThemeProvider ds={{ sys: { color: { primary: '#006A6A' } } }}>
    <App/>
</ThemeProvider>
```

Themes can be nested: an inner `ThemeProvider` merges its tokens with the ones of the outer provider.

## Components

- **Buttons**: filled, text, link, underlined link and icon buttons (standard, filled, tonal and outlined).
- **Forms**: text field, search field, password field, text area, one time password field, dropdown, checkbox, radio
button, switch, upload field and yes/no field.
- **Containers and dialogs**: card, bottom sheet, full screen dialog, keyboard aware container and pull to refresh.
- **Navigation**: tabs, top app bar configuration and back button helpers for React Navigation.
- **Other**: typography, icons, chips, divider, progress indicator and Lottie animations.

## Packages

This is a monorepo with these packages:

| Package | Description |
|---|---|
| [`@material-rn/core`](packages/core) | The components and the theme |
| [`@material-rn/stdlib`](packages/stdlib) | Utilities used by the components |
| [`packages/catalog`](packages/catalog) | Expo app that shows every component |
| [`packages/site`](packages/site) | The documentation site |

## Development

```
$ yarn install
$ yarn build
$ yarn test
```

To browse the components on a device or emulator, run the catalog app from `packages/catalog` with `yarn android` or
`yarn ios`.
