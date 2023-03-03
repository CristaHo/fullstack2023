import { useState } from 'react'



const App = (props) => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const makeArray = Array(8).fill(0)
  const maxIndex = (element) => element = element == maxVotes
  
  const [selected, setSelected] = useState(0)
  const [anecArray, setArray] = useState(makeArray)
  const [maxVotes, setMax] = useState(0)
  
  const [maxAnec, setAnec] = useState(0)

  
  
  
  console.log("Maxanec", maxAnec)
  
  

  const nextAnecdote = () => {
    const updatedSelected = Math.floor(Math.random() * (7 - 1 + 1)) + 1 
    setSelected(updatedSelected)
  }

  const vote = () => {
    const updatedArray = [...anecArray]
    updatedArray[selected] += 1
    setArray(updatedArray)
    console.log("Updated array", updatedArray)
    setMax(Math.max(...updatedArray))
    console.log("setMax", Math.max(...updatedArray))
    maxIndex(maxVotes)
    console.log("maxIndex", maxIndex)
    setAnec(anecArray.findIndex(maxIndex))

    

  }

  
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {anecArray[selected]} votes</p>
      <button onClick={nextAnecdote}>next anecdote</button>
      <button onClick={vote}>vote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxAnec]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App