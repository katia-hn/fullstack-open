const Header = (props) => {
  
  return(
    <h1>{props.course}</h1>
  )
}

/* Asi es como estaba antes de la refactorizacion del content */
/* const Content = ({info}) => {
  return(
   <div>
      <p>
        {info[0].part} {info[0].exercise}
      </p>
      <p>
        {info[1].part} {info[1].exercise}
      </p>
      <p>
        {info[2].part} {info[2].exercise}
      </p>
   </div>
  )
} */

const Content = ({part1, part2, part3}) => {
  return(
   <div>
    
      <Part part={part1.name} exercise={part1.exercises}>
      </Part>
      <Part part={part2.name} exercise={part2.exercises}>
      </Part>
      <Part part={part3.name} exercise={part3.exercises}>
      </Part>
     
   </div>
  )
}

const Part = ({ part, exercise }) => {
  return <p>{part} {exercise}</p>
}


const Total = ({part1, part2, part3}) => {
  const total = part1.exercises + part2.exercises + part3.exercises
  return(
    <p>Number of exercises = {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}

export default App