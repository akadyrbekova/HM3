import { useState } from "react";

const TodoItem = ({ item, deleteTodo, editTodo }) => {
  const [check, setCheked] = useState(false);
  const [title, setTitle] = useState(item.title);

  const onCheked = () => {
    setCheked(!check);
  };

  return (
    <li>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={check}
          onChange={onCheked}
          className="w-[50px] h-[50px] border border-black"
        />
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className={`py-[8px] px-[15px] ${check ? "line-through" : ""} `}
        />
      </div>
      <div className="w-[500px] flex justify-around my-4">
        <button
          onClick={() => {
            editTodo(item.id, title);
          }}
          className="w-[246px] h-[39px] border border-black"
        >
          Save
        </button>
        <button
          onClick={() => {
            deleteTodo(item.id);
          }}
          className="w-[246px] h-[39px] border bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
