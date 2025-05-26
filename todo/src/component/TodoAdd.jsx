const TodoAdd = () => {
  return (
    <div className="flex flex-col  items-center">
      <h6 className="text-3xl font-bold text-[#4d4d4d] w-[600px] h-[50px] text-center">
        TodoMatic
      </h6>
      <p className="text-[#4d4d4d] text-base py-2 px-1">
        What needs to be done?
      </p>
      <input className="w-[600px] h-[70px] border border-black py-2 px-1"></input>
      <button className="w-[600px] h-[45px] bg-black text-white my-2 mx-1">
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
