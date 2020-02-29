import React from "react";
import PropTypes from "prop-types";
import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

import styles from "./styles";

function Flex({ children, ...layout }) {
  return <div css={theme => styles(theme, layout)}>{children}</div>;
}

Flex.propTypes = {
  ...layoutPropTypes,
  alignItems: PropTypes.oneOf(["start", "end", "center", "stretch"]),
  justifyItems: PropTypes.oneOf([
    "start",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    "left",
    "right",
    "baseline",
    "normal"
  ]),
  children: PropTypes.node,
  wrap: PropTypes.bool,
  reverse: PropTypes.bool,
  inline: PropTypes.bool
};

Flex.defaultProps = {
  ...layoutDefaultProps,
  alignItems: "start",
  justifyItems: "start",
  wrap: false,
  reverse: false,
  inline: false
};

export default Flex;
