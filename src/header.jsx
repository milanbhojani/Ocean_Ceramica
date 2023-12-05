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
          <a href="/" className="logo">
            <img src="img/ocean.svg" />
          </a>
          <Link to="/collection" className="underline">
            Collection
          </Link>
          <a href="/collection" className="underline">
            Collection
          </a>
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
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/About">About Us</a>
            </li>
            <li>
              <a href="/infra">Infrastructure</a>
            </li>
            {/* Added https://alstonia.in/infrastructure.html this part with our design */}
            <li>
              <a href="/catalogues">Catalogues</a>
            </li>
            <li>
              <a href="/quality">Quality</a>
            </li>
            <li>
              <a href="/export">Export</a>
            </li>
            {/* <li>
             <Link to="/career">Career</Link>
           </li> */}
            {/*<li><a href="blog.php">Blog</a></li>*/}
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
