import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home';
import About from './pages/About/about';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Experience from './pages/Experience/experience';
import ExperiencesComponent from "./components/ExperiencesComponent"
import Navbar from './components/Navbar/navbar';
import Project from './pages/Project/project'
import Footer from './components/Footer/footer';
import Education from './pages/Education/education';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/experience/:id" element={< ExperiencesComponent />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/education" element={<Education />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
