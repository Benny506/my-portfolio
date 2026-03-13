import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import CV from "./components/cv/CV";

export default function App(){

  return (
    <Routes>
      <Route 
        path="/"
        element={
          <Home />
        }
      />

      <Route 
        path="/about-me/*"
        element={
          <About />
        }
      />

      <Route 
        path="/projects/*"
        element={
          <Projects />
        }
      />

      <Route 
        path="/my-cv"
        element={
          <CV />
        }
      />      

    </Routes>
  )
}