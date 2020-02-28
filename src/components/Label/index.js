import React from "react";
import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

import styles from "./styles";

function Label({ children, input, ...layout }) {
  return (
    <label css={theme => styles(theme, layout)} htmlFor={input}>
      {children}
    </label>
  );
}

Label.propTypes = {
  ...layoutPropTypes
};

Label.defaultProps = {
  ...layoutDefaultProps
};

export default Label;
