import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
      setGeneratedExcuse(res.data[0].excuse)
    });
  }

  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => fetchData("family")}>Excuse for familiy</button>
      <button onClick={() => fetchData("office")}>Excuse for office</button>
      <button onClick={() => fetchData("party")}>Excuse for party</button>
      <p>Excuse: {generatedExcuse}</p>
    </div>
  )
}

export default App;
