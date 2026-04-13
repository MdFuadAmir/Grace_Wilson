import About from "../Components/About";
import CaseStudies from "../Components/CaseStudies";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Pricing from "../Components/Pricing";
import Process from "../Components/Process";
import Services from "../Components/Services";
import Testmonials from "../Components/Testmonials";
import Tools from "../Components/Tools";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing/>
      <CaseStudies />
      <Process />
      <Testmonials />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
