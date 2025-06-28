const useEditTodo = (todos, setTodos) => {
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
      .then((res) => res.json())
      .then(() => {
        const newTodos = todos.map((item) =>
          item.id === id ? { ...item, title: newTitle } : item
        );
        setTodos(newTodos);
      })
      .catch((error) => console.error("Ошибка:", error));
  };

  return { toggleTodoStatus, editTodo };
};

export default useEditTodo;
