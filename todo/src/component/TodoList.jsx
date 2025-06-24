import TodoItem from "../component/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    fetch(`https://todo.roboto.kz/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("Удалено:", data))
      .catch((error) => console.error("Ошибка при удалении:", error));
  };

  const toggleTodoStatus = (id) => {
    const todo = todos.find((item) => item.id === id);
    if (!todo) return;

    const updatedStatus = !todo.completed;

    fetch(`https://todo.roboto.kz/todo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: todo.title,
        completed: updatedStatus,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        const newTodos = todos.map((item) =>
          item.id === id ? { ...item, completed: updatedStatus } : item
        );
        setTodos(newTodos);
      })
      .catch((error) => console.error("Ошибка:", error));
  };

  const editTodo = (id, newTitle) => {
    const todo = todos.find((item) => item.id === id);
    if (!todo) return;

    fetch(`https://todo.roboto.kz/todo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle,
        completed: todo.completed,
      }),
    })
      .then(async (res) => await res.json())
      .then(() => {
        const newTodos = todos.map((item) =>
          item.id === id ? { ...item, title: newTitle } : item
        );
        console.log(newTodos, 9999999999999999);
        setTodos([...newTodos]);
      })
      .catch((error) => console.error("Ошибка:", error));
  };

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
