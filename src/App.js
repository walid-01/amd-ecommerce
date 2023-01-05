import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import All from "./pages/All";
import Processor from "./pages/Processor";
import NotFound from "./pages/NotFound";
import { AccountProvider } from "./context/AccountContext";
import Account from "./pages/Account";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <AccountProvider>
        <CartProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/all" exact element={<All />} />
              <Route path="/processor/:cpu" exact element={<Processor />} />
              <Route path="/account" exact element={<Account />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </AccountProvider>
    </Router>
  );
}

export default App;
