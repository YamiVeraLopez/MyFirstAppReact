import React, { useState } from 'react';
import Card from './components/Card'



const App = () => {

  const [tarjetas, setTarjetas] = useState([])
  let numeroTarjeta = 0

  // Se regresan elementos de JSX
  let numero = 1;

/*   const componente = {
    numero: numero
  } */

const ListaAlumnosSimples = ["Ivan", "Esteban", "Daniel"] 

const ListaJSX = []
ListaAlumnosSimples.forEach((alumno, index) => {
  ListaJSX.push(<p key={index}>{alumno}</p>)
})

/*const tarjetas = []
 for (let i = 0; i < 10; i++) {
  tarjetas.push(<Card key={i} titulo={`La tarjeta numero ${i}`} numero={numero}/>)  
} */

/* const ListaAlumnos = [
  <p>Ivan</p>,
  <p>Esteban</p>,
  <p>Daniel</p>,
] */

const agregarTarjeta = () => {
  tarjetas.push(<Card key={tarjetas.length} titulo={`La tarjeta numero ${tarjetas.length}`} numero={numero}/>)
  setTarjetas([...tarjetas])
  numeroTarjeta++
}

const eliminarTarjeta = () => {
  tarjetas.pop()
  setTarjetas([...tarjetas])
  numeroTarjeta--
}

  return (
    <div>
      <p id='saludo'>Hola</p>
      <h2>Prueba de css</h2>
      <button onClick={agregarTarjeta}>Agregar tarjeta</button>
      <button onClick={eliminarTarjeta}>Eliminar tarjeta</button>
      <div className='cuadricula'>
        {tarjetas}
      </div>
      {/* {ListaAlumnos} */}
      
      {ListaJSX}
      {ListaAlumnosSimples.map((alumno, index) => <p key={index}>{alumno}</p>)}
    </div>
  );
}

export default App

