import React, { useEffect, useState } from "react";

const Actualizar = () => {
  //Arreglo del localStorage
  const [listaOBJ, setListaOBJ] = useState(
    JSON.parse(localStorage.getItem("paises") || [])
  );

  //Manejo del estado de la vista
  const [vistaEdit, setVista] = useState(false);

  //Variables de los datos del objeto
  const [id_objeto, setID] = useState("");
  const [pais, setPais] = useState("");
  const [capital, setCapital] = useState("");
  const [idioma, setIdioma] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [moneda, setMoneda] = useState("");

  //Variables de validacion
  const [campoPais, setErroP] = useState(true);
  const [campoCapital, setErrorC] = useState(true);
  const [campoIdioma, setErrorI] = useState(true);
  const [campoPoblacion, setErrorPob] = useState(true);
  const [campoMoneda, setErrorM] = useState(true);

  const escribiendo = () => {
    if (pais.trim() !== "") {
      setErroP(false);
    }
    if (capital.trim() !== "") {
      setErrorC(false);
    }
    if (idioma.trim() !== "") {
      setErrorI(false);
    }
    if (poblacion.trim() !== "") {
      setErrorPob(false);
    }
    if (moneda.trim() !== "") {
      setErrorM(false);
    }
  };

  const cambioVista = (event) => {
    setID(parseInt(event.target.value));
    setVista(true);
  };

  /*
   *Este useEffect se asegura que id_objeto llegue con un valor al quererse manejar
   *este valor viene dado del value que tenia el btn que gatillo el evento anterior
   */

  useEffect(() => {
    if (id_objeto !== "") {
      for (let i = 0; i < listaOBJ.length; i++) {
        if (listaOBJ[i].id === id_objeto) {
          setPais(listaOBJ[i].nombre);
          setCapital(listaOBJ[i].capital);
          setIdioma(listaOBJ[i].datos.idioma);
          setPoblacion(listaOBJ[i].datos.poblacion);
          setMoneda(listaOBJ[i].datos.moneda);
          break;
        }
      }
    }
  }, [id_objeto]);

  //Controlador del boton de guardar la edicion
  const controladorBtn = () => {
    let existeError = false;
    //Sucesion de if que validan que cada campo este rellenado
    if (pais.trim() === "") {
      setErroP(true);
      existeError = true;
    }

    if (capital.trim() === "") {
      setErrorC(true);
      existeError = true;
    }
    if (idioma.trim() === "") {
      setErrorI(true);
      existeError = true;
    }
    if (poblacion.trim() === "") {
      setErrorPob(true);
      existeError = true;
    }
    if (moneda.trim() === "") {
      setErrorM(true);
      existeError = true;
    }
    if (!existeError) {
      const datosNuevos = {
        id: id_objeto,
        nombre: pais,
        capital: capital,
        datos: {
          idioma: idioma,
          poblacion: poblacion,
          moneda: moneda,
        },
      };
      const listaNueva = [];
      listaOBJ.forEach((i) => {
        if (i.id === id_objeto) {
          listaNueva.push(datosNuevos);
        } else {
          listaNueva.push(i);
        }
      });
      localStorage.setItem("paises", JSON.stringify(listaNueva));
      setListaOBJ(JSON.parse(localStorage.getItem("paises")));
      setVista(false);
    }
  };

  return (
    <div className="container">
      {/* Operador ternario para realizar un cambio de vista anidadas dentro del componente */}
      {/* Vista de entrada al componente */}
      {vistaEdit !== true ? (
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
                      onClick={cambioVista}
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
      ) : (
        // Vista de edicion
        <div className="row">
          <div className="col-12">
            <h2>Editar</h2>
            <form action="">
              <div className="col-12 mb-2">
                <label htmlFor="nombrePais" className="form-label">
                  Pais
                </label>
                <input
                  type="text"
                  id="nombrePais"
                  className="form-control"
                  value={pais}
                  onInput={escribiendo}
                  onChange={(event) => {
                    setPais(event.target.value);
                  }}
                />
                {campoPais && (
                  <span className="text-danger">Campo pais obligatorio y no debe ser uno ya existente</span>
                )}
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="Capital" className="form-label">
                  Capital
                </label>
                <input
                  type="text"
                  id="Capital"
                  className="form-control"
                  value={capital}
                  onInput={escribiendo}
                  onChange={(event) => {
                    setCapital(event.target.value);
                  }}
                />
                {campoCapital && (
                  <span className="text-danger">Campo capital obligatorio</span>
                )}
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="Idioma" className="form-label">
                  Idioma
                </label>
                <input
                  type="text"
                  id="Idioma"
                  className="form-control"
                  value={idioma}
                  onInput={escribiendo}
                  onChange={(event) => {
                    setIdioma(event.target.value);
                  }}
                />
                {campoIdioma && (
                  <span className="text-danger">Campo idioma obligatorio</span>
                )}
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="Poblacion" className="form-label">
                  Poblacion
                </label>
                <input
                  type="text"
                  id="Poblacion"
                  className="form-control"
                  value={poblacion}
                  onInput={escribiendo}
                  onChange={(event) => {
                    setPoblacion(event.target.value);
                  }}
                />
                {campoPoblacion && (
                  <span className="text-danger">Campo poblacion obligatorio</span>
                )}
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="Moneda" className="form-label">
                  Moneda
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Moneda"
                  value={moneda}
                  onInput={escribiendo}
                  onChange={(event) => {
                    setMoneda(event.target.value);
                  }}
                />
                {campoMoneda && (
                  <span className="text-danger">Campo moneda obligatorio</span>
                )}
              </div>
              <div className="col-12 mb-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={controladorBtn}
                >
                  Guardar Cambios
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setVista(false);
                  }}
                >
                  Regresar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Actualizar;
