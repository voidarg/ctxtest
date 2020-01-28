import { useMemo } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return action.payload;
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const useMyController = dispatch => {
  return useMemo(() => {
    return {
      setValue: newValue => dispatch({ type: "UPDATE", payload: newValue }),
      increment: () => dispatch({ type: "INCREMENT" }),
      decrement: () => dispatch({ type: "DECREMENT" })
    };
  }, [dispatch]);
};

export default reducer;
