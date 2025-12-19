"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Metrics from "./components/Metrics";
import Skills from "./components/Skills";
import Methodology from "./components/Methodology";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-4 max-w-7xl mx-auto relative z-10">
        <Welcome />
        <Metrics />
        <Skills />
        <Methodology />
        <SoftSkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
