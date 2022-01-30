import React from "react";
import './TodoLoading.css';

function TodoLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon" />
      <p className="LoadingTodo-text">Cargando TODOs...</p>
      <span className="LoadingTodo-deleteIcon" />
    </div>
  );
}

export { TodoLoading };
