import { useState } from 'react'

const Button = props => {
  return (
    <button onClick={props.clickHandler}>
      {props.title}
    </button>
  )
}

const StatisticLine = props => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}

const Statistics = ({good,neutral,bad}) => {
  const totalFeedback = good+neutral+bad;

  let average = (good*1 + neutral*0 - bad*1)/totalFeedback;
  let percentage = (good* 100)/totalFeedback;

  if(!totalFeedback) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <>
        <h2>statistics</h2>
        <StatisticLine text={'good'} value={good}/>
        <StatisticLine text={'neutral'} value={neutral}/>
        <StatisticLine text={'bad'} value={bad}/>
        <StatisticLine text={'all'} value={totalFeedback}/>
        <StatisticLine text={'average'} value={average}/>
        <StatisticLine text={'positive'} value={percentage}/>
      </>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    return (
      <div>
        <h2>give feedback</h2>
        <div>
          <Button title={'good'} clickHandler={() => setGood(good+1)} />
          <Button title={'neutral'} clickHandler={() => setNeutral(neutral+1)} />
          <Button title={'bad'} clickHandler={() => setBad(bad+1)} />
        </div>
        <Statistics {...{good,neutral,bad}}/>
      </div>
    )

}

export default App;

