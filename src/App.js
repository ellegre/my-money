import './App.css'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuthContext } from './hooks/useAuthContext'

// components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown'

function App() {
  const { authIsReady, user } = useAuthContext()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div 
      className="App bg-gradient"
    >
      {authIsReady && (
        <BrowserRouter>
          <Navbar handleToggle={handleToggle} />
          <Dropdown isOpen={isOpen} handleToggle={handleToggle} />
          <Routes>
            <Route 
              path="/" 
              element={(!user && <Navigate to="login" />) || (user && <Home />)} 
            />
  
            <Route 
              path="/login" 
              element={(user && <Navigate to="/" />) || (!user && <Login />)} 
            />
  
            <Route 
              path="/signup" 
              element={(user && <Navigate to="/" />) ||  (!user && <Signup />)} 
            />

          </Routes>        
        </BrowserRouter>
      )}     
    </div>
  );
}

export default App
