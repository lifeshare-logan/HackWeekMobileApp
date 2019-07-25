import { createTheming } from '@callstack/react-theme-provider';
export const themes = {
  normal: {
    primaryColor: "#12B7FF",
    accentColor: "black",
    backgroundColor: "#797979",
    textColor: "white",
    secondaryColor: "#7F5315",
    rotate: false
  },
  crazy: {
    primaryColor: "#1B8C81",
    accentColor: "#458622",
    backgroundColor: "#8FC266",
    textColor: "#D94B2B",
    secondaryColor: "#B9667F",
    rotate: true
  }
};
const { ThemeProvider, withTheme } = createTheming(themes.normal);
export { ThemeProvider, withTheme };
