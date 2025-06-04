import TodoAdd from "./TodoAdd";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import { useState } from "react";

const Form = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const AddTodo = (e) => {
    e.preventDefault();

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: todoValue,
        status: false,
      },
    ]);

    setTodoValue("");
  };

  return (
    <form onSubmit={AddTodo} className="w-[600px] flex flex-col  items-center">
      <TodoAdd todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoFilter />
      <TodoList todos={todos} setTodos={setTodos} />
    </form>
  );
};

export default Form;
