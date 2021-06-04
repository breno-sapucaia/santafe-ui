import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { MemoryRouter } from 'react-router'

const storybookTheme = createMuiTheme({
  overrides: {
    MuiTouchRipple: {
      child: {
        backgroundColor: '#6200EE',
      },
    },
  },
  palette: {
    primary: {
      main: '#02ACEB',
      dark: '#6200EE',
      light: '#6200EE',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6200EE',
    },
  },
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <CssBaseline />
      <Story />
    </>
  ),
  (Story) => (
    <ThemeProvider theme={storybookTheme}>
      <Story />
    </ThemeProvider>
  ),
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
]
