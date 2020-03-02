import Immutable from "seamless-immutable";

export const baseTheme = Immutable({
  imports: ["https://fonts.googleapis.com/css?family=Montserrat&display=swap"],
  fontFamily: "Monserrat, sans-serif",
  paddings: {
    "0": "0",
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px"
  },
  margins: {
    "0": "0",
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px"
  },
  borders: {
    "0": "0",
    xs: "1px",
    sm: "2px",
    md: "4px",
    lg: "6px",
    xl: "8px"
  },
  borderRadius: {
    "0": "0",
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "16px"
  },
  gaps: {
    "0": "0",
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px"
  },
  shadows: {
    "0": "0",
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px"
  },
  font: {
    sizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "24px",
      xl: "32px"
    }
  }
});

export const lightTheme = baseTheme.merge({
  colors: {
    backgrounds: {
      primary: "#fff6e4",
      secondary: "#f49c61",
      highlights: "#ffeed3",
      accent: "#ffda71",
      positive: "#92da3f",
      important: "#fd784b",
      negative: "#91dff7",
      input: "#ffeec1"
    },
    texts: {
      primary: "#884211",
      secondary: "#f8e9d7",
      accent: "#884211",
      positive: "#fdfdfd",
      important: "#fdfdfd",
      negative: "#fdfdfd",
      input: "#9c6a39"
    },
    borders: {
      primary: ["#b0682b", "#b38b35", "#f3ca6f"],
      secondary: ["#9a3d24"],
      accent: ["#b0682b", "#b38b35", "#b38b35"],
      important: ["#9e371a", "#9e371a", "#9e371a"],
      positive: ["#89a074", "#517324", "#517324"],
      negative: ["#6483b5"],
      input: "#9c6a39",
      highlights: "#feecd6"
    },
    shadow: "rgba(0, 0, 0, 0.2)"
  }
});

export const seaTheme = baseTheme.merge({
  colors: {
    backgrounds: {
      primary: "#e2eefa",
      secondary: "#d0d7df",
      highlights: "#a6bed6",
      accent: "#010080",
      positive: "#aaccef",
      important: "#fd784b",
      negative: "#000040",
      input: "#ffffff"
    },
    texts: {
      primary: "#20163b",
      secondary: "#20163b",
      accent: "#884211",
      positive: "#20163b",
      important: "#fdfdfd",
      negative: "#fdfdfd",
      input: "#272c30"
    },
    borders: {
      primary: ["#7e8b9e", "#a6bed6", "#a6bed6"],
      secondary: ["#7c8999"],
      accent: ["#7e8b9e", "#7f8c9c", "#7f8c9c"],
      important: ["#9e371a", "#9e371a", "#9e371a"],
      positive: ["#7f8c9c", "#7f8c9c", "#7f8c9c"],
      negative: ["#6483b5"],
      input: "#9daeb8",
      highlights: "#657390"
    },
    shadow: "rgba(0, 0, 0, 0.2)"
  }
});
