import React from "react";

const Visualizar = (arreglo) => {
  const listaOBJ = arreglo.arreglo;
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
