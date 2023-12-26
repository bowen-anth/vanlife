import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Nav /> <Home /><Footer /></>} />
          <Route path="/about" element={<><Nav /><About /><Footer /></>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
