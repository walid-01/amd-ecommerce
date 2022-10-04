import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/collections" exact element={<Collections />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
