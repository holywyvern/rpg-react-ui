import React from "react";
import PropTypes from "prop-types";

import style from "./styles";
import {
  layoutPropTypes,
  layoutDefaultProps,
  SIZES
} from "../../utils/layoutProps";

function Button({
  type,
  submit,
  children,
  onClick,
  disabled,
  squared,
  ...layout
}) {
  return (
    <button
      css={theme => style(theme, layout, type, squared)}
      type={submit ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  ...layoutPropTypes,
  submit: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["positive", "secondary", "negative", "important"]),
  children: PropTypes.node,
  squared: PropTypes.bool,
  size: PropTypes.oneOf(SIZES)
};

Button.defaultProps = {
  ...layoutDefaultProps,
  submit: false,
  disabled: false,
  squared: false,
  type: "positive",
  size: "md"
};

export default Button;
