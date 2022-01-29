import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    setOpenModal,
    addTodo,
  } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(prevState => !prevState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(prevState => !prevState);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Crear Todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla oara el amuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
