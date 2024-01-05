import { Fragment } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects/>
    </Fragment>
  );
}

export default App;
