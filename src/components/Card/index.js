import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "emotion-theming";

import { wrapperStyle, middleStyle, contentStyle } from "./styles";
import { flexPropTypes, flexDefaultProps } from "../../utils/flexProps";

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
  ...flexPropTypes,
  children: PropTypes.node
};

Card.defaultProps = {
  ...flexDefaultProps
};

export default Card;
