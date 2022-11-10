const App = () => {
  const course = 'Half Stack application development';

  const exercise1 = {
    title: 'Fundamentals of React',
    number: 10
  }

  const exercise2 = {
    title: 'Using props to pass data',
    number: 7
  }

  const exercise3 = {
    title: 'State of a component',
    number: 14
  }
  
  const Header = props => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Part = props => {
    return (
      <p>
        {props.exercise.title} {props.exercise.number}
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
      <p>Number of exercises {props.content[0].number + props.content[1].number + props.content[2].number}</p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content content={[exercise1,exercise2,exercise3]}/>
      <Total content={[exercise1,exercise2,exercise3]}/>
    </div>
  )
}

export default App;