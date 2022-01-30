import React from "react";
import { useTodo } from "./useTodo";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { EmptyTodo } from "../EmptyTodo";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptySearchResults } from "../EmptySearchResults";

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
    <React.Fragment>
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
      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <EmptyTodo />}
        onEmptySearchedResults={searchText => (
          <EmptySearchResults
            searchText={searchText}
          />
        )}
        // render={(todo, key) => {
        //   return (
        //     <TodoItem
        //       key={key}
        //       text={todo.text}
        //       completed={todo.complete}
        //       onComplete={() => completeTodo(key)}
        //       onDelete={() => deleteTodo(key)}
        //     />
        //   );
        // }}
      >
        {(todo, key) => {
          return (
            <TodoItem
              key={key}
              text={todo.text}
              completed={todo.complete}
              onComplete={() => completeTodo(key)}
              onDelete={() => deleteTodo(key)}
            />
          );
        }}
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
    </React.Fragment>
  );
}

export { App };
