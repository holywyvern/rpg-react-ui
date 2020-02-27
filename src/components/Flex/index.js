import React from "react";
import PropTypes from "prop-types";
import { flexPropTypes, flexDefaultProps } from "../../utils/flexProps";

import styles from "./styles";

function Flex({ children, ...layout }) {
  return <div css={theme => styles(layout)}>{children}</div>;
}

Flex.propTypes = {
  ...flexPropTypes,
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
  inline: PropTypes.bool
};

Flex.defaultProps = {
  ...flexDefaultProps,
  alignItems: "start",
  justifyItems: "start",
  inline: false
};

export default Flex;
