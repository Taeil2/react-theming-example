import { ThemeProvider } from 'styled-components'

import Main from './components/Main/Main'

import themeVars from './theme/theme'
import GlobalStyles from './theme/GlobalStyles'

const userSettings = {
  mode: "light", // light, dark
  theme: "cyan", // red, gold, green, cyan, blue, grape
  style: "modern", // modern, classic
  size: "medium", // small, medium, large
}

// const userSettings = {
//   mode: "dark", // light, dark
//   theme: "red", // red, gold, green, cyan, blue, grape
//   style: "classic", // modern, classic
//   size: "medium", // small, medium, large
// }

const theme = {
  style: themeVars.style[userSettings.style],
  size: themeVars.size[userSettings.size],
}

if (userSettings.mode === "light") {
  theme.background = themeVars.mode.light.background
  theme.color = themeVars.mode.light.color
  theme.theme = themeVars.mode.light.theme[userSettings.theme]
} else {
  theme.background = themeVars.mode.dark.background
  theme.color = themeVars.mode.dark.color
  theme.theme = themeVars.mode.dark.theme[userSettings.theme]
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  )
}

export default App
