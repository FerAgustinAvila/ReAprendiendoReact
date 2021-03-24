import React from 'react';
import './App.css';
// import Home from './components/Home';
// import Contador from './components/Contador';
// import Listado from './components/Listado';
// import Temperatura from './components/Temperatura';
// import Formulario from './components/Formulario';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App mt-5">
      <h1> Recordando React </h1>
      {/* <Home /> */}
      {/* <Contador /> */}
      {/* <Contador /> */}
      {/* <Contador /> */}
      {/* <Listado /> */}
      {/* <Temperatura /> */}
      {/* <Formulario /> */}

      <h2> Props </h2>
      <hr />
      <div className="row">
        <div className="col">
          <Cards 
            image="http://placeimg.com/150/150/arch"
            title="Arquitectura"
            text="Texto de la card 1"
          />
        </div>
        <div className="col">
          <Cards 
            image="http://placeimg.com/150/150/animals"
            title="Animales"
            text="Texto de la card 2"
          />
        </div>
        <div className="col">
          <Cards 
            image="http://placeimg.com/150/150/people"
            title="Personas"
            text="Texto de la card 3"
          />
        </div>
        
      </div>
    </div>
  );
}

export default App;
