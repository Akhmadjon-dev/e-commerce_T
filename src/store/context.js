import React, { createContext, useState } from "react";

const Context = createContext();

const MainData = ({ children }) => {
  const [context, setContext] = useState([]);

  const decrement = (id) => {
    const updated = context.find((item) => item.id === id);
    let result = [...context];
    updated.size -= 1;
    let index = result.indexOf(updated);
    result.splice(index, 1, updated);
    setContext(result);
  };

  return (
    <Context.Provider value={{ context, setContext, decrement }}>
      {children}
    </Context.Provider>
  );
};

export { Context };

export default MainData;
