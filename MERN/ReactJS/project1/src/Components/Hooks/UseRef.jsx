import {  useRef, useState } from "react";
import './UseRef.css'

export default function UseRef(){
    const[name,setName]=useState("");
    let ref=useRef();
    let n=useRef();

    function handleSubmit(){
        const username = ref.current.value;
        const password = n.current.value;
        
        if (username === "admin" && password === "admin123") {
            alert("Login successful!");
            setName(`Hello ${username}`);
            } else {
            alert("Enter Valid Details");
        }
    }
    return (
        <>
        <form className="box1">
        <h1>Login Form</h1>
        <input type="text" ref={ref} id="username" placeholder="Enter Name" />  
        <input type="password" ref={n} id="password" placeholder="Password"/>
        <button type="button" onClick={handleSubmit}>Submit</button>
        </form> 
        <h1 className="h">{name}</h1>
        </>
    )
}