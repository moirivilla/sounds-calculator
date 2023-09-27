//import React from 'react';
import Calculator from './components/calculator/Calculator'; // Asegúrate de importar el componente Calculator desde su ubicación correcta


function App() {
  return (
    <div className="app-container">
       <div className="background-image"></div>
      <h1>Sounds Calculator</h1>
      <Calculator /> {/* Agregar el componente Calculator aquí */}
    </div>
  );
}

export default App;

