import { useEffect, useState } from 'react'
import Numbers from './components/numbers'
import Formulario from './components/form'
import personsService from './services/persons'

const Filter = ({findName, handleFind}) => {
  return(
     <div>
        Filter shown with <input type="text" value={findName} onChange={handleFind}  />
      </div>
  );
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber]= useState('')
  const [findName, setFindName] = useState('')

  useEffect(() => {
  personsService
  .getAll()
  .then(list => {
    setPersons(list)
  })
}, [])
  
  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber =(event) => {
    setNumber(event.target.value)
  }
  const handleFind = (event) =>{
    setFindName(event.target.value)
  }

/*   const filterItems = () => persons.filter((person) => person.name.toLowerCase().indexOf(findName.toLowerCase()) > -1)
 */ 
  const filterItems =  persons.filter(person =>
  person.name.toLowerCase().includes(findName.toLowerCase())
  );

  const addName = (event) => {
    event.preventDefault()
    const nuevo = {
      name: newName,
      number: newNumber
    }

    const name = persons.filter(person => person.name === newName)
    const number = persons.filter(person => person.number === newNumber)
    
    if(name.length !== 0 || number.length !== 0 ){
      if(name.length > 0){
        if(window.confirm(newName + ' is already added to numberbook, remplace the old number with a new one?')){
          const idP = name[0].id
          personsService.updateNum(idP, nuevo)
          .then(list => {
            setPersons(persons.map(num => num.id !== idP ? num : list))
          })
        }
      }else{
        alert(newNumber + ' is already added to numberbook')
      }
    }else{
      personsService.create(nuevo).then(phonebook => {setPersons(persons.concat(phonebook))})
    }

    setNewName('')
    setNumber('')
  }

  const deleteNumber = (id) =>{

    if(window.confirm('¿Estás seguro de que quieres borrar?')){
      personsService.deleteNumber(id)
      .then( () =>{
        setPersons(persons.filter(n => n.id !== id))
      })
    }else{
      alert('operacion cancelada')
    }
  }
  
  return (
    <div>
      <h2>Numberbook</h2>
      <Filter findName={findName} handleFind={handleFind}/>
      <div>
        <h2>Add new</h2>
        <Formulario addName={addName} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      </div>
      <h2>Numbers</h2>
      <ul>
        {filterItems.map(person => <Numbers key={person.name} person={person.name} phone={person.number} deleteNumber={deleteNumber} id={person.id} />)} 
      </ul>
    </div>
  )
}

export default App
