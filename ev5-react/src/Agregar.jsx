import React from 'react'

const Agregar = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2>Agregar</h2>
          <form action="">
            <div className='col-12 mb-2'>
              <label htmlFor="nombrePais" className='form-label'>Pais</label>
              <input type="text" id='nombrePais' className='form-control'/>
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor="Capital" className='form-label'>Capital</label>
              <input type="text" id='Capital' className='form-control'/>
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor="Idioma" className='form-label'>Idioma</label>
              <input type="text" id='Idioma' className='form-control'/>
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor="Poblacion" className='form-label'>Poblacion</label>
              <input type="text" id='Poblacion' className='form-control'/>
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor="Moneda" className='form-label'>Moneda</label>
              <input type="text" className='form-control' id='Moneda'/>
            </div>
            <div className='col-12 mb-2'>
              <button type="button" className='btn btn-primary'>Guardar</button>
            </div>
          </form>
        </div> 
      </div>
    </div>
  )
}

export default Agregar