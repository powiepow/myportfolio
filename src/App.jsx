import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/style.css";
import "./style/responsive-style.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import "../src/App";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
