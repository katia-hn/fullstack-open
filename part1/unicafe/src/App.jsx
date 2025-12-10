import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandleClickG = () => { setGood(good + 1)}
  const HandleClickN = () => { setNeutral(neutral + 1) }
  const HandleClickB = () => { setBad(bad + 1) }

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={HandleClickG} text="Good"></Button>
      <Button onClick={HandleClickN} text="Neutral"></Button>
      <Button onClick={HandleClickB} text="Bad"></Button>

      <h2>Statistics</h2>
      <p>Good = {good}</p>
      <p>Neurtal = {neutral}</p>
      <p>Bad = {bad}</p>
    </div>
  )
}

export default App