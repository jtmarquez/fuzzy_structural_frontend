import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home'
import Fuzzify from './views/fuzzify'
import About from './views/About'
import NotFound from './components/NotFound'
import Navbar from './contexts/navbar'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Navbar />
                <Route path = "/" element={<Home />} />
                <Route path = "/about" element={<About />} />
                <Route path = "/fuzzify" element={<Fuzzify />} />
                <Route element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}