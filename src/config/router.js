import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/home'
import About from '../views/home/about'
import Service from '../views/service'
import Contact from '../views/contact'
import Navbar from '../component/navbar'
import Project from '../views/project'

function AppRouter() {
  return (
    <>
    <Routes>
        <Route>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Service' element={<Service/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Project' element={<Project/>} />
        </Route>
    </Routes>
    </>
  )
}

export default AppRouter;