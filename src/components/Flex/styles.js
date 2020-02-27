import { css } from "@emotion/core";
import { flexStyles } from "../../utils/flexProps";

const ALIGN_FOR = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch"
};

const JUSTIFY_FOR = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly",
  stretch: "stretch"
};

export default function styles({
  inline,
  column,
  alignItems,
  justifyItems,
  ...layout
}) {
  return css`
    ${flexStyles(layout)}
    display: ${inline ? "inline-flex" : "flex"};
    flex-direction: ${column ? "column" : "row"};
    align-items: ${ALIGN_FOR[alignItems]};
    justify-content: ${JUSTIFY_FOR[justifyItems]};
  `;
}
