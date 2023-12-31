import './App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Projects from "./components/project/Projects";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Particle from "./components/layout/Particules";
import ScrollToTop from "./components/ScrollToTop";
import React from "react";
import Experiences from "./components/experiences/Experiences";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Particle/>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
