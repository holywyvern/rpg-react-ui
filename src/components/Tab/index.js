import React from "react";

import PropTypes from "prop-types";
import { tabStyles, tabContentStyles, tabMiddleStyles } from "./styles";

function Tab({ label, index, selected, onChange }) {
  return (
    <li
      tabIndex={0}
      css={theme => tabStyles(theme, selected)}
      onClick={() => onChange(index)}
    >
      <div css={theme => tabMiddleStyles(theme, selected)}>
        <div css={theme => tabContentStyles(theme, selected)}>{label}</div>
      </div>
    </li>
  );
}

Tab.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
  index: PropTypes.number
};

Tab.defaultProps = {
  selected: false
};

export default Tab;
