import { useState } from "react";

const TodoList = ({ data }) => {
  const [check, setCheck] = useState(false);

  const handleChange = (id) => {
    setCheck((prev) => {});
  };

  return (
    <div className="my-4">
      {data
        ? data.map((item) => (
            <div key={item.id}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={check}
                  className="w-[50px] h-[50px] border border-black"
                  onChange={() => {
                    handleChange(item.id);
                  }}
                />
                <p className="py-[8px] px-[15px]">{item.name}</p>
              </div>
              <div className="w-[500px] flex justify-around my-4">
                <button className="w-[246px] h-[39px] border border-black">
                  Edit
                </button>
                <button className="w-[246px] h-[39px] border bg-red-500 text-white">
                  Delete
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default TodoList;
