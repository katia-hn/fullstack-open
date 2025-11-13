const Header = (props) => {
  
  return(
    <h1>{props.course}</h1>
  )
}



const Content = ({ part }) => {
  return (
    <div>
      {part.map(value => {
        return (
          <Part part={value.name} exercise={value.exercises} />
        )
      })}
    </div>
  )
}

const Part = ( {part, exercise} ) => {
  return <p>{part} {exercise}</p>
}


const Total = ({part}) => {

  let suma = 0;

  part.forEach(element => {
     suma += element.exercises
  });

  return(
    <p>Number of exercises = {suma}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content part={parts}/>
      <Total part={parts}/>
    </div>
  )
}

export default App