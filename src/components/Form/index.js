import React from "react";
import PropTypes from "prop-types";
import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

import styles from "./styles";

function Form({ onSubmit, children, ...layout }) {
  return (
    <form css={theme => styles(theme, layout)} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  ...layoutPropTypes,
  onSubmit: PropTypes.func,
  children: PropTypes.node
};

Form.defaultProps = {
  ...layoutDefaultProps
};

export default Form;
