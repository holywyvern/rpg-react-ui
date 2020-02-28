import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";
import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

function Button({ type, submit, children, onClick, disabled, ...layout }) {
  return (
    <button
      css={theme => styles[type](theme, layout)}
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
  type: PropTypes.oneOf(["positive", "negative", "important"]),
  children: PropTypes.node
};

Button.defaultProps = {
  ...layoutDefaultProps,
  submit: false,
  disabled: false,
  type: "positive"
};

export default Button;
