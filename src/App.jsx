import { Fragment } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero/>
      <Skills/>
    </Fragment>
  );
}

export default App;
