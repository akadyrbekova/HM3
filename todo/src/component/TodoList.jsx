const TodoList = () => {
  return (
    <div className="my-4">
      <div className="flex justify-content ">
        <input
          type="check"
          className="w-[50px] h-[50px] border border-black"
        ></input>
        <p className="py-[8px] px-[15px]">Eat</p>
      </div>
      <div className="w-[500px] flex justify-around my-4">
        <button className="w-[246px] h-[39px] border border-black">Edit</button>
        <button className="w-[246px] h-[39px] border bg-red-500 text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoList;
