import { useState, useEffect } from "react";
import TodoAdd from "../component/TodoAdd";
import TodoList from "../component/TodoList";
import TodoFilterFeatures from "./TodoFilterFeatures";

const TodoAddFeatures = () => {
  const [todoValue, setTodoValue] = useState("");
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
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

  useEffect(() => {
    console.log(todos, "обновленный массив");
    const filtered = todos.filter((item) => {
      if (status === "All") return true;
      if (status === "Active") return item.completed === false;
      if (status === "Completed") return item.completed === true;
    });
    setFilteredTodos(filtered);
  }, [status, todos]);

  const AddTodo = (e) => {
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
        setTodos([...todos, data]);
      });

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
