import React from 'react'
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'

import Testing from './components/withnav/withNav'

function App() {
  return (
    <div className="App">
      <section className="gradient__bg">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Testing />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  )
}

export default App
