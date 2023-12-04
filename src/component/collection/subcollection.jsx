import React from "react";
import { Link } from "react-router-dom";

const Subcollection = () => {
  return (
    <div className="contacts">
      <div className="container-full">
        <h1 className="marquee" data-title="absolute collection">
          absolute collection
        </h1>
        <div className="top">
          <form>
            <div className="heading">
              <div className="split">
                <div style={{ display: "block", position: "relative" }}>
                  <span
                    style={{
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    Absolute
                  </span>{" "}
                  <span
                    style={{
                      display: "inline-block",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    Collection
                  </span>
                </div>
              </div>
              {/* <div className="split"></div> */}
            </div>
          </form>
        </div>
      </div>
      <section className="latest-blog-area">
        <div className=" container inner-content" id="engrav">
          <div className="row" id="toxic">
            {/*Start single blog post*/}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div
                className="single-blog-post wow fadeInLeft animated"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0ms",
                  animationName: "fadeInLeft",
                }}
              >
                <div className="img-holder">
                  <img
                    src="img/previes/abs/unika/engrave/eva-grey-stonex-hr.jpg"
                    alt="Awesome Image"
                  />
                </div>
                <div className="text-holder">
                  <div className="post-date">
                    <h3>
                      <img src="img/logo/unika.png" />
                    </h3>
                  </div>
                  <div className="text">
                    <p>
                      A Collection that created using cutting-edge technology to
                      ensure great quality.
                    </p>
                  </div>
                  <div className="meta-box">
                    <ul className="meta-info">
                      <li>
                        {" "}
                        Exotic
                        <br />
                        <br />
                        {/* <a href="sub-collection.php?collection_slug=<br />
  <b>Warning</b>:  Undefined variable $row in <b>/home/essencetiles.com/public_html/absolute.php</b> on line <b>179</b><br />
  <br />
  <b>Warning</b>:  Trying to access array offset on value of type null in <b>/home/essencetiles.com/public_html/absolute.php</b> on line <b>179</b><br />
  &collection_id=<br />
  <b>Warning</b>:  Undefined variable $row in <b>/home/essencetiles.com/public_html/absolute.php</b> on line <b>179</b><br />
  <br />
  <b>Warning</b>:  Trying to access array offset on value of type null in <b>/home/essencetiles.com/public_html/absolute.php</b> on line <b>179</b><br />
  " className="btn btn-secondary">30x60cm</a> */}
                        <Link
                          to="/detailcollection"
                          className="btn btn-secondary"
                        >
                          30x60cm
                        </Link>
                      </li>
                      <li>
                        Engrave <br />
                        <br />
                        <Link
                          to="/detailcollection"
                          className="btn btn-secondary"
                        >
                          60x120cm
                        </Link>
                      </li>
                      <li>
                        Moroccon <br />
                        <br />
                        <Link to="/subcollection" className="btn btn-secondary">
                          30x30cm
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End single blog post*/}
            {/*Start single blog post*/}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div
                className="single-blog-post wow fadeInLeft animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "200ms",
                  animationName: "fadeInLeft",
                }}
              >
                <div className="img-holder">
                  <img
                    src="img/previes/abs/monoton/fullbody/station-black.jpg"
                    alt="Awesome Image"
                  />
                </div>
                <div className="text-holder">
                  <div className="post-date">
                    <h3>
                      <img src="img/logo/mono-ton.png" />
                    </h3>
                  </div>
                  <div className="text">
                    <p>
                      A collection with unique colors that are aesthetically
                      superior to its contemporaries.
                    </p>
                  </div>
                  <div className="meta-box">
                    <ul className="meta-info">
                      <li>
                        Full body Vitrified tiles
                        <br />
                        <br />
                        <Link
                          to="/detailcollection"
                          className="btn btn-secondary"
                        >
                          60X60cm
                        </Link>
                        <Link
                          to="/detailcollection"
                          className="btn btn-secondary"
                        >
                          60X120cm
                        </Link>
                        <Link
                          to="/detailcollection"
                          className="btn btn-secondary"
                        >
                          60x90cm
                        </Link>
                      </li>
                      {/*<li>Full body<br>Vitrified tiles<br><br>*/}
                      {/*<a href="https://drive.google.com/file/d/1BQWqWbxxnwcl7xzJjgLFNB7IKSMExURV/view?usp=sharing" className="btn btn-secondary">60x120cm</a>*/}
                      {/*</li>*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End single blog post*/}
            {/*Start single blog post*/}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div
                className="single-blog-post wow fadeInLeft animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "400ms",
                  animationName: "fadeInLeft",
                }}
              >
                <div className="img-holder">
                  <img
                    src="img/previes/abs/inout/parking/8570.jpg"
                    alt="Awesome Image"
                  />
                </div>
                <div className="text-holder">
                  <div className="post-date">
                    <h3>
                      <img src="img/logo/in-out.png" />
                    </h3>
                  </div>
                  <div className="text">
                    <p>
                      Exclusive collection of ultra-luxurious surfaces that can
                      elevate any space.
                    </p>
                  </div>
                  <div className="meta-box">
                    <ul className="meta-info">
                      <li>
                        Parking (12 mm) <br />
                        <br />
                        <Link
                          to="/detailcollection"
                          className="btn btn-secondary"
                        >
                          40x40cm
                        </Link>
                        <Link
                          to="/detailcollection"
                          className="btn btn-secondary"
                        >
                          30x30cm
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div
                className="single-blog-post wow fadeInLeft animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "400ms",
                  animationName: "fadeInLeft",
                }}
              >
                <div className="img-holder">
                  <img
                    src="img/previes/abs/NANO-BLACK.jpg"
                    alt="Awesome Image"
                  />
                </div>
                <div className="text-holder">
                  <div className="post-date">
                    <h3>
                      <img src="img/logo/crestaa.png" />
                    </h3>
                  </div>
                  <div className="text">
                    <p>
                      Indulge in the epitome of luxury with our exquisite tile
                      masterpiece, where opulence meets craftsmanship in perfect
                      harmony.
                    </p>
                  </div>
                  <div className="meta-box">
                    <ul className="meta-info">
                      <li>
                        Fullbody (1.5cm) <br />
                        <br />
                        <Link
                          to="/detailcollection"
                          className="btn btn-secondary"
                        >
                          80x240cm
                        </Link>
                        <Link
                          to="/detailcollection"
                          className="btn btn-secondary"
                        >
                          80x300cm
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div
                className="single-blog-post wow fadeInLeft animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "400ms",
                  animationName: "fadeInLeft",
                }}
              >
                <div className="img-holder">
                  <img
                    src="img/previes/abs/ONYX-CHOCO.jpg"
                    alt="Awesome Image"
                  />
                </div>
                <div className="text-holder">
                  <div className="post-date">
                    <h3 style={{ fontSize: 35 }}>
                      {/*<img src="img/logo/in-out.png">*/}ICONIC
                    </h3>
                  </div>
                  <div className="text">
                    <p>
                      Experience the epitome of luxury with our stunning
                      colorbody tiles, where impeccable designs meet captivating
                      beauty.
                    </p>
                  </div>
                  <div className="meta-box">
                    <ul className="meta-info">
                      <li>
                        Colorbody (1.5cm)
                        <br />
                        <br />
                        <Link
                          to="/detailcollection"
                          className="btn btn-secondary"
                        >
                          120x240cm
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End single blog post*/}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Subcollection;
