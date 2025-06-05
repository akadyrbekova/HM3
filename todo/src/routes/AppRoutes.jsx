import { Route, Routes } from "react-router-dom";
import Todo from "../pages/Todo";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Главная страница
      </Route>
      <Route path="/todo" element={<Todo />}>
        Todo
      </Route>
    </Routes>
  );
};

export default AppRoutes;
