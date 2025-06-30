import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./Gretting";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
   <TaskCard ready={false} />
   <Saludar />
  </>
);
