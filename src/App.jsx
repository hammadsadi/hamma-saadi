import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import EducationalBackground from "./components/EducationalBackground/EducationalBackground";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <EducationalBackground />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
