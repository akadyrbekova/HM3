import TodoAddFeatures from "../features/TodoAdd";
import TodoAdd from "./TodoAdd";
import TodoFilter from "./TodoFilter";

const Form = () => {
  return (
    <form className="w-[600px] flex flex-col  items-center">
      <TodoAdd />
      <TodoFilter />
      <TodoAddFeatures />
      {/* <TodoList /> */}
    </form>
  );
};

export default Form;
