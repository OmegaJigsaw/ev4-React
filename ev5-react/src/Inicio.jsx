import React, { useEffect} from "react";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Visualizar from "./Visualizar";
import Agregar from "./Agregar";

const Inicio = () => {
  const API_URL = "http://45.236.130.191/paises.php";
  const array_api= JSON.parse(localStorage.getItem("paises")) || [];
  useEffect(()=>{
    fetch(API_URL).then(Response => Response.json()).then(datos =>{
      if (array_api.length === 0){
        localStorage.setItem("paises", JSON.stringify(datos))
      }
    })
  })
  return (
    <div className="container">
      <div className="row">
        <Router>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/Agregar"}>Agregar</Link>
          </li>
          <li>
            <Link to={"/"}>Eliminar</Link>
          </li>
          <li>
            <Link to={"/"}>Actualizar</Link>
          </li>
          <li>
            <Link to={"/Visualizar"}>Visualizar</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={Inicio} />
          <Route path="/Agregar" element={<Agregar />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/Visualizar" element={<Visualizar arreglo={array_api} />} />
        </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Inicio;
