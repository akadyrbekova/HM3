import { useState } from "react";

const useAddTodo = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = async (e) => {
    e.preventDefault();
    if (todoValue.trim() === "") return;

    const url = "https://todo.roboto.kz/todo";
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title: todoValue.trim(),
        completed: false,
      }),
    });

    const data = await res.json();
    setTodos((prev) => [...prev, data]);
    setTodoValue("");
  };

  return { todoValue, setTodoValue, todos, setTodos, addTodo };
};

export default useAddTodo;
