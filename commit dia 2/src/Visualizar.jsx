import React from "react";

//CAMBIAR A BOTONES QUE UPDATEEN LA TABLA CON LOS DATOS QUE ESTOS MUESTREN
//AL PRESIONAR CADA BOTON DEBEN GENERAR UN INPUT QUE FILTRE POR LO QUE HAGA EL BOTON
//ADICIONAL AGREGAR BOTON PARA VER TODA LA TABLA

const Visualizar = () => {
  const listaOBJ = JSON.parse(localStorage.getItem("paises"));
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
            </tr>
          </thead>
          <tbody>
            {
            listaOBJ.map((i) => (
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
