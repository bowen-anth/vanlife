import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Vans from "../components/pages/Vans/Vans"
import VansHeader from "../components/VansHeader"
import VanDetail from "../components/pages/Vans/VanDetail"
import Layout from "../components/Layout"
import Dashboard from "../components/pages/Host/Dashboard"
import Income from "../components/pages/Host/Income"
import Reviews from "../components/pages/Host/Reviews"
import HostVans from "../components/pages/Host/HostVans"
import HostVanDetail from "../components/pages/Host/HostVanDetail"
import HostVanInfo from "../components/pages/Host/HostVanInfo"
import HostVanPhotos from "../components/pages/Host/HostVanPhotos"
import HostVanPricing from "../components/pages/Host/HostVanPricing"
import NotFound from "../components/pages/NotFound"
import Login from "../components/pages/Login"
import HostLayout from "../components/HostLayout"
import AuthRequired from '../components/AuthRequired'


import "/server.js"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<><Home /><Footer /></>} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<><About /><Footer /></>} />
            <Route path="vans" element={<><VansHeader /> <div className="vanCards-grid-container"><Vans /></div> <Footer /></>} />
            <Route path="vans/:id" element={<VanDetail />} />

            <Route element={<AuthRequired />}>
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
