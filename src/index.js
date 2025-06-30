import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./Gretting";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
const root = ReactDOM.createRoot(document.getElementById("root"));

const myFunc=(event)=>{
    console.log(event.target.value)
   }
root.render(
  <>
   <TaskCard ready={false} />
   <Saludar />
   <Button text="procesar"/>
   <form onSubmit={(e)=>{
    e.preventDefault()
    console.log('enviado')
   }}>
      <h1>Register</h1>
      <button>send</button>
   </form>
  </>
);
