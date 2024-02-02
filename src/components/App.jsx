import Nav from "../components/Nav.jsx";
import Hero from "./Hero.jsx";
import Projects from "../Projects/Projects.jsx";
import About from "./About.jsx";
import ContactModal from "./ContactModal.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
import React from "react";

function App() {
  const [modal, setModal] = useState("");

  const openModal = () => {
    setModal("create");
  };

  const closeModal = () => {
    setModal();
  };
  return (
    <div className="bg-[#2b2b2b] max-w-[2000px] m-auto">
      <Nav openModal={openModal} />
      <Hero />
      {modal === "create" && <ContactModal closeModal={closeModal} />}
      <About openModal={openModal} />
      <Projects />
      <Footer />
    </div>
  );
}
// ``;
export default App;
