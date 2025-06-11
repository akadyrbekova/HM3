import { useState, useEffect } from "react";
import TodoAdd from "../component/TodoAdd";
import TodoList from "../component/TodoList";

import TodoFilterFeatures from "./TodoFilterFeatures";
const TodoAddFeatures = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Hello world",
      status: true,
    },
    {
      id: 2,
      title: "Hello world2",
      status: false,
    },
  ]);

  const [todoValue, setTodoValue] = useState("");

  const [status, setStatus] = useState("All");

  useEffect(() => {
    const filteredTodo = todos.filter((item) => {
      if (status === "All") {
        return item;
      } else if (item.status === false && status === "Active") {
        return item;
      } else if (item.status === true && status === "Completed") {
        return item;
      } else {
        return null;
      }
    });
    setTodos(filteredTodo);
  }, [status]);

  const AddTodo = (e) => {
    e.preventDefault();

    if (todoValue.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: todoValue.trim(),
        statuss: false,
      },
    ]);

    setTodoValue("");
  };

  return (
    <div className="flex flex-col">
      <TodoAdd
        AddTodo={AddTodo}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoFilterFeatures setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoAddFeatures;
