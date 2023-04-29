import React from "react";
import '../hojas-de-estilo/ListaDeTareas.css'
import TareaFormulario from "./TareaFormulario";

function ListaDeTareas() {
  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        LISTA DE TAREAS
      </div>
    </>
  );
}

export default ListaDeTareas;