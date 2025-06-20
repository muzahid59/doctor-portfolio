import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Specializations from '../components/Specializations';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <Specializations />
        <Education />
        <Testimonials />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
