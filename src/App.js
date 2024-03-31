import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home , {HeaderPhone, NavHeader} from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Pricing from './components/Pricing.jsx'


import './styles/home.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter >
    <NavHeader />
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Team />
      <Pricing />
      <Contact />
      <Footer />
    </BrowserRouter>

  );
}

export default App;
