import React from 'react'
import { useEffect } from "react";

export default function ViewResult() {
    useEffect(() => { 
        const id=localStorage.getItem("id")
        if(!id){
            window.location.href = "http://localhost:3000/";
        }}, [])
  return (
    <div>ViewResult</div>
  )
}
