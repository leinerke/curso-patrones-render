import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmpty()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchedResults(props.searchText)}
      {(!props.loading && !props.error) && props.searchedTodos.map(props.render ?? props.children)}
    </section>
  );
}

export { TodoList };
