import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  return (
    <div>
      <h1>hola mark</h1>
      <p>biltrumita</p>
    </div>
  );
}
root.render(
  <div>
    <Greeting />
    <Greeting />
  </div>
);
