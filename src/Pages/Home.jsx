import About from "../Components/About";
import CaseStudies from "../Components/CaseStudies";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Pricing from "../Components/Pricing";
import Process from "../Components/Process";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import SEO from "../Utils/SEO";

const Home = () => {
  return (
    <div>
      <SEO
        title="Grace Winson | Digital Marketing Specialist"
        description="Results-driven digital marketer helping brands grow through social media marketing, SEO, paid advertising, and content strategy."
      />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="cases">
        <CaseStudies />
      </div>
      <Process />
      <Testimonials />
      <Pricing />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
