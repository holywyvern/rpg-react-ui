import React from "react";
import PropTypes from "prop-types";

import columnStyles from "./styles";
import {
  SIZES,
  layoutDefaultProps,
  layoutPropTypes
} from "../../utils/layoutProps";

function Columns({ children, ...layout }) {
  return <div css={theme => columnStyles(theme, layout)}>{children}</div>;
}

Columns.propTypes = {
  ...layoutPropTypes,
  format: PropTypes.arrayOf(PropTypes.string).isRequired,
  gap: PropTypes.oneOf(SIZES)
};

Columns.defaultProps = {
  ...layoutDefaultProps
};

export default Columns;
