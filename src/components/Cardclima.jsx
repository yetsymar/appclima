
import React from "react";



const Cardclima = ({data}) => {
    console.log(data)
    let image = 
    data.temp <= 0 ?'muy-frio.png':
    data.temp >= 1 && data.temp <= 15 ? 'frio.png':
    data.temp >= 16 && data.temp <= 25 ? 'templado.png':
    data.temp > 25 ? 'caliente.png': ''


    return (
    <div className="cardInfo">
    <h2>Ciudad:{data.city}</h2>
    <h4>Pais:{data.country}</h4>
    <h5>Temperatura:{data.temp}</h5>
    <img src={`./image/imagenes/${image}`} alt="imagen-clima" />
    
    
    </div>
    )
}

export default Cardclima;
