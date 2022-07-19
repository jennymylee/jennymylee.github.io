import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from './components/Landing/Landing';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;
