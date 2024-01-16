import logo from "./logo.svg";
import "./App.css";
import Experience from "./components/Experience";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<About />}></Route>
        <Route path="/" element={<Skills />}></Route>
        <Route path="/" element={<Projects />}></Route>
        <Route path="/" element={<Experience />}></Route>
      </Routes> */}
      <Home />
      <About />

      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
