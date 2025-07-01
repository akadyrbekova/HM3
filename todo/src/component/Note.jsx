import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const Note = () => {
  const { note } = useContext(NotificationContext);
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
