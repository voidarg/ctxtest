import React from "react";
import { useMyContext } from "./MyContext";

const MyComponent = () => {
  const { data, controller } = useMyContext();

  return (
    <div>
      <h2>{`VAL: ${data}`} </h2>
      <button onClick={controller.increment}>INCREMENT</button>
      <button onClick={controller.decrement}>DECREMENT</button>
    </div>
  );
};

export default MyComponent;
