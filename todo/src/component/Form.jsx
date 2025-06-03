import TodoAddFeatures from "../features/TodoAdd";
import TodoAdd from "./TodoAdd";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

const Form = () => {
  return (
    <div className="w-[600px] flex flex-col  items-center">
      <TodoAdd />
      <TodoFilter />
      <TodoList />
    </div>
  );
};

export default Form;
