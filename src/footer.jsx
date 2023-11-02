import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <footer className="footer">
        <div className="container">
          <a href="contact.html" target="_blank" className="text1 underline">
            Get in the touch
          </a>
          <div className="info">
            <div className="col">
              <span>Social media</span>
              <ul>
                <li>
                  <i className="fa fa-instagram fsi" aria-hidden="true" />{" "}
                  <a
                    href="https://www.instagram.com/ocean_ceramica/"
                    target="_blank"
                    className="underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <i
                    className="fa fa-facebook-official fsi"
                    aria-hidden="true"
                  />{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=100068731177080"
                    target="_blank"
                    className="underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <i className="fa fa-linkedin-square fsi" aria-hidden="true" />{" "}
                  <a
                    href="https://www.linkedin.com/company/oceanceramica"
                    target="_blank"
                    className="underline"
                  >
                    linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <span>
                {" "}
                <i className="fa fa-map-marker fsi" /> Address
              </span>
              <ul>
                <li>
                  <a
                    href="https://goo.gl/maps/naZWp5CLm91jTE9F7"
                    target="_blank"
                    className="underline"
                  >
                    <b>Ocean Ceramica</b>
                    <br />
                    C/O 3rd floor,
                    <br /> T-41, Somnath Market,
                    <br />
                    opposite Ratnakala Diamond,
                    <br />
                    Sanala Road - 363641, Gujarat, INDIA.
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <span>
                <i className="fa fa-envelope fsi" /> Email
              </span>
              <ul>
                <li>
                  <a href="mailto:info@essencetiles.com" className="underline">
                    info@oceanceramica.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <span>
                {" "}
                <i className="fa fa-phone fsi" /> Phone
              </span>
              <ul>
                <li>
                  <a href="tel:+918980077077" className="underline">
                    +91 72020 99299
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
