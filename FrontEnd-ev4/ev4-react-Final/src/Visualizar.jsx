import React, { useState } from "react";

const Visualizar = () => {
  //Declaracion de variables
  const locals = JSON.parse(localStorage.getItem("paises")) || [];
  const [listaOBJ, setLista] = useState([]);
  const [visible, setVisible] = useState(false);
  const [objBuscado, setObjeto] = useState("");

  //Funcione de vista global
  const MostrarTodo = () => {
    setVisible(false);
    setLista(locals);
  };
  
  //Funcion de vista bloque nombre
  const MostrarNombre = () => {
    setVisible(true);
  };

  //Funcion de busqueda dentro del bloque nombre
  const Buscador = () => {
    for (let i = 0; i < listaOBJ.length; i++) {
      const nuevaLista = [];
      if (listaOBJ[i].nombre === objBuscado) {
        nuevaLista.push(listaOBJ[i]);
        setLista(nuevaLista);
      }
    }
  };

  return (
    <div className="container">
      <div className="col-12">
        <ul className="nav">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary"
              onClick={MostrarTodo}
            >
              Buscar Todo
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary"
              onClick={MostrarNombre}
            >
              Buscar por Nombre
            </button>
          </li>
        </ul>
      </div>
      <div className="row">
        {/* 
        Crear el bloque de codigo html dentro de llaves para programar su aparicion arriba 
        mediante un "if abreviado" que revisa si la variable visible es true o false para mostrar el bloque
        */}
        {visible && (
          <div className="col-12 mt-3" id="InputDiv">
            <label className="form-label" htmlFor="nameFinder">
              Nombre
            </label>
            <input
              className="form-control"
              type="text"
              value={objBuscado}
              onChange={(event) => {
                setObjeto(event.target.value);
              }}
              id="nameFinder"
              placeholder="Ingrese Nombre a Buscar"
            />
            <div className="col mt-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={Buscador}
              >
                Buscar
              </button>
            </div>
          </div>
        )}
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>CAPITAL</th>
              <th>POBLACION</th>
              <th>IDIOMA</th>
              <th>MONEDA</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Visualizar;
