import { useState } from "react";

const TodoItem = ({ item }) => {
  const [check, setCheked] = useState(false);
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
        <p className={`py-[8px] px-[15px] ${check ? "line-through" : ""} `}>
          {item.title}
        </p>
      </div>
      <div className="w-[500px] flex justify-around my-4">
        <button
          type="submit"
          className="w-[246px] h-[39px] border border-black"
        >
          Edit
        </button>
        <button className="w-[246px] h-[39px] border bg-red-500 text-white">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
