import React from "react";
import { TodoIcon } from "./index";

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="trash"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };
