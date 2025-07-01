import { useContext, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { NotificationContext } from "../context/NotificationContext";

const TodoItem = ({ item, deleteTodo, editTodo, toggleTodoStatus }) => {
  const [title, setTitle] = useState(item.title);
  const [editable, setEditable] = useState(false);

  const { noteShow, note } = useContext(NotificationContext);

  const handleDelete = (id) => {
    deleteTodo(id);
    noteShow("Удалено");
  };
  return (
    <li>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleTodoStatus(item.id)}
          className="w-[50px] h-[40px] border border-black"
        />
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          disabled={!editable}
          className={`w-full py-[8px] px-[15px] w-[250px] mx-2 ${
            editable
              ? "bg-gray-100 cursor-not-allowed border border-gray-200"
              : "bg-white"
          }`}
        />
        <FaRegEdit
          className="w-[30px] h-[30px] cursor-pointer text-indigo-500"
          onClick={() => setEditable(true)}
        />
      </div>
      <div className="w-[500px] flex justify-around my-4">
        <button
          onClick={() => {
            editTodo(item.id, title);
            setEditable(false);
          }}
          className="w-[246px] h-[39px] border border-black"
        >
          Save
        </button>

        <button
          onClick={() => handleDelete(item.id)}
          className="w-[246px] h-[39px] border bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
