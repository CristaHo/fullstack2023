import { useState } from 'react'

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
      </tr>
    
  )
}
const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.total} />
      <StatisticLine text="average" value ={props.avg / props.total} />
      <StatisticLine text="positive" value ={props.good /props.total} />
      </tbody>
    </table>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.value}>{props.text}</button>
    </div>
  )
}
const App = () => {
  console.log()
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0)

  const handleGood = () => {
    setAvg(avg +1)
    setGood(good +1)
    setTotal(total +1)
  }
  
  const handleNeutral = () => {
      setNeutral(neutral +1)
      setTotal(total +1)
  
  }
      
  const handleBad = () => {
        setAvg(avg -1)
        setBad(bad +1)
        setTotal(total +1)
  
  
    
  }

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button value={handleGood} text="good" />
      <Button value={handleNeutral} text="neutral" />
      <Button value={handleBad} text="bad" />
      
      
      <h1>statistics</h1>
    
            <Statistics good={good} neutral={neutral} bad={bad} total={total} avg={avg}/>
         
      </div>
    
  )
}




export default App
