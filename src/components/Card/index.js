import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "emotion-theming";

import { wrapperStyle, middleStyle, contentStyle } from "./styles";

function Card({ children }) {
  const theme = useTheme();
  return (
    <div css={wrapperStyle(theme)}>
      <div css={middleStyle(theme)}>
        <div css={contentStyle(theme)}>{children}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
