import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const clickHandler = () => {
    setSelected(Math.floor(Math.random()*6));
  }

  const [votes, setVotes] = useState(Array(7).fill(0))

  const voteHandler = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  const maxVote = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <div>
        <h3>Anectode of the day</h3>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <div>
          <button onClick={voteHandler}>vote</button>
          <button onClick={clickHandler}>next anecdote</button>
        </div>
      </div>
      <div>
        <h3>Anectode with most votes</h3>
        <p>{anecdotes[maxVote]}</p>
      </div>
    </div>
  )
}

export default App