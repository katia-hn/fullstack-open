//importaciones
const express = require('express')
const morgan = require('morgan')

//Creacion de la app
const app = express()

//Tokens *Van siempre antes que las rutas
morgan.token('body', function(req, res) {
    return(
        JSON.stringify(req.body)
    )
})

//Middleware
app.use(express.json())
app.use(morgan(':method :url :status :response-time :body '))



let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Phonebook</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const date = String(new Date())
    response.send(`<p>Phonebook has info for ${persons.length} people <br/>${date} <p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(n => n.id === id)
    if(person){
        response.json(person)
    }else{
        response.status(404).end('User not found')
        
    }
    
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter( n => n.id !== id) 

    response.status(204).end()
})

app.post('/api/persons', (request, response) =>{

    let id

    do{
        id = Math.floor(Math.random()*10000)
    } while(persons.some(person => person.id === id))


    const newP = request.body
    const newPerson = {
        "id": id,
        "name": newP.name,
        "number": newP.number
    }

    if(!newP.name || !newP.number){
        return(
            response.status(400).json({
                error: 'Name or number missing'
            })
        )
    } else if(persons.find(person => person.name === newP.name)){
        return(
            response.status(400).json({
            error: "Name must be unique"
            })
        )
    }

    persons = persons.concat(newPerson)
    response.json(newPerson)

    
})


const PORT = 3001
app.listen(PORT)

