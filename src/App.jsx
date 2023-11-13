import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Benefit from "./pages/Benefit";
import Review from "./pages/Review";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-white ">
      <section className="max-w-[1000px] px-4 md:px-8 mx-auto">
        <Navbar />
        <Home />
        <About />
        <Features />
        <Benefit />
      </section>
      <section className="bg-secondary-200 px-4 md:px-32 text-white">
        <Review />
        <Footer/>
      </section>
    </div>
  );
}

export default App;
