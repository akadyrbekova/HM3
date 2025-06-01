import { useState } from "react";

const TodoList = ({ data }) => {
  console.log(data);

  const [check, setCheck] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [todos, setTodos] = useState(data);
  const handleChange = (id) => {
    setCheck(!check);
    setItemId(id);
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((item) => id));
  };

  return (
    <div className="my-4">
      {!data || data.length == 0 ? (
        <p>Список пуст...</p>
      ) : (
        data.map((item) => {
          const className = check && itemId === item.id ? "line-through" : null;
          return (
            <div key={item.id}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={check && itemId === item.id}
                  className="w-[50px] h-[50px] border border-black"
                  onChange={() => {
                    handleChange(item.id);
                  }}
                />
                <p className={`py-[8px] px-[15px] ${className}`}>{item.name}</p>
              </div>
              <div className="w-[500px] flex justify-around my-4">
                <button
                  type="submit"
                  className="w-[246px] h-[39px] border border-black"
                >
                  Edit
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
            </div>
          );
        })
      )}
    </div>
  );
};

export default TodoList;
