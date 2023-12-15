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
                    <b>Head Office</b>
                  </div>
                  <div className="content pt-4">
                    <p>
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
                      <b>Factory</b>
                      <br />
                      <br />
                      8-A, National Highway opp. Lalpar Village,
                      <br />
                      <br />
                      b/h Sungloss Ceramic,
                      <br />
                      <br />
                      Lalpar, Morbi-363642, Gujarat, IN
                      <br />
                      <br />
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
                      <b>Factory</b>
                      <br />
                      <br />
                      Survey No.76 P1, P2, Near Wind Mill,
                      <br />
                      <br />
                      opp Shiv Petrol Pump,
                      <br />
                      <br />
                      Halvad Road, Morbi - 363642, Gujarat, IN
                      <br />
                      <br />
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
                    </p>
                  </div>
                </div>
              </div>
              <div className="row m-4 border">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 pl-4 pt-4">
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
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-3 mb-3">
                  {/* add map iframe */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29422.67139114715!2d70.8476617!3d22.8086169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598da2f5ff7547%3A0x2067253a85660c08!2sOcean%20Ceramica!5e0!3m2!1sen!2sin!4v1702643674196!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
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
