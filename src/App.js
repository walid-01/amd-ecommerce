import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AccountProvider } from "./context/AccountContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import All from "./pages/All";
import Processor from "./pages/Processor";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <AccountProvider>
        <CartProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all" element={<All />} />
              <Route path="/processor/:cpu" element={<Processor />} />
              <Route path="/account" element={<Account />} />
              <Route path="/checkout" element={<Checkout />} />
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
