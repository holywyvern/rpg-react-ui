import React, { useState } from "react";

import Button from "../Button";
import Modal from "./index";

function ExampleModal() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={isOpen} onClose={() => setOpen(false)}>
        Hello world
      </Modal>
    </>
  );
}

export default ExampleModal;
