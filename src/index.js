import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./Gretting";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <UserCard 
        name="Malcom"
        amount={10}
        married={true}
        address={{city:'new york',
                  street:'street 1'  
        }}
        greet={function(){alert('myAlert')}}
    />
  </>
);
