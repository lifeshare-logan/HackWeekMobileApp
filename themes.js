import { createTheming } from '@callstack/react-theme-provider';

// In a perfect world we would have figured out a way to easily make these styles
// availible to the entire app, but we didnt figure that out, so we manually import them
// EVERYWHERE.
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
  },
  spectrio: {
    primaryColor: "#3b2c9d",
    accentColor: "#6b63c9",
    backgroundColor: "#8c7fe3",
    textColor: "white",
    secondaryColor: "#c4bef1",
    rotate: true
  }
};

const { ThemeProvider, withTheme } = createTheming(themes.light);
export { ThemeProvider, withTheme };
