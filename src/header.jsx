import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/" className="logo">
            <img src="img/ocean.svg" />
          </Link>
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
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/infra">Infrastructure</Link>
            </li>
            {/* Added https://alstonia.in/infrastructure.html this part with our design */}
            <li>
              <Link to="/catalogues">Catalogues</Link>
            </li>
            <li>
              <Link to="/quality">Quality</Link>
            </li>
            <li>
              <Link to="/export">Export</Link>
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
  );
};

export default Header;
