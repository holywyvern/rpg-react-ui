import React from "react";
import Flex from "../Flex";
import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

import { useTheme } from "emotion-theming";

import styles from "./styles";

function Swatch({ color }) {
  return <div css={theme => styles(theme, color)} />;
}

function ColorSwatch({ color }) {
  if (Array.isArray(color)) {
    return color.map(c => <ColorSwatch color={c} />);
  }
  if (typeof color === "string") {
    return <Swatch color={color} />;
  }
  return Object.keys(color).map(c => (
    <>
      <ColorSwatch color={color[c]} key={c} />
    </>
  ));
}

function ThemeSwatch({ theme: themeProp, ...layout }) {
  const selectedTheme = useTheme();
  const { colors } = themeProp || selectedTheme;
  return (
    <Flex column {...layout}>
      {Object.keys(colors).map(section => (
        <Flex row wrap key={`${section}-set`}>
          <ColorSwatch color={colors[section]} />
        </Flex>
      ))}
    </Flex>
  );
}

ThemeSwatch.propTypes = {
  ...layoutPropTypes
};

ThemeSwatch.defaultProps = {
  ...layoutDefaultProps
};

export default ThemeSwatch;
