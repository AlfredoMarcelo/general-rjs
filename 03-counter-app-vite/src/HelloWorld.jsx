import "./index.css"; 

let getNombre =()=>{
    let nombre = "Marcelo"
    return nombre;
}

export function FirstApp(){ 

    return (
        <>
        <h1>{getNombre()}</h1>
        <h3>Este es el subtitulo</h3> 
        </>
    )
}