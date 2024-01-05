import { Fragment } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Skills />
      <About />
    </Fragment>
  );
}

export default App;
