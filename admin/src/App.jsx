import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}