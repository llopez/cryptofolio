import React, { useReducer } from "react";
import Context from "./context";
import rootReducer from "../reducers";

const initialState = {
  accounts: [
    { name: 'pepe' },
    { name: 'juan' },
  ]
}

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export default StateProvider;