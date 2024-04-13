import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import CouraselComponent from './components/Courasel';
import NavigationBar from './components/NavigationBar';
import { useEffect, useState } from 'react';

// import '../src/assets/styles/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/js/bootstrap.js'



function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 100) {
              setIsSticky(true);
          } else {
              setIsSticky(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <div className="App ">
      {/*
      <NavBar/>
      <Courasel/> */}
      {isSticky ?App(
        <>
          <NavigationBar/>
      <CouraselComponent/> 
        </>
      ):(  <>
        <TopBar /> 
      <NavigationBar/>
      <CouraselComponent/>
      </>  )}
   
      
    </div>
  );
}

export default App;
