const TodoList = ({ check, setCheck, data }) => {
  return (
    <div className="my-4">
      {/* {data.map((item) => (
        <div key={item.id}>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-[50px] h-[50px] border border-black"
              checked={check}
              onChange={() => setCheck(!check)}
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
      ))} */}
    </div>
  );
};

export default TodoList;
