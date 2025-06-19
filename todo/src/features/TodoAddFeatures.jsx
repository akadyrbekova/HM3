import { useState, useEffect } from "react";
import TodoAdd from "../component/TodoAdd";
import TodoList from "../component/TodoList";
import TodoFilterFeatures from "./TodoFilterFeatures";

const TodoAddFeatures = () => {
  const [todoValue, setTodoValue] = useState("");
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [todos, setTodos] = useState(() => {
    let localST = localStorage.getItem("obj");
    return JSON.parse(localST);
  });

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
        console.log(data);
      });
  }, []);

  // useEffect(() => {
  //   const filtered = todos.filter((item) => {
  //     if (status === "All") return true;
  //     if (status === "Active") return item.status === false;
  //     if (status === "Completed") return item.status === true;
  //   });
  //   setFilteredTodos(filtered);
  // }, [status, todos]);

  useEffect(() => {
    localStorage.setItem("obj", JSON.stringify(todos));
  }, [todos]);

  // const filteredTodo = todos.filter((item) => {
  //   if (item.status === false || (item.status === true && status === "All")) {
  //     return item;
  //   } else if (item.status === false && status === "Active") {
  //     return item;
  //   } else if (item.status === true && status === "Completed") {
  //     return item;
  //   } else {
  //     return null;
  //   }
  // });

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
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
};

export default TodoAddFeatures;
