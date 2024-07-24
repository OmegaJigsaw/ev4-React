import React, { useEffect, useState } from "react";

const Agregar = () => {
  //Variables de setting
  const [pais, setPais] = useState("");
  const [capital, setCapital] = useState("");
  const [idioma, setIdioma] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [moneda, setMoneda] = useState("");
  const [listaObjetos, setLista] = useState(JSON.parse(localStorage.getItem("paises")) || [])

  //Variables de validaciones
  const [campoPais, setErroP] = useState(false);
  const [campoCapital, setErrorC] = useState(false);
  const [campoIdioma, setErrorI] = useState(false);
  const [campoPoblacion, setErrorPob] = useState(false);
  const [campoMoneda, setErrorM] = useState(false);

  //LocalStorage
  //useEffect para la carga inicial
  useEffect(()=>{
    setLista(JSON.parse(localStorage.getItem("paises")) || [])
  },[])

  //useEffect para cada actualizacion de datos
  useEffect(()=>{
    localStorage.setItem("paises", JSON.stringify(listaObjetos))
  },[listaObjetos])

  //Funcion onInput que desactiva el mensaje de error cuando se comienza a escribir en el input
  const escribiendo = ()=>{
    if (pais.trim() !== ""){setErroP(false)};
    if (capital.trim() !== ""){setErrorC(false)};
    if (idioma.trim() !== ""){setErrorI(false)};
    if (poblacion.trim() !== ""){setErrorPob(false)};
    if (moneda.trim() !== ""){setErrorM(false)};
  }

  //Controlador del boton
  const controladorBtn = () => {
    let existeError = false;

    //Sucesion de if que validan que cada campo este rellenado
    if (pais.trim() === "") {
      setErroP(true);
      existeError = true;
    }
    else{
      for (let i = 0; i < listaObjetos.length; i++) {
        if (listaObjetos[i].nombre === pais) {
          setErroP(true);
          existeError = true;
        }
      }
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
    
    //if que permite el ingreso de datos al localStorage cuando no existan errores
    if (!existeError) {
      const id_objeto = listaObjetos.length > 0 ? listaObjetos[listaObjetos.length -1].id + 1 : 1;
      const datosObjeto = {
        id: id_objeto,
        nombre: pais,
        capital: capital,
        datos: {
          idioma: idioma,
          poblacion: poblacion,
          moneda: moneda,
        },
      };
      listaObjetos.push(datosObjeto);
      localStorage.setItem("paises", JSON.stringify(listaObjetos));
      setPais("");
      setCapital("");
      setIdioma("");
      setPoblacion("");
      setMoneda("");
    }
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Agregar</h2>
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
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Agregar;
