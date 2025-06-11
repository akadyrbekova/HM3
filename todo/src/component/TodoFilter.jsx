import Button from "../ui/Button";

const TodoFilter = ({ setStatus }) => {
  return (
    <div className="flex justify-between w-[500px] h-[39px] m-auto">
      <Button onClick={() => setStatus("All")}>All</Button>
      <Button onClick={() => setStatus("Active")}>Active</Button>
      <Button onClick={() => setStatus("Completed")}>Completed</Button>
    </div>
  );
};

export default TodoFilter;
