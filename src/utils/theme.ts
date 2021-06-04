import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
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

export default theme
