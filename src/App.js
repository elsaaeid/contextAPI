import React from "react";
import "./App.css";
import { ComponentA } from "./components/ComponentA";

export const App = ()=>{
  const sharedData = "Hello, React Context!";
  return(
    <div className="p-5 app flex flex-col justify-center items-center">
        <MyContext.Provider value={sharedData}>
          <ComponentA />
        </MyContext.Provider>
    </div>
  )
}