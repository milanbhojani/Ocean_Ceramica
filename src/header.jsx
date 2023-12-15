import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const history = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      let scrollerTemp = window.scroller;
      if (scrollerTemp) {
        scrollerTemp.update();
      }
    }, 500);
  }, []);

  useEffect(() => {
    //when URL change select id burgerCloseBtn and burgerCloseBtn remove active class
    let burgerCloseBtn = window.document.getElementById("burgerCloseBtn");
    //check if there is an active class css then remove it
    if (burgerCloseBtn.classList.contains("active")) {
      burgerCloseBtn.classList.remove("active");
    }
    let burgerDiv = window.document.getElementById("burgetCloseDiv");
    //check if there is an active class css then remove it
    if (burgerDiv.classList.contains("active")) {
      burgerDiv.classList.remove("active");
    }
  }, [history]);

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
            id="burgerCloseBtn"
          />
          <a href="/" className="logo">
            <img src="img/ocean.svg" />
          </a>
          <Link to="/collection" className="underline">
            Collection
          </Link>
        </div>
      </header>
      <div
        id="burgetCloseDiv"
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
