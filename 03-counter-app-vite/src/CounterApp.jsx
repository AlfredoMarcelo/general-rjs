import React from 'react'
import { useState } from 'react'

export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    function sumar(){
        setCounter(counter + 1) 
    }

    function restar(){
        if(counter === 0)return
        setCounter(counter - 1) 
    }

    function reset(){
        setCounter(0) 
    }
    
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={sumar}>
            +1
        </button>
        <button onClick={restar}>
            -1
        </button>
        <button onClick={reset}>
            R0
        </button>
    </>
  )
}

