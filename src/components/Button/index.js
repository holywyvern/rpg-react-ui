import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";

function Button({ type, submit, children, onClick, disabled }) {
  return (
    <button
      css={styles[type]}
      type={submit ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  submit: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["positive", "negative", "important"]),
  children: PropTypes.node
};

Button.defaultProps = {
  submit: false,
  disabled: false,
  type: "positive"
};

export default Button;
