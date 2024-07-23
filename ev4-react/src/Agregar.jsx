import React, { useState } from 'react';

//FALTA VALIDACIONES!!!!!!!!

const Agregar = () => {
  //Declaracion de variables
  const [pais, setPais] = useState("");
  const [capital, setCapital] = useState("");
  const [idioma, setIdioma] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [moneda, setMoneda] = useState("");
  const listaObjetos = JSON.parse(localStorage.getItem("paises"))
  let largo = listaObjetos.length;

  //Crear una constante que tome la id del ultimo objeto
  //Crear constante que asigne id en base a la id anterior

  //Controlador del boton
  const controladorBtn = () => {
    largo++
    const datosObjeto = {
      id: largo,
      nombre: pais,
      capital: capital,
      datos:{
        idioma: idioma,
        poblacion: poblacion,
        moneda: moneda
      }
    }
    listaObjetos.push(datosObjeto)
    localStorage.setItem("paises", JSON.stringify(listaObjetos))
    setPais("")
    setCapital("")
    setIdioma("")
    setPoblacion("")
    setMoneda("")
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2>Agregar</h2>
          <form action="">
            <div className='col-12 mb-2'>
              <label htmlFor="nombrePais" className='form-label'>Pais</label>
              <input type="text" id='nombrePais' className='form-control' value={pais} onChange={(event)=>{setPais(event.target.value)}}/>
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor="Capital" className='form-label'>Capital</label>
              <input type="text" id='Capital' className='form-control' value={capital} onChange={(event)=>{setCapital(event.target.value)}}/>
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor="Idioma" className='form-label'>Idioma</label>
              <input type="text" id='Idioma' className='form-control' value={idioma} onChange={(event)=>{setIdioma(event.target.value)}}/>
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor="Poblacion" className='form-label'>Poblacion</label>
              <input type="text" id='Poblacion' className='form-control' value={poblacion} onChange={(event)=>{setPoblacion(event.target.value)}}/>
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor="Moneda" className='form-label'>Moneda</label>
              <input type="text" className='form-control' id='Moneda' value={moneda} onChange={(event)=>{setMoneda(event.target.value)}}/>
            </div>
            <div className='col-12 mb-2'>
              <button type="button" className='btn btn-primary' onClick={controladorBtn}>Guardar</button>
            </div>
          </form>
        </div> 
      </div>
    </div>
  )
}

export default Agregar