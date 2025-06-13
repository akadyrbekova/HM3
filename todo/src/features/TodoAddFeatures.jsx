import { useState, useEffect } from "react";
import TodoAdd from "../component/TodoAdd";
import TodoList from "../component/TodoList";
import TodoFilterFeatures from "./TodoFilterFeatures";

const TodoAddFeatures = () => {
  const [todoValue, setTodoValue] = useState("");
  const [status, setStatus] = useState("All");
  const [todos, setTodos] = useState(() => {
    let localST = localStorage.getItem("obj");
    return JSON.parse(localST);
  });

  useEffect(() => {
    setTodos(filteredTodo);
  }, [status]);

  useEffect(() => {
    localStorage.setItem("obj", JSON.stringify(todos));
  }, [todos]);

  const filteredTodo = todos.filter((item) => {
    if (item.status === false || (item.status === true && status === "All")) {
      return item;
    } else if (item.status === false && status === "Active") {
      return item;
    } else if (item.status === true && status === "Completed") {
      return item;
    } else {
      return null;
    }
  });

  const AddTodo = (e) => {
    e.preventDefault();

    if (todoValue.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: todoValue.trim(),
        status: false,
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
