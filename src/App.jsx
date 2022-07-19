import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
