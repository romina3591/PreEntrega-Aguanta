import { useState } from 'react'
// import './App.css'

import Titulo from './components/Titulo/Titulo'
import NavBar from './components/NavBar/NavBar'


import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function Formulario () {

  return <section>

              <form>
                <input type="text" name='name ' placeholder='' />
                <input type="text" name='name ' placeholder='' />
              </form>
  </section>
}

function App() {
  const [ counter, setCounter] = useState (0)
  console.log (counter)

  let style = {fontSize: 22, backgroundColor: 'white'}
  
  let handleCount = () => {
      setCounter (counter +1)
  }

  return (
    <div className="App" style={ style }>
      <NavBar/>
      <ItemListContainer greeting={ItemList}/>
     
      {/* <p>Click: {counter}</p>
      <button onClick={handleCount}>Agregar al Carrito</button> */}
      {/* <Titulo/>
      <Formulario/> */}
      
      <hr/>
    </div>
    
  )
}

export default App
