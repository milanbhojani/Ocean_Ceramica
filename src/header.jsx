import React from'react';
import { Link } from 'react-router-dom';
import Collection from './collection';
import About from './component/about/about';
import Download from './component/download/catalogues';
import Quality from './component/quality/quality';
import Export from './component/events/export';
import Contact from './component/contact/contact';

const Header = () => {

    return (
       <>
        
     {/* header */}
     <header className="header">
       <div className="container ">
         <a
           href="#hidden-menu"
           data-scroll=""
           data-scroll-sticky=""
           data-scroll-target=".wrapper"
           className="burger"
         />
         <a href="index-2.html" className="logo">
           <img src="img/logo.svg" />
         </a>
         <Link to="/collection" className="underline">
           Collection
         </Link>
       </div>
     </header>
     <div
       className="hidden-menu"
       data-scroll=""
       data-scroll-sticky=""
       data-scroll-target=".wrapper"
     >
       <nav className="nav">
         <ul>
           <li>
             <Link to="/" className="active">Home</Link>
           </li>
           <li>
           <Link to="/About" >About Us</Link>
           </li>
           <li>
             <Link to="/catalogues">Download</Link>
           </li>
           <li>
             <Link to="/quality">Quality</Link>
           </li>
           <li>
             <Link to="/export">Events</Link>
           </li>
           {/* <li>
             <Link to="/career">Career</Link>
           </li> */}
           {/*<li><a href="blog.php">Blog</a></li>*/}
           <li>
             <Link to="/contact">Contact Us</Link>
           </li>
         </ul>
       </nav>
       </div>
       </>
    )
}

export default Header;