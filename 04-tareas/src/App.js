import './App.css';
import freeCodeCampLogo from './imagenes/fcc_primary.svg';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo} 
          className='freecodecamp-logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        
        <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
