import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import RegisterFrom from "./components/RegisterForm/RegisterForm"


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
        <Navbar />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AboutUs />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    <Login />
                  </>
                }
              />
              <Route
                path="/register"
                element={
                  <>
                    {/* <div>Registration Page</div> */}
                    <RegisterFrom></RegisterFrom>
                  </>
                }
              />
              <Route
                path="/trending"
                element={
                  <>
                    <div>Trending Page</div>
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <div>Profile Page</div>
                  </>
                }
              />
              <Route path="/product/*" element={<div>Product Page(s)</div>} />
              <Route
                path="*"
                element={
                  <>
                    <div>Not Found</div>
                  </>
                }
              />
            </Routes>
          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
