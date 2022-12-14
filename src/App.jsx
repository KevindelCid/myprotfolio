import { useState } from "react";

import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <NavBar />

      <Header />

      <AboutMe />
      <small className="comment">
        // Deberías ponerte en <a href="#contact">contacto</a> conmigo...{" "}
      </small>
      <Skills />
      <Proyects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
