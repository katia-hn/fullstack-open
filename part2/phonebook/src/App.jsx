import { useState } from 'react'
import Numbers from './components/numbers'
import Formulario from './components/form'

const Filter = ({findName, handleFind}) => {
  return(
     <div>
        Filter shown with <input type="text" value={findName} onChange={handleFind}  />
      </div>
  );
}

const App = () => {
   const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
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

  /*const filterItems = () => persons.filter((person) => person.name.toLowerCase().indexOf(findName.toLowerCase()) > -1)
 */
  const filterItems =  persons.filter(person =>
  person.name.toLowerCase().includes(findName.toLowerCase())
  );

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
      <Filter findName={findName} handleFind={handleFind}/>
      <div>
        <h2>Add new</h2>
        <Formulario addName={addName} newName={newName} handleName={handleName} newPhone={newPhone} handlePhone={handlePhone} />
      </div>
      <h2>Numbers</h2>
      <ul>
        {filterItems.map(person => <Numbers key={person.name} person={person.name} phone={person.phone} />)}
      </ul>
    </div>
  )
}

export default App
