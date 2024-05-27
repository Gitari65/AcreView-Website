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


import 'bootstrap/dist/js/bootstrap.js'
import Facts from './components/Facts';
import Features from './components/Features';
import Contact from './components/Contact';
import ImageSlider from './components/ImageSlider';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Clients from './components/Clients';
import Missions from './components/Missions';
import Background from './components/Background';
import Loader from './components/constants/Loader';
import { faL } from '@fortawesome/free-solid-svg-icons';





function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setIsLoading(false);
    },2200)
    return()=> clearTimeout(timer);
  })

 
  return (
    <Router>
    <Routes>
   {/* home route */}
      <Route path='/' 
      element={
       
        <div className="App  ">
          <TopBar />
          <NavigationBar />
          {isLoading?(
          <Loader/>
            ):(
              <>
          <LandingPage/>
              {/* <CouraselComponent /> */}
            <About />
            <Facts />
            <Features />
            <Services />
                <Clients/>
            <Contact/>
            <ImageSlider /> 
          
            <Footer />
            </>)}
    
    
     
      
      
    </div>
      } />

{/* home route */}
<Route path='/home' 
      element={
       
        <div className="App  ">
      <TopBar />
      <NavigationBar />
      {isLoading?(
            <Loader/>
          ):(
            <>
          <LandingPage/>
              {/* <CouraselComponent /> */}
              <About />
              <Facts />
              <Features />
              <Services />
                  <Projects />
              <Contact/>
              <ImageSlider /> 
            
              <Footer />
            
            </>)}
    
      
      
    </div>
      } />


      {/* about us */}
      <Route path='/about' 
      element={
        <div className="App  ">
          <TopBar />
          <NavigationBar />
          {isLoading?(
            <Loader/>
          ):(
            <>
               <Header names={'About us'}/>
              <Background/>
                <About />
                <Facts />
                <Features />
                <Contact/>
                <Footer />
            </>
       
          )}
     
      
        </div>
      } />

{/* lean more 
<Route path='/learnmore' 
      element={
        <div className="App  ">
          <TopBar />
          <NavigationBar />
          {isLoading?(
            <Loader/>
          ):(
            <>
        <Header names={'About us'}/>
                <About />
                <Facts />
                <Features />   
                <Contact/>
                  <Footer />
            </>)}
      
     
        </div>
      } /> */}

          {/* contact us */}
          <Route path='/contacts' 
      element={
        <div className="App  ">
          <TopBar />
          <NavigationBar />
          {isLoading?(
            <Loader/>
          ):(
            <>
          <Header names={'Our Contacts '}/>    
              <Contact/>
                  <Footer />
            </>)}
        
        </div>
      } />

           {/* prjects  */}
           <Route path='/projects' 
      element={
        <div className="App  ">
          <TopBar />
          <NavigationBar />
          {isLoading?(
            <Loader/>
          ):(
            <>
        <Header names={'Our Projects '}/> 
                  <Projects/>   
              <Contact/>
                  <Footer />
            </>)}
          
     
      
      
        </div>
      } />
           {/* prjects  */}
           <Route path='/services' 
      element={
        <div className="App  ">
          <TopBar />
          <NavigationBar />
          {isLoading?(
            <Loader/>
          ):(
            <>
          <Header names={'Our Services '}/> 
                    
                <Services/>   
                   <Footer />
              
            </>)}
         
        </div>
      } />

          {/* staff  */}
          <Route path='/staff' 
      element={
        <div className="App  ">
          <TopBar />
          <NavigationBar />
          {isLoading?(
            <Loader/>
          ):(
            <>
              <Header names={'Staff Members'}/>
              <ImageSlider/>
      
                <Footer />
            </>)}
        
      
        </div>
      } />

       {/* staff  */}
       <Route path='/client' 
      element={
        <div className="App  ">
          <TopBar />
          <NavigationBar />
          {isLoading?(
            <Loader/>
          ):(
            <>
        <Header names={'Our Clients'}/>
                <Clients/>
              
                  <Footer />
                </>)}
                
            </div>
          } />
        
        </Routes>
    </Router>
        
    
  );
}

export default App;
