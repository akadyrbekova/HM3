import TodoItem from "../component/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return !todos || todos.length == 0 ? null : (
    <ul className="my-4">
      {todos.map((item) => {
        console.log(item);
        return <TodoItem item={item} />;
      })}
    </ul>
  );
};

export default TodoList;
