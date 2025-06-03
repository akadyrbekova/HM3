import { useState } from "react";
import TodoList from "./TodoList";

const TodoAdd = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "first",
    },
    {
      id: 2,
      title: "second",
    },
  ]);

  return (
    <>
      <form className="flex flex-col items-center">
        <h6 className="text-3xl font-bold text-[#4d4d4d] w-[600px] h-[50px] text-center">
          TodoMatic
        </h6>
        <p className="text-[#4d4d4d] text-base py-2 px-1">
          What needs to be done?
        </p>
        <input className="w-[600px] h-[70px] border border-black py-2 px-5" />
        <button
          type="submit"
          className="w-[600px] h-[45px] bg-black text-white my-2 mx-1"
        >
          Add
        </button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoAdd;
