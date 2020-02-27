import React from "react";
import PropTypes from "prop-types";
import { flexPropTypes, flexDefaultProps } from "../../utils/flexProps";

import styles from "./styles";

function Form({ onSubmit, children, layout }) {
  return (
    <form css={theme => styles(layout)} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  ...flexPropTypes,
  onSubmit: PropTypes.func,
  children: PropTypes.node
};

Form.defaultProps = {
  ...flexDefaultProps
};

export default Form;
