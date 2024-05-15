import React, { useContext } from 'react';

const MyContext = React.createContext();

export const ComponentB = ()=> {
    const value = useContext(MyContext);
    
    return (
       <p>{value}</p>
    );
  }