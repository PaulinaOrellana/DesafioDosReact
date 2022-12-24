import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./Componentes/Input.jsx";
import Boton from "./Componentes/Boton.jsx";
 
function App() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
 
  const BotonFormulario = () => {
        if (password === '252525') {
        return (<Boton></Boton>)
    } else {
      return (<></>)
     }
    }
 
  return (
    <div className="App">  
      <h1>Desafío de Estados de Componentes y Eventos</h1>
     
      <Input
      nombre={nombre}
      setNombre={setNombre}
      password={password}
      setPassword={setPassword}
      >
      </Input>
    <BotonFormulario></BotonFormulario>
      </div>
  );
}
 
export default App;