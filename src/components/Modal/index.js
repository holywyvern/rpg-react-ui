import React from "react";
import PropTypes from "prop-types";

import Card from "../Card";
import Button from "../Button";

import { wrapperStyles, contentStyles, closeStyles } from "./styles";

const preventDefault = e => e.preventDefault();

function Modal({ open, onClose, children }) {
  return (
    <div
      css={theme => wrapperStyles(theme, open)}
      onKeyPress={preventDefault}
      onKeyDown={preventDefault}
    >
      <div css={contentStyles}>
        <Card>{children}</Card>
        {onClose && (
          <div css={closeStyles}>
            <Button type="important" onClick={onClose} size="xs">
              &times;
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

Modal.defaultProps = {
  open: false
};

export default Modal;
