import TodoList from "../component/TodoList";
let todos = [
  {
    id: 1,
    name: "Learn Js",
    status: true,
  },
  {
    id: 2,
    name: "Learn React",
    status: false,
  },
  {
    id: 3,
    name: "Learn Node.js",
    status: false,
  },
  {
    id: 4,
    name: "Learn Vue",
    status: false,
  },
];

const TodoAddFeatures = () => {
  return (
    <>
      <TodoList data={todos} />
    </>
  );
};

export default TodoAddFeatures;
