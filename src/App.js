import React, { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  useEffect(() => {
    document.title = "Nick Nemtcev | Full Stack Engineer";
  });
  return (
    <main className="text-gray-900 bg-gray-100 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
