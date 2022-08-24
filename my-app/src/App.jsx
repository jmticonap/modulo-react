import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Db from './components/db.js'
import MeCard from './components/MeCard'
import UseStateTarea1 from './components/UseStateTarea1/UseStateTarea1'
import UseStateTarea2 from './components/UseStateTarea2/UseStateTarea2'
import UseStateTarea3 from './components/UseStateTarea3/UseStateTarea3'
import UserCard from './components/UserCard/UserCard'

function App() {
  const [count, setCount] = useState(0)
  const [encendido, setEncendido] = useState(false)

  return (
    <div className="App">
      
      {/* <fieldset>
        <legend>23-08-2022</legend>
      
        ...

      </fieldset> */}
      
      <fieldset>
        <legend><h2>23-08-2022</h2></legend>
        <p>UserCard</p>
        <UserCard />
        <br />

        <p>Tare 1: useState</p>
        <UseStateTarea1 />
        <br />

        <p>Tare 2: useState</p>
        <UseStateTarea2 />
        <br />

        <p>Tare 3: </p>
        <UseStateTarea3 encendido={encendido} setEncendido={setEncendido} />
        <UseStateTarea3 encendido={encendido} setEncendido={setEncendido} />
        <UseStateTarea3 encendido={encendido} setEncendido={setEncendido} />

      </fieldset>
      

      <h2>22-08-2022</h2>
      <div className="card_container">

        { Db.map((itm, i) => <MeCard key={`me-card-${i}`} title={itm.title} color={itm.color} list={itm.list} />) }

      </div>
      
    </div>
  )
}

export default App
