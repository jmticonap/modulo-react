import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MeCard from './component/MeCard'

function App() {
  const [count, setCount] = useState(0)

  const info = [
    "My name is: Juan Manuel Ticona Pacheco",
    "Favorite movie: Meet Joe Black",
    "Favorite music: no one especial"]

  return (
    <div className="App">
      <div className="card_container">
        <MeCard title="About Me" list={info} color="aquamarine" />
        <MeCard title="Hobbies" color="tomato" list={[
          "Basketball",
          "Coding",
          "Watch movies with my childs"
        ]} />
        <MeCard title="My Free Time" color="skyblue" list={[
          "Go out tu run",
          "Make the garden"
        ]} />
        <MeCard title="Food" color="pink" list={[
          "Cebiche",
          "rebay"
        ]} />
        <MeCard title="Technologies" color="yellow" list={[
          "HTML",
          "JavaScript",
          "CSS",
          "ReactJS",
          "Java",
          "Spring Boot"
        ]} />
      </div>
    </div>
  )
}

export default App
