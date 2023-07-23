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
import Projects from "./components/Projects";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Particle from "./components/layout/Particules";


function App() {
  return (
      <Router>
          <div className="App">

              <Navbar />
              <Particle/>

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
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
