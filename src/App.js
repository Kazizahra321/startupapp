import logo from './logo.svg';
import './App.css';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Customers from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing ';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Support from './components/Support/Support';
import Blog from './components/Blog/Blog';
import Start from './components/Modal/Start';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>
    
     
      <Navbar/>
      <Header/>
      <Pricing/>
      <Blog/>
      <Services/>
      <Start/>
      <Support/>
      <Customers/>
      <Contact/>
     <Footer/>
    </div>

  );
}

export default App;
