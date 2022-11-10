const App = () => {
  const course = 'Half Stack application development';

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
  
  const Header = props => {
    return (
      <h1>{props.course}</h1>
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
        <Part exercise={props.content[0]}/>
        <Part exercise={props.content[1]}/>
        <Part exercise={props.content[2]}/>
      </>
    )
  }

  const Total = props => {
    return (
      <p>Number of exercises {props.content[0].exercises + props.content[1].exercises + props.content[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content content={parts}/>
      <Total content={parts}/>
    </div>
  )
}

export default App;