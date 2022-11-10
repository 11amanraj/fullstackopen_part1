import { useState } from 'react'

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
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {average}</p>
        <p>positive {percentage} %</p>
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
          <button onClick={() => setGood(good+1)}>good</button>
          <button onClick={() => setNeutral(neutral+1)}>neutral</button>
          <button onClick={() => setBad(bad+1)}>bad</button>
        </div>
        <Statistics {...{good,neutral,bad}}/>
      </div>
    )

}

export default App;

