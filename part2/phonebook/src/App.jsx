import { useState } from 'react'
import Numbers from './components/numbers'

const App = () => {
   const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setPhone]= useState('')
  const [findName, setFindName] = useState('')
  
  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handlePhone =(event) => {
    setPhone(event.target.value)
  }
  const handleFind = (event) =>{
    setFindName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nuevo = [{
      name: newName,
      phone: newPhone
    }]

    const name = persons.filter(person => person.name === newName)
    const phone = persons.filter(person => person.phone === newPhone)
    if(name.length !== 0 || phone.length !== 0 ){
      
      name.length > 0 ? alert(newName + ' is already added to phonebook') : alert(newPhone + ' is already added to phonebook')

    }else{
      setPersons(persons.concat(nuevo))
    }

    setNewName('')
    setPhone('')
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input type="text" value={findName} onChange={handleFind}  />
      </div>
      <div>
        <h2>Add new</h2>
        <form onSubmit={addName}>
          <div>
            name: <input value={newName} onChange={handleName}  />
          </div><br />
          <div>
            phone: <input value={newPhone} onChange={handlePhone}  />
          </div><br />
          <div>
            <button  type="submit">add</button>
          </div>
        </form>
      </div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Numbers key={person.name} person={person.name} phone={person.phone} />)}
      </ul>
    </div>
  )
}

export default App
