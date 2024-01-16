import { Fragment } from 'react';

import Navbar from './layout/Navbar';
import Hero from './layout/Hero';
import About from './layout/About';
import Skills from './layout/Skills';
import Projects from './layout/Projects';
import Footer from './layout/Footer';
import Button from './components/Button';

function App() {
  return (
    <Fragment>
      <Button />
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
