const App = () => {
  const course = 'Half Stack application development';
  const content = {
    part1 : 'Fundamentals of React',
    exercises1 : 10,
    part2 : 'Using props to pass data',
    exercises2 : 7,
    part3 : 'State of a component',
    exercises3 : 14
  }
  
  const Header = props => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = props => {
    return (
      <>
        <p>
          {props.content.part1} {props.content.exercises1}
        </p>
        <p>
          {props.content.part2} {props.content.exercises2}
        </p>
        <p>
          {props.content.part3} {props.content.exercises3}
        </p>
      </>
    )
  }

  const Total = props => {
    return (
      <p>Number of exercises {props.content.exercises1 + props.content.exercises2 + props.content.exercises3}</p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total content={content}/>
    </div>
  )
}

export default App;