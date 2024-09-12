import React from 'react';
import { Routes, Route } from 'react-router-dom';
import{Home} from './pages/home'
import{About} from './pages/about'
import{Project} from './pages/project'
import{Contact} from './pages/contact'

export const AllRoutes = () =>{
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/myprojects" element={<Project />} />
        <Route path="/contacts" element={<Contact />} />
        </Routes>
    )
}