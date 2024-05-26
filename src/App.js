import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/About/about';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Experience from './pages/Experience/experience';
import ExperiencesComponent from "./components/ExperiencesComponent"
import Navbar from './components/Navbar/navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/experience/:id" element={< ExperiencesComponent />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
