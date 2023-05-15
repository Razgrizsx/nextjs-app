"use client"
import { useState } from "react";

export default function Contador(){
    const [cont, setCont] = useState(0)

    return (
        <div>
            <p>Count: {cont}</p>
            <button onClick={() => setCont(cont + 1)}>Increment</button>
        </div>
    )
}