import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count - 1)
  }
  const setCountToZero = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <button onClick={increaseCount}>Increase</button>
      <br></br>
      <button onClick={decreaseCount}>Decrease</button>
      <br></br>
      <button onClick={setCountToZero}>Set to Zero</button>

      {count}
    </div>
  )
}

export default App;
