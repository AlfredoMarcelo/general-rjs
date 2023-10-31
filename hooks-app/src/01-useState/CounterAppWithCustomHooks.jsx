import { useCounter } from "../hooks/useCounter"

const CounterAppWithCustomHooks = () => {

    //tengo error por invocar mal una funcion

  const {counter, increment,reset, decrement} = useCounter()


  return (
    <>
        <h1>Counter Hooks {counter}</h1>
        <hr/>
        {/* cuando es una funcion con parametros, no se puede enviar el evento onClick, sino el argumento y para esto se usa la funcion de tipo flecha */}
        <button onClick={()=>increment(5)} type="button" className="btn btn-success">+1</button>
        <button onClick={reset} type="button" className="btn btn-danger">reset 0</button>
        <button onClick={()=>decrement(5)} type="button" className="btn btn-warning">-1</button>
    </>
  )
}

export default CounterAppWithCustomHooks