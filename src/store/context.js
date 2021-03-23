import React, { createContext, useState } from "react";

const Context = createContext();

const MainData = ({ children }) => {
  const [context, setContext] = useState([]);
  const decrement = (id) => {
    const updated = context.find((item) => item.id === id);
    updated.size -= 1;
    let index = context.indexOf(updated);
    const result = context.splice(index, 1, updated);
    // setdata()
    // setdata(data)
    console.log(result, updated, index, "yyyooooo");
  };
  return (
    <Context.Provider value={{ context, setContext, decrement }}>
      {children}
    </Context.Provider>
  );
};

export { Context };

export default MainData;
