import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/fcc_primary.svg';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de freeCodeCamp' />
        </div>
        <div className='contenedor-principal'>
          <Contador 
            numClicks={this.state.numClicks} />
          <Boton 
            texto='Click'
            esBotonDeClick={true}
            manejarClick={this.manejarClick} />
          <Boton 
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

// function App() {

//   const [numClicks, setNumClicks] = useState(0);

//   const manejarClick = () => {
//     setNumClicks(numClicks + 1);
//   }

//   const reiniciarContador = () => {
//     setNumClicks(0);
//   }

//   return (
//     <div className='App'>
//       <div className='freecodecamp-logo-contenedor'>
//         <img 
//           className='freecodecamp-logo'
//           src={freeCodeCampLogo}
//           alt='Logo de freeCodeCamp' />
//       </div>
//       <div className='contenedor-principal'>
//         <Contador 
//           numClicks={numClicks} />
//         <Boton 
//           texto='Click'
//           esBotonDeClick={true}
//           manejarClick={manejarClick} />
//         <Boton 
//           texto='Reiniciar'
//           esBotonDeClick={false}
//           manejarClick={reiniciarContador} />
//       </div>
//     </div>
//   );
// }

export default App;
