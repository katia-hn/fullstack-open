const Header = ({ course }) => {
  
  return(
    <h1>{course.name}</h1>
  )
}

const Content = ({ part }) => {
  const partes = part.parts
  return (
    <div>
      {
        partes.map((valor) => {
          return(
            <Part part={valor.name} exercise= {valor.exercises} />
          )
        })
      }
    </div>
  )
}

const Part = ( {part, exercise} ) => {
  return <p>{part} {exercise}</p>
}

const Total = ({part}) => {
  const partes = part.parts
  let suma = 0
  partes.map((valor) => {
    return(
      suma += valor.exercises
    )
  })
  return(
    <p>El resultado es {suma}</p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course}/>
      <Total part={course}/>
    </div>
  )
}

export default App