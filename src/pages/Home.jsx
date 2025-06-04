import ScrollTo from './ScrollTo';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <ScrollTo />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}

export default Home;