import React, { useReducer } from "react";
import Context from "./context";
import rootReducer from "../reducers";

const initialState = {
  accounts: []
}

const withCache = reducer => {
  return (state, action) => {
    const newState = reducer(state, action);
    localStorage.setItem("my-state", JSON.stringify(newState));
    return newState;
  }
};

const getStateFromCache = () => JSON.parse(localStorage.getItem('my-state')) || initialState;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(withCache(rootReducer), getStateFromCache());

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export default StateProvider;