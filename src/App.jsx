import { Fragment } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  return (
    <Fragment>
      <Button/>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
