import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    setTimeout(() => {
      let scrollerTemp = window.scroller;
      if (scrollerTemp) {
        scrollerTemp.update();
      }
    }, 500);
  }, []);

  return (
    <>
      <div className="contacts">
        <div className="container-full">
          <h1 className="marquee" data-title="visit us">
            visit us
          </h1>
          <div className="top">
            <form>
              <div className="heading">
                <div className="split">Visit Us</div>
                {/* <div className="split"></div> */}
              </div>
            </form>
          </div>
        </div>
        <section className="event-section">
          <div className="auto-container top">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="visit">
                  <div className="icon">
                    <img src="img/location.png" style={{ maxWidth: "10%" }} />{" "}
                    <b>Factory 1</b>
                  </div>
                  <div className="content pt-4">
                    <p>
                      <a
                        href="https://goo.gl/maps/naZWp5CLm91jTE9F7"
                        target="_blank"
                      >
                        <b>Ocean Ceramica</b>
                        <br />
                        <br />
                        8-A National Highway,
                        <br />
                        <br />
                        opp. Lalpar Power House,
                        <br />
                        <br />
                        Near Canal, Morbi - 363642
                        <br />
                        <br />
                        Gujarat, IN
                        <br />
                        <br />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="visit">
                  <div className="icon">
                    <img src="img/location.png" style={{ maxWidth: "10%" }} />{" "}
                    <b>Factory 2</b>
                  </div>
                  <div className="content pt-4">
                    <p>
                      <a
                        href="https://goo.gl/maps/naZWp5CLm91jTE9F7"
                        target="_blank"
                      >
                        <b>Factory</b>
                        <br />
                        <br />
                        8-A, National Highway
                        <br />
                        <br />
                        opp. Lalpar Village,
                        <br />
                        <br />
                        behind Sungloss Ceramic,
                        <br />
                        <br />
                        Lalpar, Morbi-363642, Gujarat, IN
                        <br />
                        <br />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="visit">
                  <div className="icon">
                    <img src="img/location.png" style={{ maxWidth: "10%" }} />{" "}
                    <b>Factory 3</b>
                  </div>
                  <div className="content pt-4">
                    <p>
                      <a
                        href="https://goo.gl/maps/naZWp5CLm91jTE9F7"
                        target="_blank"
                      >
                        <b>Factory</b>
                        <br />
                        <br />
                        Survey No.76 P1, P2,
                        <br />
                        <br />
                        Near Wind Mill,
                        <br />
                        <br />
                        opp Shiv Petrol Pump,
                        <br />
                        <br />
                        Halvad Road, Morbi - 363642, Gujarat, IN
                        <br />
                        <br />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="visit">
                  <div className="icon">
                    <img src="img/location.png" style={{ maxWidth: "10%" }} />{" "}
                    <b>Factory 4</b>
                  </div>
                  <div className="content pt-4">
                    <p>
                      <a
                        href="https://goo.gl/maps/naZWp5CLm91jTE9F7"
                        target="_blank"
                      >
                        <b>Factory</b>
                        <br />
                        <br />
                        Survey no. 229 P1, P3,P4,
                        <br />
                        <br />
                        Halvad Road,
                        <br />
                        <br />
                        Nichi Mandal,
                        <br />
                        <br />
                        Morbi - 363642, Gujarat, IN
                        <br />
                        <br />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-4">
                <div className="pt-4">
                  <div className="content pt-2">
                    <p>
                      <img src="img/call.png" style={{ maxWidth: "5%" }} />{" "}
                      <a href="tel:+917202099299">+91 7202099299</a>
                    </p>
                    <br />
                    <p>
                      <img src="img/mail.png" style={{ maxWidth: "5%" }} />{" "}
                      <a href="mailto:info@oceanceramica.com">
                        {" "}
                        info@oceanceramica.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Contact;
