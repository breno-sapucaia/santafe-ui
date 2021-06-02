import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const storybookTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#02ACEB",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6200EE",
    },
  },
});


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => <ThemeProvider theme={storybookTheme}><Story/></ThemeProvider>
]