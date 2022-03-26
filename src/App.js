import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import './App.css'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Login/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App