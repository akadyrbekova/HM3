import { useState, useEffect } from "react";

const useFilter = (todos) => {
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filtered = todos.filter((item) => {
      if (status === "All") return true;
      if (status === "Active") return item.completed === false;
      if (status === "Completed") return item.completed === true;
    });
    setFilteredTodos(filtered);
  }, [status, todos]);

  useEffect(() => {
    console.log("filteredTodos в useFilter:", filteredTodos);
  }, [filteredTodos]);
  return { filteredTodos, status, setStatus };
};
export default useFilter;
