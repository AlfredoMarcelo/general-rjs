<<<<<<< HEAD
import { useState } from "react";
import "./HelloWorld.css"

function HelloWorld(){

    const [brands, setbrands] = useState(
        [{name: "rockford"}, {name: "cat"}, {name: "vans"}]
    )

    const [selectedBrand, setSelectedBrand] = useState(null)

    function handleSelectionBrand(marca){
        console.log(marca.name)
    }



    return (
        <div className="container">
            <h3 className="title">Selecciona tu marca</h3>
            <ol className="brands">
                {brands.map((marca, index)=>{
                    return (<li key={index} className="brand"> <button onClick={() => handleSelectionBrand(marca)}>{marca.name}</button></li>)
                })}
            </ol>
        </div>
=======
import PropTypes from "prop-types"; //Importación de propTypes

export function FirstApp({title, subTitle, numeroPag}){ 
    

    //!title?console.log("no esta el title"):console.log("si esta");
    return (
        <>
        <h1>{title}</h1>
        <h3>{subTitle}</h3> 
        <h4>{"numero de pag " + numeroPag}</h4>
        </>
>>>>>>> 84471b311fa1c641ccc8693acdbfc3b6e221381b
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

//Asi se define los defaultProps para los props 
//declarados en el componente. Estos serán si el padre no envía
FirstApp.defaultProps = {
    title: "titulo de prueba",
    subTitle: 2
}