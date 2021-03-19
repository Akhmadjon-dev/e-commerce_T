import React, { createContext, useState } from "react";

const Context = createContext();

const MainData = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <Context.Provider value={[data, setData]}>{children}</Context.Provider>
  );
};

export { Context };

export default MainData;
