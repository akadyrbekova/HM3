import TodoAdd from "./TodoAdd";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

const Form = () => {
  return (
    <form className="w-[600px] flex flex-col  items-center">
      <TodoAdd />
      <TodoFilter />
      <TodoList />
    </form>
  );
};

export default Form;
