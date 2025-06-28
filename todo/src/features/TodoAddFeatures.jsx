import TodoAdd from "../component/TodoAdd";
import TodoList from "../component/TodoList";
import TodoFilterFeatures from "./TodoFilterFeatures";
import useTodo from "../hooks/useTodo";
const TodoAddFeatures = () => {
  const {
    todoValue,
    setTodoValue,
    todos,
    setTodos,
    addTodo,
    filteredTodos,
    setStatus,
  } = useTodo();

  return (
    <div className="flex flex-col">
      <TodoAdd
        AddTodo={addTodo}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoFilterFeatures setStatus={setStatus} />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
};

export default TodoAddFeatures;
