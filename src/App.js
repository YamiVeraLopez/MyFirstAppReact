import React from 'react';
import Card from './components/Card'

const App = () => {
  // Se regresan elementos de JSX
  const numero = 1;

/*   const componente = {
    numero: numero
  } */

const ListaAlumnosSimples = ["Ivan", "Esteban", "Daniel"] 

const ListaJSX = []
ListaAlumnosSimples.forEach((alumno, index) => {
  ListaJSX.push(<p key={index}>{alumno}</p>)
})


/* const ListaAlumnos = [
  <p>Ivan</p>,
  <p>Esteban</p>,
  <p>Daniel</p>,
] */

  return (
    <div>
      <p id='saludo'>Hola</p>
      <Card titulo={`La tarjeta numero ${numero}`} numero={numero}/>
      <Card titulo={`La tarjeta numero ${numero}`} numero={numero}/>
      <Card titulo={`La tarjeta numero ${numero}`} numero={numero}/>
      <Card titulo={`La tarjeta numero ${numero}`} numero={numero}/>
      {/* {ListaAlumnos} */}
      
      {ListaJSX}
      {ListaAlumnosSimples.map((alumno, index) => <p key={index}>{alumno}</p>)}
    </div>
  );
}

export default App

