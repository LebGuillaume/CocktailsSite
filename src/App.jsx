import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Coktails from "./components/cocktails.jsx";
import About from "./components/about.jsx";
import Art from "./components/Art.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main className="App">
      <Navbar/>
      <Hero/>
      <Coktails/>
      <About/>
      <Art/>
      <div className="h-dvh color-black"></div>

    </main>
  )
}
export default App
