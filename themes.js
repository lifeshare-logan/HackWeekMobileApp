import { createTheming } from '@callstack/react-theme-provider';
export const themes = {
  dark: {
    primaryColor: "#12B7FF",
    accentColor: "black",
    backgroundColor: "#797979",
    textColor: "white",
    secondaryColor: "#7F5315",
    rotate: false
  },
  light: {
    primaryColor: "#12B7FF",
    accentColor: "black",
    backgroundColor: "#F5F5F5",
    textColor: "black",
    secondaryColor: "#797979",
    rotate: true
  }
};
export const header = {
    title: 'LifeShare',
    headerStyle: {
      color: themes.light.textColor,
      backgroundColor: themes.light.backgroundColor
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: themes.light.textColor
    },
};
const { ThemeProvider, withTheme } = createTheming(themes.light);
export { ThemeProvider, withTheme };
