import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Collection from "./pages/collection/Collection";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path={`/product/:id`} element={<Product />} /> 
        <Route path='/createNewUser' element={<SignUp />} />
        <Route path='/createNewUser' element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
