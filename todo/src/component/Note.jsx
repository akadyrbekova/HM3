import { useContext } from "react";
import { DeleteContext } from "../context/DeleteContext";

const Note = () => {
  const { note } = useContext(DeleteContext);
  return (
    <div className="flex justify-end">
      {note && (
        <div className="bg-red-400 text-white px-5 py-3 rounded-md shadow-md text-base w-[320px]">
          {note}
        </div>
      )}
    </div>
  );
};

export default Note;
