import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Forecast from './pages/Forecast'
import Favorites from './pages/Favorites'

function AppRoutes() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </>
  )
}

export default AppRoutes