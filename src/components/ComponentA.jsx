import React, { useContext } from 'react';
import { ComponentB } from './ComponentB';
const MyContext = React.createContext();

export const ComponentA = ()=> {
    const value = useContext(MyContext);
    
    return (
      <div>
        <p>{value}</p>
        <ComponentB />
      </div>
    );
  }