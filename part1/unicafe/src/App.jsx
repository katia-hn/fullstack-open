import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Stadistic = ({good, neutral, bad, all}) => {
  if(all === 0){
    return(<p>No feedback given</p>)
  }
  const totalScore = (good * 1) + (neutral * 0) +( bad * -1);
  const media = totalScore / all
  const porcentaje = (good / all) * 100

  return(
    <div>
      <h2>Stadistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{media}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{porcentaje}%</td>
          </tr>
        </tbody>
      </table>

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