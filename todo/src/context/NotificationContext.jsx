import React, { useState } from "react";
export const NotificationContext = React.createContext();

export const Notificationprovider = ({ children }) => {
  const [note, setNote] = useState("");
  const noteShow = (msg) => {
    setNote(msg);
    setTimeout(() => {
      setNote("");
    }, "1000");
  };
  return (
    <NotificationContext.Provider value={{ noteShow, note }}>
      {children}
    </NotificationContext.Provider>
  );
};
