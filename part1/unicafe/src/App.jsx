import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Stadistic = ({good, neutral, bad, all}) => {
   const Media = () => { 
    const totalScore = (good * 1) + (neutral * 0) +( bad * -1);
    if(all === 0){
      return(0)
    }
    return (totalScore / all)
  }
  const Porcentaje = () => {
    if(all === 0){return(0)}
    return((good / all) * 100)
  }

  return(
    <div>
      <h2>Statistics</h2>
      <p>Good = {good}</p>
      <p>Neurtal = {neutral}</p>
      <p>Bad = {bad}</p>
      <p>All = {all}</p>
      <p>Media = {Media()}</p>
      <p>Porcentaje = {Porcentaje()}%</p>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const HandleClickG = () => { 
    setGood(good + 1)
    setAll(all + 1)
  }
  const HandleClickN = () => { 
    setNeutral(neutral + 1)
     setAll(all + 1) 
  }
  const HandleClickB = () => { setBad(bad + 1)
     setAll(all + 1) 
  }
  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={HandleClickG} text="Good"></Button>
      <Button onClick={HandleClickN} text="Neutral"></Button>
      <Button onClick={HandleClickB} text="Bad"></Button>
      <Stadistic good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App