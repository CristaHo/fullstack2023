
const Total = (props) => {
  const total = props.parts.reduce(function(sum, order) {
    return sum + order.exercises
  }, 0)

  return (
    <p><b>total of {total} exercises</b></p>
  )
}

const Part = (course) => <p>{course.name} {course.ex}</p>



const Header = (props) => <h1>{props.header}</h1>

const Content = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
    {props.parts.map(course => 
          <Part key={course.id} name={course.name} ex={course.exercises} />
          
    )}
    <Total parts={props.parts} />
    
    
    </div>
  )
}

const Course = (props) => {
  console.log(props)

  return (
    <div>
    {props.course.map(course =>
          <Content key={course.id} name={course.name} parts={course.parts} />
    )}
   
          
    
    </div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course course={courses} />
      
    </div>
  )
}








export default App
