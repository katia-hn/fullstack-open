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

const Mensaje = ({mensaje, exito}) => {
  
  if(mensaje === null) {
    return null
  } else{
    return(
      <div className={`mensaje ${exito ? 'exito' : ''}`}>
        {mensaje}
      </div>
    )
  }
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber]= useState('')
  const [findName, setFindName] = useState('')
  const [mensaje, setMensaje] = useState(null)
  const [exito, setExito] = useState(true)

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
            setMensaje('It has been successfully replaced.')
            setExito(true)
            setTimeout(() => setMensaje(null), 2000)
          })
          .catch(() => {
            setMensaje(`Information of ${name[0].name} has already been removed from server`)
            setExito(false)
            setTimeout(() => setMensaje(null), 2000)
          })
        }
      }else{
        setMensaje(newNumber + ' is already added to numberbook')
        setExito(false)
        setTimeout(() => setMensaje(null), 2000)
      }
    }else{
      personsService.create(nuevo).
      then(phonebook => {
        setPersons(persons.concat(phonebook))
        setMensaje('It has been added correctly.')
        setExito(true)
        setTimeout(() => setMensaje(null), 2000)
      })
    }

    setNewName('')
    setNumber('')
  }
  const deleteNumber = (id) =>{

    if(window.confirm('Are you sure you want to delete?')){
      personsService.deleteNumber(id)
      .then( () =>{
        setPersons(persons.filter(n => n.id !== id))
        setMensaje('It has been successfully deleted.')
        setExito(true)
        setTimeout(() => setMensaje(null), 2000)
      })
    }else{
      setMensaje('Operation canceled')
      setExito(false)
      setTimeout(() => setMensaje(null), 2000)
      
    }
  }
  
  return (
    <div>
      <h2>Numberbook</h2>
      <Filter findName={findName} handleFind={handleFind}/>

      <div>
        <h2>Add new</h2>
        <Mensaje mensaje={mensaje} exito={exito}/>
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
