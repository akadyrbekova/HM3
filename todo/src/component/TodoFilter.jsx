import Button from "../ui/Button";

const TodoFilter = () => {
  return (
    <div className="flex justify-between w-[500px] h-[39px] m-auto">
      <Button all={"All"} />
      <Button active={"Active"} />
      <Button completed={"Completed"} />
    </div>
  );
};

export default TodoFilter;
