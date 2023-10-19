import React, { useEffect } from'react';
import { Routes, Route,useNavigate } from "react-router-dom";
import Home from './component/home';
import Contact from './component/contact/contact';
import About from './component/about/about';
import Header from "./header";
import Footer from './footer';
import Collection from './collection';
import Catalogues from './component/download/catalogues';
import Quality from './component/quality/quality';
import Export from './component/events/export';
import LocomotiveScroll from 'locomotive-scroll';

const Main = () => {

  let history = useNavigate();

useEffect(() => {
  const scroll = new LocomotiveScroll();
  console.log("scroll outside if condition",scroll);
  if(scroll)
  {
    console.log("scroll inside if condition");
    scroll.update();
  }
  
},[history])

return (
   <>
   <div data-scroll-container className="wrapper">
    <Header />
    
        <Routes>
      
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/catalogues" element={<Catalogues />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/export" element={<Export />} />
          
        </Routes>
     
      <Footer />
      </div>
 </>
 )
   }

export default Main;

       