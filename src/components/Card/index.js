import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "emotion-theming";

import { wrapperStyle, middleStyle, contentStyle } from "./styles";
import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

function Card({ children, ...layout }) {
  const theme = useTheme();
  return (
    <div css={theme => wrapperStyle(theme, layout)}>
      <div css={theme => middleStyle(theme, layout)}>
        <div css={theme => contentStyle(theme, layout)}>{children}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  ...layoutPropTypes,
  children: PropTypes.node,
  removeStripes: PropTypes.bool
};

Card.defaultProps = {
  ...layoutDefaultProps,
  removeStripes: false
};

export default Card;
