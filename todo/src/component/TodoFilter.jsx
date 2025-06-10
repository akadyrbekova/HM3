import Button from "../ui/Button";

const TodoFilter = ({ filterTodo }) => {
  return (
    <div className="flex justify-between w-[500px] h-[39px] m-auto">
      <Button onClick={() => filterTodo("All")}>All</Button>
      <Button onClick={() => filterTodo("Active")}>Active</Button>
      <Button onClick={() => filterTodo("Completed")}>Completed</Button>
    </div>
  );
};

export default TodoFilter;
