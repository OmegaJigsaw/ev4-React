import React, { useEffect, useState } from "react";

const Eliminar = () => {
  //Variables
  const [listaOBJ, setListaOBJ] = useState(
    JSON.parse(localStorage.getItem("paises") || [])
  );

  //useEffect para actualizar en cada eliminacion
  useEffect(() => {
    localStorage.setItem("paises", JSON.stringify(listaOBJ));
  }, [listaOBJ]);

  //Funcion para eliminar
  const onClickDelete = (event) => {
    //Se toma el id del boton sacado del value y se transforma a numero
    const id_boton = parseInt(event.target.value);
    //Crear lista que guarda los valores nuevos luego de elegir cual eliminar
    const nuevaLista = [];
    //Ciclo iterativo que recorre en base al largo del arreglo del localstorage
    for (let i = 0; i < listaOBJ.length; i++) {
      //if que filtra que se agrege solo los datos que no coincidan con la id del boton
      if (listaOBJ[i].id !== id_boton) {
        //push a la lista nueva en base al objeto entero
        nuevaLista.push(listaOBJ[i]);
      }
    }
    //Update a la lista que fuerza el update al localStorage
    setListaOBJ(nuevaLista);
  };
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
                    className="btn btn-danger"
                    onClick={onClickDelete}
                    value={i.id}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eliminar;
