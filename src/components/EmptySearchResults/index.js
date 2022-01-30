import React from "react";
import "./EmptyTodo.css";

function EmptySearchResults({ searchText }) {
  return <p>No hay resultados para "{searchText}"</p>;
}

export { EmptySearchResults };
