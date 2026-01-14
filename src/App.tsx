import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPages";

export default function App() {
  return (
      <div className="container">
        <nav className="navbar">
          <Link to="/">Productos</Link>
          <Link to="/cart">Carrito</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>

  );
}

