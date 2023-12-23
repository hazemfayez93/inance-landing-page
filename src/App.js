import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Professional from "./components/professional/Professional";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Professional />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
