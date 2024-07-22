import React, { useEffect, useState } from "react";

//CAMBIAR A BOTONES QUE UPDATEEN LA TABLA CON LOS DATOS QUE ESTOS MUESTREN
//AL PRESIONAR CADA BOTON DEBEN GENERAR UN INPUT QUE FILTRE POR LO QUE HAGA EL BOTON
//ADICIONAL AGREGAR BOTON PARA VER TODA LA TABLA

const Visualizar = () => {
  const locals = JSON.parse(localStorage.getItem("paises")) || [];
  const [listaOBJ, setLista] = useState([])
  useEffect(() => {
    setLista(locals)
  }, [])
  
  //Definir inputDIV en ambas funciones
  const MostrarTodo = () => {
    const inputDIV = document.querySelector("#InputDiv")
    //IF de validacion de duplicado de input
    if (inputDIV.childElementCount > 0){
      inputDIV.removeChild(inputDIV.lastChild)
    }
    setLista(locals)
  }

  const MostrarNombre = () => {
    //IF de validacion de duplicado de input
    const inputDIV = document.querySelector("#InputDiv")
    if (inputDIV.childElementCount > 0){
      inputDIV.removeChild(inputDIV.lastChild)
    }
    else{
      // Creacion del los elementos encargado de la captura del nombre
      const labelInput = document.createElement("label")
      labelInput.innerHTML = "Nombre"
      labelInput.className = "form-label"
      labelInput.htmlFor = "nombre"

      const inputBusqueda = document.createElement("input")
      inputBusqueda.type = "text"
      inputBusqueda.className = "form-control" 
      inputBusqueda.placeholder = "Ingrese nombre a buscar"
      inputBusqueda.id = "nombre"

      const btnBusqueda = document.createElement("btn")
      btnBusqueda.innerHTML = "Buscar"
      btnBusqueda.className = "btn btn-primary"

      //Listener para el evento click en el boton 
      btnBusqueda.addEventListener("click", () => {
        const nuevaLista = [];
        //Ciclo para el filtro
        for (let i = 0; i < listaOBJ.length; i++) {
          if (listaOBJ[i].nombre === inputBusqueda.value) {
            nuevaLista.push(listaOBJ[i]);
            setLista(nuevaLista)
          }
      }})

      const divCont = document.createElement("div")
      divCont.appendChild(labelInput)
      divCont.appendChild(inputBusqueda)
      divCont.appendChild(btnBusqueda)
      inputDIV.appendChild(divCont)
    }
  }
  
  return (
    <div className="container">
      <div className="col-12">
        <ul className="nav">
          <li className="nav-item"><button type="button" className="btn btn-primary" onClick={MostrarTodo}>Buscar Todo</button></li>
          <li className="nav-item"><button type="button" className="btn btn-primary" onClick={MostrarNombre}>Buscar por Nombre</button></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-12" id="InputDiv"></div>
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
