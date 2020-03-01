import React from "react";
import PropTypes from "prop-types";
import { optionStyle } from "./styles";

function Option({
  selected,
  current,
  index,
  value,
  label,
  children,
  onChange,
  onFocus
}) {
  return (
    <li
      css={theme => optionStyle(theme, selected, current)}
      onClick={() => onChange(value)}
      onFocus={onFocus}
    >
      {label || children}
    </li>
  );
}

Option.propTypes = {
  selected: PropTypes.bool,
  index: PropTypes.number,
  value: PropTypes.any.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  current: PropTypes.bool
};

export default Option;
