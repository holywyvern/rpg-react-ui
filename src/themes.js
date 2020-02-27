import Immutable from "seamless-immutable";

export const baseTheme = Immutable({
  imports: ["https://fonts.googleapis.com/css?family=Montserrat&display=swap"],
  fontFamily: "Monserrat, sans-serif",
  paddings: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px"
  },
  margins: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px"
  },
  borders: {
    xs: "1px",
    sm: "2px",
    md: "4px",
    lg: "6px",
    xl: "8px"
  },
  borderRadius: {
    xs: "8px",
    sm: "12px",
    md: "16px"
  },
  shadows: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px"
  }
});

export const lightTheme = baseTheme.merge({
  colors: {
    backgrounds: {
      primary: "#fff6e4",
      highlights: "#ffeed3",
      accent: "#ffda71",
      positive: "#92da3f",
      important: "#fd784b",
      negative: "#91dff7",
      input: "#ffeec1"
    },
    texts: {
      primary: "#884211",
      accent: "#884211",
      positive: "#d5dec9",
      important: "#fee7ec",
      negative: "#e1f6f5"
    },
    borders: {
      primary: ["#b0682b", "#b38b35", "#f3ca6f"],
      accent: ["#b0682b", "#b38b35", "#b38b35"],
      important: ["#fdae94", "#fdae94", "#fdae94"],
      positive: ["#89a074", "#517324", "#517324"],
      negative: ["#6483b5"],
      input: "#9c6a39"
    },
    shadow: "rgba(0, 0, 0, 0.2)"
  }
});
