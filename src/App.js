import React from "react";
import { About } from "./components/About";
import { Booking } from "./components/Booking";
import { Contact } from "./components/Contact";
import { Service } from "./components/Service";
import { Header } from "./components/Header";
import { Brand } from "./components/Brand";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="appContainer" id="appContainer">
      <Brand />
      <Header />
      <Service />
      <Booking />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
