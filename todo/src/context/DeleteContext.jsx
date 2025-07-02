import React, { useState } from "react";
export const DeleteContext = React.createContext();

export const Notificationprovider = ({ children }) => {
  const [note, setNote] = useState("");
  const noteShow = (msg) => {
    setNote(msg);
    setTimeout(() => {
      setNote("");
    }, "1000");
  };
  return (
    <DeleteContext.Provider value={{ noteShow, note }}>
      {children}
    </DeleteContext.Provider>
  );
};
