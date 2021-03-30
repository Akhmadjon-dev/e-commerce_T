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
  const addProduct = (data) => {
    const res = context.find((i) => i.id === data.id);
    if (res) {
      const index = context.indexOf(res);
      res.size++;
      const result = [...context];
      result.splice(index, 1, res);
      setContext(result);
    } else {
      setContext([...context, data]);
    }
  };

  return (
    <Context.Provider value={{ context, setContext, addProduct, decrement }}>
      {children}
    </Context.Provider>
  );
};

export { Context };

export default MainData;
