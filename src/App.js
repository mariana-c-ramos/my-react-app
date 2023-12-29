import './App.css'
import { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Contacts } from './pages/Contacts'

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("MaryProgramms")

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
