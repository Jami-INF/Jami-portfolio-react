import './App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import GoTop from "./components/layout/GoTop";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <GoTop />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/experiences" element={<Experiences />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Navigate to="/"/>} />
              </Routes>
              <Footer />

          </div>
      </Router>
   );
}

export default App;
