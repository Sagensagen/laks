import { React, useRef } from "react";
import { HomeComponent } from "../components/HomeComponent";
import { Reports } from "./Reports";
import { HeaderBar } from "../components/headerBar";
import { FooterNavigation } from "../components/FooterNavigation";
import { Vision } from "./Vision";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const LandingPage = () => {
  const homeRef = useRef();
  const visionRef = useRef();
  const sustainabilityRef = useRef();
  const contactRef = useRef();
  function handleHomeClick() {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function handlesustainabilityClick() {
    sustainabilityRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleVisiontClick() {
    visionRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleContactClick() {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <HeaderBar
        home={handleHomeClick}
        sustainability={handlesustainabilityClick}
        contact={handleContactClick}
        vision={handleVisiontClick}
      />
      <div ref={homeRef}>
        <HomeComponent></HomeComponent>
      </div>

      <div ref={sustainabilityRef}>
        <Reports></Reports>
      </div>
      <div ref={contactRef}>
        <FooterNavigation></FooterNavigation>
      </div>
    </>
  );
};
