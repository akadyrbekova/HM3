import TodoFilter from "../component/TodoFilter";
import { useState } from "react";

const TodoFilterFeatures = ({ todos }) => {
  const filterTodo = todos.filter((todo, status) => {
    if (status === "All") return todo;
    if (status === "Active") return todo.false;
    if (status === "Completed") return todo.true;
  });

  return (
    <>
      <TodoFilter filterTodo={filterTodo} />
    </>
  );
};

export default TodoFilterFeatures;
