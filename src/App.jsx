import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import RegisterFrom from "./components/RegisterForm/RegisterForm";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
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
                    <div>Login Page</div>
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
                    <ProfilePage />
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
