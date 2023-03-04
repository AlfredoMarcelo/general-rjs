import PropTypes from "prop-types"; //Importación de propTypes

export function FirstApp({title, subTitle, numeroPag}){ 
    

    //!title?console.log("no esta el title"):console.log("si esta");
    return (
        <>
        <h1>{title}</h1>
        <h3>{subTitle}</h3> 
        <h4>{"numero de pag " + numeroPag}</h4>
        </>
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