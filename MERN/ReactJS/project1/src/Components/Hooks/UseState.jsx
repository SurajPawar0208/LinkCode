import { useState } from "react";

export default function UseState(){
    // Hooks - UseState
    const[value,setValue]=useState(0);

    return(
    <>
    <h1>Cart Page</h1>
    <button className="b" onClick={()=>{setValue(value+1)}}>+</button>
    <b className="mx-5">{value}</b>
    <button className="bg" onClick={()=>{if(value<=0){alert ("Cart Is Empty")}else{setValue(value-1)}}}>-</button>
    </>
    )

}