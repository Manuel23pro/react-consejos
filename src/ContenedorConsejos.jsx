import React from 'react';
import './CSS/App.css';
import { useEffect,useState } from 'react';

const ContenedorConsejos = () => {
  

let estado = {
    slip:{
        id: 40,
        advice: 'Si no pides, no recibes.'
    }
}

   

    const [apiData, setapiData] = useState(estado)
    
    console.log(apiData)

        const data =  async () =>{
            let datos = await fetch('https://api.adviceslip.com/advice');
            let respuesta = await datos.json();
          setapiData(respuesta)
           
           
        }



    return (
    <div className='contenedor'>

        <div className='contenido'>
            <div className='titulo_principal'>
            <span>advice</span>
            <span className='id'>#{apiData.slip.id}</span>
            </div>
            <div className='main'>
            <p className='parrafo'>{apiData.slip.advice}</p>
            </div>
                <button className='boton'onClick={data}>Generar Consejo</button>
        </div>
    </div>
)
}

export default ContenedorConsejos