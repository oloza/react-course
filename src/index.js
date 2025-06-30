import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./Gretting";
import { Button } from "./Button";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <Button text="click me"/> 
    <Button text="pay"/> 
    <Button name="register"/> 
     {/* <UserCard 
        name="Malcom"
        amount={10}
        married={true}
        address={{city:'new york',
                  street:'street 1'  
        }}
        greet={function(){alert('myAlert')}}
    /> */}
  
  </>
);
