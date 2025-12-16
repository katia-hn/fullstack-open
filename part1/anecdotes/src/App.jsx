import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const ale = () =>  Math.floor(Math.random() * anecdotes.length);
  const handleClick = () => setSelected(ale())

  const votosIniciales =Array(anecdotes.length).fill(0)
  const [votos, setVotos] = useState(votosIniciales)

  const handleVote = () => {
  //c es el valor y el i es el indice de la posicion
  //map crea automaticamente una copia del array, por lo que no hay que hacer una copia manual
  const nuevoVoto = votos.map((voto, i) => {
      if (i === selected) {
        return voto + 1;
      } else {
        return voto;
      }
    });
    setVotos(nuevoVoto);
  }

  const max= Math.max(...votos);
  const indexMax = votos.findIndex((v) => v === max);

  return (
    <div>
      <div>
        <h1>Anecdotes of the day</h1>
        <p>{anecdotes[selected]}</p>
        <button onClick={handleClick}>Next</button>
        <button onClick={handleVote}>Votar</button>
        <br />
        <p>The total number of votes for this anecdote is <strong>{votos[selected]}</strong></p>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[indexMax]}</p>
      </div>
    </div>
  )
}

export default App