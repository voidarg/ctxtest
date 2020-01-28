import React from "react";
import "./styles.css";
import MyContext from "./MyContext";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <MyContext value={0}>
        <MyComponent />
      </MyContext>
    </div>
  );
}
