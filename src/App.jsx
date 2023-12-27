import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Vans from "../components/Vans"
import VansHeader from "../components/VansHeader"

import "/server.js"







function App() {

  const [vanData, setVanData] = React.useState([])

  React.useEffect(function() {
    console.log("Effect ran")
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVanData(data.vans))
  }, [])

  console.log('vanData', vanData)

  const VAN_MAX = 12;

  const vanCards = vanData.slice(0, VAN_MAX).map(van => {
    return (
      <Vans 
      key={van.id}
      {...van}
      />
    )
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Nav /> <Home /><Footer /></>} />
          <Route path="/about" element={<><Nav /><About /><Footer /></>} />
          <Route path="/vans" element={<><Nav /> <VansHeader /> <div className="vanCards-grid-container">{vanCards}</div> <Footer /></>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
