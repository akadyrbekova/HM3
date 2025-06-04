import TodoItem from "../component/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return !todos || todos.length === 0 ? (
    <p className="text-base text-[#4d4d4d]">Список задач пуст</p>
  ) : (
    <ul className="my-4">
      {todos.map((item) => {
        console.log(item);
        return <TodoItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default TodoList;
