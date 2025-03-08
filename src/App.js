import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TopBar from "./components/Header";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
