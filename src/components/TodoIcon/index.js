import React from "react";
import "./TodoIcon.css";
import { ReactComponent as CheckIcon } from "./check.svg";
import { ReactComponent as TrashIcon } from "./trash.svg";

function TodoIcon({ type, color, onClick }) {
  const iconTypes = {
    check: color => <CheckIcon className="Icon-svg Icon-svg--check" color={color} />,
    trash: color => <TrashIcon className="Icon-svg Icon-svg--trash" color={color} />,
  };

  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
