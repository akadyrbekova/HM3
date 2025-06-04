const TodoItem = ({ item }) => {
  return (
    <li>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-[50px] h-[50px] border border-black"
        />
        <p className="py-[8px] px-[15px]">{item.title}</p>
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
