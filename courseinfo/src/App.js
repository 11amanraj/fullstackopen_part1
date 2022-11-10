const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
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
  
  const Header = props => {
    return (
      <h1>{props.course.name}</h1>
    )
  }

  const Part = props => {
    return (
      <p>
        {props.exercise.name} {props.exercise.exercises}
      </p>
    )
  }

  const Content = props => {
    return (
      <>
        <Part exercise={props.content.parts[0]}/>
        <Part exercise={props.content.parts[1]}/>
        <Part exercise={props.content.parts[2]}/>
      </>
    )
  }

  const Total = props => {
    return (
      <p>Number of exercises {props.content.parts[0].exercises + props.content.parts[1].exercises + props.content.parts[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content content={course}/>
      <Total content={course}/>
    </div>
  )
}

export default App;