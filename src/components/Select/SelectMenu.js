import React, {
  useRef,
  useEffect,
  useState,
  Children,
  cloneElement
} from "react";

import { listStyles, listWrapperStyles } from "./styles";

function SelectMenu({ value, visible, onChange, children }) {
  const [refIndex, setRefIndex] = useState(0);
  const ref = useRef();
  const size = Children.count(children);
  const setIndex = index => {
    setRefIndex(index);
    const child = ref.current && ref.current.childNodes[index];
    child && child.scrollIntoView && child.scrollIntoView();
  };
  const moveDown = () => setIndex((refIndex + 1) % size);
  const moveUp = () => setIndex((((refIndex - 1) % size) + size) % size);
  const move = event => {
    switch (event.key) {
      case "ArrowDown": {
        moveDown();
        event.preventDefault();
        return;
      }
      case "ArrowUp": {
        moveUp();
        event.preventDefault();
        return;
      }
      case "Enter": {
        event.preventDefault();
        onChange(Children.toArray(children)[refIndex].props.value);
        return;
      }
    }
  };
  useEffect(() => {
    if (visible) {
      const selectedIndex = Children.map(
        children,
        c => value === c.props.value
      ).indexOf(true);
      setIndex(selectedIndex);
      ref.current & ref.current.focus();
    }
  }, [visible]);
  return (
    <nav css={listWrapperStyles}>
      <ul ref={ref} css={listStyles} tabIndex={0} onKeyDown={move}>
        {Children.map(children, (c, index) => {
          const selected = refIndex === index;
          return cloneElement(c, {
            current: value === c.props.value,
            selected,
            onChange,
            index
          });
        })}
      </ul>
    </nav>
  );
}

export default SelectMenu;
