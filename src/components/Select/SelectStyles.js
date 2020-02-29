import React, { useState, Children, cloneElement } from "react";
import PropTypes from "prop-types";

import Flex from "../Flex";
import Modal from "../Modal";

import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

import {
  wrapperStyles,
  listStyles,
  inputStyles,
  caretStyles,
  inputWrapperStyles
} from "./styles";

const preventDefault = e => e.preventDefault();

function SelectStyles({
  name,
  children,
  value,
  placeholder,
  onChange,
  ...layout
}) {
  const [isOpen, setOpen] = useState(false);
  const options = Children.toArray(children).map(c => c.props);
  const selectedOption = options.find(o => o.value === value);
  return (
    <div css={theme => wrapperStyles(theme, layout)}>
      <input name={name} type="hidden" value={value} />
      <div css={inputWrapperStyles}>
        <input
          css={inputStyles}
          type="text"
          value={selectedOption && selectedOption.label}
          onChange={preventDefault}
          onClick={e => setOpen(!isOpen)}
          readOnly
          placeholder={placeholder}
        />
        <div css={caretStyles}>{isOpen ? "▲" : "▼"}</div>
      </div>
      <Modal open={isOpen} onClose={() => setOpen(false)}>
        <nav>
          <ul css={listStyles}>
            {Children.map(children, (c, i) =>
              cloneElement(c, { selected: c.props.value === value, onChange })
            )}
          </ul>
        </nav>
      </Modal>
    </div>
  );
}

SelectStyles.propTypes = {
  ...layoutPropTypes,
  children: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  placeholder: PropTypes.string
};

SelectStyles.defaultProps = {
  ...layoutDefaultProps
};

export default SelectStyles;
