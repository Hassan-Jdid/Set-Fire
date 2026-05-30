import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Bowls from "./pages/Bowls"
import Burgers from "./pages/Burger"
// import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Bowls" element={<Bowls />} />
          <Route path="/Burgers" element={<Burgers />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
