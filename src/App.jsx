import { Route, Switch } from "wouter";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

// Import halaman khusus fotografer & videografer
import PhotographerPage from './pages/PhotographerPage';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/">
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
        </Route>

        <Route path="/photographer" component={PhotographerPage} />
      </Switch>
    </>
  );
}

export default App;