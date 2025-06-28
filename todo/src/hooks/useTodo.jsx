import { useState, useEffect } from "react";
const useTodo = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = "https://todo.roboto.kz/todo";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    if (todoValue.trim() === "") return;

    const url = "https://todo.roboto.kz/todo";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title: todoValue.trim(),
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos((prevTodos) => [...prevTodos, data]);
      });

    setTodoValue("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);

    fetch(`https://todo.roboto.kz/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("Удалено:", data))
      .catch((error) => console.error("Ошибка:", error));
  };

  return {
    todoValue,
    setTodoValue,
    todos,
    setTodos,
    addTodo,
    deleteTodo,
  };
};
export default useTodo;
