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
    )
}

export default HelloWorld;