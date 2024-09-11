import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/header";
import { CartContext } from "./contexts/cart.context";

function App() {
  return (
    <CartContext>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartContext>
  );
}

export default App;
