import {useContext , createContext } from "react";

let c=createContext();

export default function UseContext() {
    let a = 10;
  return <c.Provider value={a}>
  <S/>
</c.Provider>
}

function S(){
  return <K/>
}

function K(){
    let b=useContext(c);
    return <h1>{b}</h1>
}

