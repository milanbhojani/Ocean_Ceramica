import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <footer className="footer">
        <div className="container w-100">
          <div className="row w-100">
            <div className="">
              <a href="contact" className="text1 underline">
                <icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width={100}
                    height={100}
                    viewBox="0 0 640 480"
                    className="pt-4"
                  >
                    <desc>Created with Fabric.js 3.6.6</desc>
                    <defs />
                    <g transform="matrix(0.05 0 0 -0.05 304.45 243.05)">
                      <path
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeDashoffset: 0,
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 4,
                          fill: "rgb(255,255,255)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" translate(-22935.43, -26770)"
                        d="M 20667 31233 c -3 -16 -17 -84 -32 -153 c -14 -69 -71 -354 -126 -635 c -55 -280 -118 -598 -139 -705 c -22 -107 -82 -415 -135 -685 c -53 -269 -113 -578 -135 -685 c -21 -107 -53 -267 -69 -355 c -17 -88 -35 -178 -41 -200 c -5 -22 -28 -137 -50 -255 c -23 -118 -63 -325 -90 -460 c -26 -135 -76 -384 -109 -555 c -34 -170 -99 -503 -146 -740 c -155 -783 -183 -927 -240 -1220 c -31 -159 -62 -319 -70 -355 c -8 -36 -24 -112 -35 -170 c -11 -58 -47 -240 -79 -405 c -166 -840 -222 -1127 -233 -1194 c -10 -61 -17 -75 -36 -84 c -19 -9 -23 -17 -20 -51 l 3 -41 l 3141 -3 l 3142 -2 l 4 27 c 3 16 40 199 83 408 c 43 209 110 542 150 740 l 72 360 l -36 7 c -20 4 -106 19 -191 33 c -502 83 -957 233 -1332 439 c -127 70 -232 135 -227 140 c 2 2 58 -1 124 -7 c 141 -12 349 2 490 33 c 408 90 830 338 1101 647 c 347 394 522 822 541 1323 c 12 340 -60 675 -216 995 c -419 859 -1326 1298 -2200 1064 c -361 -96 -723 -311 -971 -576 c -480 -513 -677 -1198 -536 -1860 c 26 -119 85 -289 156 -448 c 37 -82 88 -195 112 -251 c 235 -529 683 -1023 1233 -1360 c 331 -202 754 -379 1145 -478 c 80 -20 152 -39 160 -42 c 19 -7 -73 -37 -217 -69 c -538 -122 -1180 -77 -1728 119 c -281 101 -621 294 -875 496 c -122 97 -343 310 -439 425 c -528 624 -806 1445 -753 2217 c 58 831 378 1525 968 2099 c 485 471 1113 771 1809 865 c 177 24 549 24 730 0 c 387 -50 692 -140 1020 -301 c 387 -189 731 -459 1033 -809 c 18 -21 36 -35 39 -32 c 3 3 43 191 89 418 c 46 227 129 638 185 913 c 56 275 114 563 129 640 c 123 615 141 697 161 719 c 10 12 12 47 3 70 c -6 15 -293 16 -3159 16 l -3153 0 l -5 -27 z"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </icon>{" "}
                Contact us
              </a>
            </div>
          </div>

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
                    <p className="text-light">
                      C/O 3rd floor,
                      <br /> T-41, Somnath Market,
                      <br />
                      opposite Ratnakala Diamond,
                      <br />
                      Sanala Road - 363641, Gujarat, INDIA.
                    </p>
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
            <div className="col"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
