import React, { useEffect } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Visualizar from "./Visualizar";
import Agregar from "./Agregar";
import Eliminar from "./Eliminar";

const Inicio = () => {
  //API
  const API_URL = "http://45.236.130.191/paises.php";
  //Arreglo que contiene valores del localstorage si existen, si no un arreglo vacio
  const array_api = JSON.parse(localStorage.getItem("paises")) || [];

  //useEffect que carga los datos al localstorage la primera vez en caso que no hayan datos cargados
  useEffect(() => {
    fetch(API_URL)
      .then((Response) => Response.json())
      .then((datos) => {
        //if que se asegura de cargar los datos solo cuando no hayan cargados anteriormente
        if (array_api.length === 0) {
          localStorage.setItem("paises", JSON.stringify(datos));
        }
      });
  });
  return (
    <div className="container">
      <div className="row">
        <Router>
          {/* classname nav para vista horizontal de los elementos */}
            <ul className="nav">
              {/* lo mismo de arriba */}
              <li className="nav-item ">
                <Link className="nav-link active" to={"/"}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to={"/Agregar"}>
                  Agregar
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to={"/Eliminar"}>
                  Eliminar
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to={"/"}>
                  Actualizar
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to={"/Visualizar"}>
                  Visualizar
                </Link>
              </li>
            </ul>
            {/* Rutas */}
          <Routes>
            <Route path="/" element={Inicio} />
            <Route path="/Agregar" element={<Agregar />} />
            <Route path="/Eliminar" element={<Eliminar />} />
            <Route path="/" element={<Inicio />} />
            <Route
              path="/Visualizar"
              element={<Visualizar />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Inicio;
