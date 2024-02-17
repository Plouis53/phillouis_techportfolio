//* Component imports
import React, { useEffect, useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";
import Hero from "../Hero/Hero.jsx";
import Projects from "../../Projects/Projects.jsx";
import Background from "../Background/Background.jsx";
import ContactModal from "../ContactModal/ContactModal.jsx";
import Footer from "../Footer/Footer.jsx";
import ContactButton from "../ContactButton/ContactButton.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import ResumeConfirmModal from "../ResumeConfirmModal/ResumeConfirmModal.jsx";
import MessageModal from "../MessageModal/MessageModal.jsx";

function App() {
  const [modal, setModal] = useState("");
  const [confirmModal, setConfirmModal] = useState("");
  const [messageModal, setMessageModal] = useState("");

  const openModal = () => {
    setModal("create");
  };

  const closeModal = () => {
    setModal("");
  };

  const handleOpenConfirmModal = () => {
    setConfirmModal("create");
  };

  const handleCloseConfirmModal = () => {
    setConfirmModal("");
  };

  const handleOpenMessageModal = () => {
    setMessageModal("create");
  };

  const handleCloseMessageModal = () => {
    setMessageModal("");
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  return (
    <div className="bg-[#2b2b2b] w-full m-auto">
      <Nav openModal={openModal} />
      <Hero />
      <Projects />
      <Background handleOpenConfirmModal={handleOpenConfirmModal} />
      <Testimonials openModal={openModal} />
      <Footer />
      <ContactButton openModal={openModal} />
      {modal === "create" && (
        <ContactModal
          closeModal={closeModal}
          handleOpenMessageModal={handleOpenMessageModal}
        />
      )}
      {confirmModal === "create" && (
        <ResumeConfirmModal handleCloseConfirmModal={handleCloseConfirmModal} />
      )}
      {messageModal === "create" && (
        <MessageModal handleCloseMessageModal={handleCloseMessageModal} />
      )}
    </div>
  );
}

export default App;
