import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <NavBar />
      <div className="home-container">
        <Header />
        <section className="qualities-container">
          <ul className="option">
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
            <li>
              <li>
                Cv en
                <div className="options-cv">
                  <i className="fa-solid fa-download"></i>
                  <i className="fa-solid fa-eye"></i>
                </div>
              </li>
            </li>
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
            <li>
              Cv es
              <div className="options-cv">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
