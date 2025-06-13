import TodoItem from "../component/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id != id);
    setTodos(newTodos);
  };

  const editTodo = (id, title) => {
    const newTodos = todos.map((item) => {
      if (item.id == id) {
        return {
          id: id,
          title: title,
        };
      } else {
        return item;
      }
    });

    setTodos(newTodos);
  };

  const toggleTodoStatus = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(newTodos);
  };

  return !todos || todos.length === 0 ? (
    <p className="text-xl text-center py-6  text-[#4d4d4d]">
      Список задач пуст...
    </p>
  ) : (
    <ul className="my-4">
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleTodoStatus={toggleTodoStatus}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
