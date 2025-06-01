import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoAdd = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const AddTodo = (event) => {
    event.preventDefault();
    if (!value.trim()) return;

    const newTodo = {
      id: Date.now(),
      name: value.trim(),
      status: false,
    };

    setTodo((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="flex flex-col items-center">
      <h6 className="text-3xl font-bold text-[#4d4d4d] w-[600px] h-[50px] text-center">
        TodoMatic
      </h6>
      <p className="text-[#4d4d4d] text-base py-2 px-1">
        What needs to be done?
      </p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[600px] h-[70px] border border-black py-2 px-5"
      />
      <button
        type="submit"
        onClick={AddTodo}
        className="w-[600px] h-[45px] bg-black text-white my-2 mx-1"
      >
        Add
      </button>
      <TodoList data={todo} />
    </div>
  );
};

export default TodoAdd;
