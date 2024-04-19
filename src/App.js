import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import CouraselComponent from './components/Courasel';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';

// import '../src/assets/styles/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/js/bootstrap.js'
import Facts from './components/Facts';
import Features from './components/Features';



function App() {
  const [isSticky, setIsSticky] = useState(false);

 
  return (
    <div className="App ">
      <TopBar />
      <NavigationBar />
      <CouraselComponent />
      <About />
      <Facts />
      <Features />
      <Services />
      <Projects />
      <Footer />
      
      
    </div>
  );
}

export default App;
