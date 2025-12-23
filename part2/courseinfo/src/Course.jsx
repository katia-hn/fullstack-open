
const Header = ({course}) => <h1>{course.name}</h1>

const Parts = ({name, ex}) => <li>{name} {ex}</li>

const Course = ({course}) =>{
  const p = course.parts

  /* const suma = p.reduce(function(total, parte) {
  return total + parte.exercises
  }, 0) */
  const suma = p.reduce((total, parte) => total + parte.exercises, 0)
 

  return(
    <div>
      <Header course={course} />
      <ul>
        {
          p.map(parte =>
          <Parts key={parte.id} name={parte.name} ex={parte.exercises}  />
          )
        }
      </ul>
      <p><strong>Total of {suma} exercises</strong></p>
    </div>
  )
  
}

export default Course

