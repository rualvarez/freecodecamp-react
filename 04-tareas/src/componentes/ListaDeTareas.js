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

  const eliminarTarea = id => {
    const tareaActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareaActualizadas);
  }

  const tareaCompletada = id => {
    const tareaActualizadas = tareas.map(tarea => {
      if (tarea.id === id) tarea.completada = !tarea.completada;

      return tarea;
    });

    setTareas(tareaActualizadas);
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
              completarTarea={tareaCompletada}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;