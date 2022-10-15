import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
