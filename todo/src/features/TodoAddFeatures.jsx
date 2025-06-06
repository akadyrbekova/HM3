import { useState } from "react";
import TodoAdd from "../component/TodoAdd";
import TodoList from "../component/TodoList";

const TodoAddFeatures = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

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
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoAddFeatures;
