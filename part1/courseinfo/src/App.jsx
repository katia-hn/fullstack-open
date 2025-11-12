const Header = (props) => {
  
  return(
    <h1>{props.course}</h1>
  )
}

const Content = ({info}) => {
  
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
}

const Total = ({info}) => {
  const total = info[0].exercise + info[1].exercise + info[2].exercise
  return(
    <p>Number of exercises = {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const info = [
      {part: 'Fundamentals of React', exercise:10},
      {part: 'Using props to pass data', exercise:7},
      {part: 'State of a component', exercise:14}
    ]

  return (
    <div>
      <Header course={course} />
      <Content info={info}/>
      <Total info={info}/>


    </div>
  )
}

export default App