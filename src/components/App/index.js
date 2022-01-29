import React from "react";
import { useTodo } from "./useTodo";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoError } from "../TodoError/TodoError";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { EmptyTodo } from "../EmptyTodo/EmptyTodo";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    setOpenModal,
    addTodo,
  } = useTodo();

  return (
    <>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList>
        {error && <TodoError />}
        {loading && <TodoLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodo />}
        {searchedTodos.map((todo, key) => (
          <TodoItem
            key={key}
            text={todo.text}
            completed={todo.complete}
            onComplete={() => completeTodo(key)}
            onDelete={() => deleteTodo(key)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export { App };
