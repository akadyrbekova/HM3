import TodoItem from "../component/TodoItem";
import useTodo from "../hooks/useTodo";
import useEdit from "../hooks/useEdit";

const TodoList = () => {
  const { todos, setTodos, deleteTodo } = useTodo();
  const { toggleTodoStatus, editTodo } = useEdit(todos, setTodos);

  return !todos || todos.length === 0 ? (
    <p className="text-xl text-center py-6 text-[#4d4d4d]">
      Список задач пуст...
    </p>
  ) : (
    <ul className="my-4">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodoStatus={toggleTodoStatus}
        />
      ))}
    </ul>
  );
};

export default TodoList;
