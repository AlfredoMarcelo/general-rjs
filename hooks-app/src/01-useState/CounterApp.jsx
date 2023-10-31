import { useState } from 'react';

const CounterApp = () => {
    const [contadores, setContadores] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
    const {counter1, counter2, counter3} = contadores
    function aumentar(){
        setContadores({
            ...contadores,
            counter1: counter1 + 1
        })
    }
  return (
    <>
        <h1>Counter {counter1}</h1>
        <h1>Counter {counter2}</h1>
        <h1>Counter {counter3}</h1>
        <hr/>
        <button type="button" className="btn btn-success" onClick={aumentar}>aumentar 1</button>
    </>
  )
}

export default CounterApp