import React from'react';
import { Routes, Route } from "react-router-dom";
import Home from './component/home';
import Contact from './component/contact/contact';
import About from './component/about/about';
import Header from "./header";
import Footer from './footer';
import Collection from './collection';
import Catalogues from './component/download/catalogues';
import Quality from './component/quality/quality';
import Export from './component/events/export';

const Main = () => {
return (
   <>
   <div data-scroll-container="" className="wrapper">
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

       