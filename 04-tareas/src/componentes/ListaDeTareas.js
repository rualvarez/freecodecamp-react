import React, { useState } from "react";
import '../hojas-de-estilo/ListaDeTareas.css'
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

function ListaDeTareas() {

  const[tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    //Comprobar que la tarea no sea vacia
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim(); //Quitar espacios al principio y final
      const tareaActualizadas = [tarea, ...tareas];
      setTareas(tareaActualizadas);
    }
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;