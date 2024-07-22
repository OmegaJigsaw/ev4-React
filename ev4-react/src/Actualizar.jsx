import React, { useState } from 'react'

const Actualizar = () => {
  const [listaOBJ, setListaOBJ] = useState(
    JSON.parse(localStorage.getItem("paises") || [])
  );
  const onClickUpdate = ()=>{
    
  }
  return (
    <div className="container">
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>CAPITAL</th>
              <th>POBLACION</th>
              <th>IDIOMA</th>
              <th>MONEDA</th>
              <th>ACCION</th>
            </tr>
          </thead>
          <tbody>
            {listaOBJ.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.nombre}</td>
                <td>{i.capital}</td>
                <td>{i.datos.poblacion}</td>
                <td>{i.datos.idioma}</td>
                <td>{i.datos.moneda}</td>
                <td>
                  {/* boton eliminar con value que se extrae en la funcion */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onClickUpdate}
                    value={i.id}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Actualizar