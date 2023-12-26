import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Nav from "../components/Nav"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Nav /> <Home /></>} />
          <Route path="/about" element={<><Nav /><About /></>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
