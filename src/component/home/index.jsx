import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://primedseashore.backendless.app/api/data/catalougeDetails"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let result = await response.json();
        setData(result); // Update the state with the fetched data
        console.log("cat details", result);
      } catch (error) {
        setError(error); // Update the state in case of an error
      } finally {
        setLoading(false); // Set loading to false, indicating that the data has been fetched
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let scrollerTemp = window.scroller;
      if (scrollerTemp) {
        scrollerTemp.update();
      }
    }, 500);
  }, [data]);

  return (
    <>
      {/* onb content */}
      <div className="main">
        <video
          src="/img/ocean.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="moodvideo"
        />
      </div>
      <div className="slider2">
        <div className="container">
          <div className="marquee" data-title="Ocean Ceramica">
            Ocean Ceramica
          </div>
          <div className="top">
            <div className="heading">
              <span className="split">Oceanic Splendor</span>
              <span className="split">Capturing Nature's Untamed Beauty</span>
            </div>
            <p
              className="pt-4"
              style={{ textAlign: "justify", lineHeight: "initial" }}
            >
              Since our establishment, Ocean has consistently stood as a symbol
              of unwavering excellence within the ceramic industry. We delight
              in showcasing our splendid array of collections that surpass the
              commonplace, deriving inspiration from the unrefined and wild
              splendor of nature. Through our offerings, we strive to
              encapsulate the authentic essence of nature in its most pristine
              manifestations, crafting surfaces that are not only visually
              breathtaking but also a manifestation of artistic and innovative
              purity. Our commitment is to go beyond the ordinary, creating
              visually striking surfaces that embody the very essence of art and
              innovation.
            </p>
            <br />
            <br />
            <Link to="/collection" className="a">
              View Collection
            </Link>
            <br />
          </div>
        </div>
        <div className="container-full">
          <div
            className="center is-inview"
            data-scroll=""
            data-scroll-speed={4}
            style={{
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 78.7937, 0, 1)",
            }}
          >
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
              <div
                className="swiper-wrapper"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
                id="swiper-wrapper-b1fc9a8a4d56aabf"
                aria-live="polite"
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: 360 }}
                  role="group"
                  aria-label="1 / 4"
                >
                  <span>
                    <Link to="detailcollection/Intendo">
                      {" "}
                      <img src="img/aaa.jpg" className="img" />{" "}
                    </Link>{" "}
                  </span>
                  {/*<span style="background: url('img/gr1.png') no-repeat 50%/cover;"><br>*/}
                  {/* <span  class="pbx">elements collection</span></span> */}
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ width: 360 }}
                  role="group"
                  aria-label="2 / 4"
                >
                  <span>
                    <Link to="detailcollection/Prism">
                      {" "}
                      <img src="img/bbb.jpg" className="img" />{" "}
                    </Link>
                  </span>
                  {/*<span style="background: url('img/gr2.png') no-repeat 50%/cover;"><br>*/}
                  {/* <span  class="pbx">absolute collection</span></span> */}
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: 360 }}
                  role="group"
                  aria-label="3 / 4"
                >
                  <span>
                    <Link to="detailcollection/Treaure">
                      {" "}
                      <img src="img/ccc.jpg" className="img" />{" "}
                    </Link>
                  </span>
                  {/*<span style="background: url('img/gr3.png') no-repeat 50%/cover;"><br>*/}
                  {/* <span  class="pbx">canvas collection</span></span> */}
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: 360 }}
                  role="group"
                  aria-label="4 / 4"
                >
                  <span>
                    <Link to="detailcollection/Vivid">
                      {" "}
                      <img src="img/ddd.jpg" className="img" />{" "}
                    </Link>
                  </span>
                  {/*<span style="background: url('img/gr4.png') no-repeat 50%/cover;">*/}
                  <br />
                  {/* <span  class="pbx">artwork collection</span></span> */}
                </div>
              </div>
              <span
                className="cursor3"
                style={{
                  left: "-20px",
                  top: "47.2219px",
                  opacity: 0,
                  transform: "scale(0)",
                }}
              />
              <button
                className="prev swiper-button-disabled swiper-button-lock"
                tabIndex={-1}
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-b1fc9a8a4d56aabf"
                aria-disabled="true"
              />
              <button
                className="next swiper-button-disabled swiper-button-lock"
                tabIndex={-1}
                aria-label="Next slide"
                aria-controls="swiper-wrapper-b1fc9a8a4d56aabf"
                aria-disabled="true"
              />
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
            <div className="paggination swiper-pagination-fraction swiper-pagination-lock">
              <span className="swiper-pagination-current">01</span> /{" "}
              <span className="swiper-pagination-total">01</span>
            </div>
          </div>
        </div>
      </div>
      <div className="director">
        <div className="container-full">
          <div
            className="heading heading1"
            data-scroll=""
            data-scroll-direction="horizontal"
            data-scroll-speed={21}
          >
            <span>Ocean </span>
          </div>
          <div
            className="heading heading2"
            data-scroll=""
            data-scroll-direction="horizontal"
            data-scroll-speed={21}
          >
            <span>Ceramica</span>
          </div>
          <div className="flex">
            <a href="#" className="img">
              <span
                style={{
                  background: 'url("img/factory.png") no-repeat 50%/cover',
                }}
              />
            </a>
            <a href="#" className="info">
              <span className="name">The Brand Foundations</span>
              <span className="opisanie">
                At Ocean Ceramica, we take immense pride in positioning
                ourselves as a global leader in the ceramics sector,
                establishing new standards through our steadfast commitment to
                technical and aesthetic brilliance. Our continuous pursuit of
                innovation and growth, coupled with our enduring values of
                social and environmental responsibility, have catapulted us to
                this esteemed position. Our remarkable success is attributed to
                our exceptional team, whose relentless dedication, limitless
                creativity, and unwavering passion shape our brand philosophy.
                We are dedicated to creating a positive impact on our
                surroundings and forging a sustainable future for generations to
                come. Welcome to Ocean Tiles, where excellence converges with
                sustainability.
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="objects">
        <div className="container">
          <div>
            <div className="heading">
              <span className="split">Presenting Exclusive</span>
              <span className="split">Decorative Capabilities</span>
            </div>
            <Link to="/collection" className="a">
              All Collection
            </Link>
          </div>
        </div>
        <div className="container-full">
          <div className="flex">
            <div className="col">
              {data &&
                data
                  .filter((item, index) => index < 2)
                  .map((item) => {
                    return (
                      <>
                        <div className="card">
                          <div className="img">
                            <Link to={"/detailcollection/" + item.Collection}>
                              <div className="img-w">
                                <span
                                  style={{
                                    background: `url(${item.Image}) no-repeat 50%/cover`,
                                  }}
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="flex">
                            <Link to={"/detailcollection/" + item.Collection}>
                              <span data-hover={item.Name}>{item.Name}</span>
                            </Link>
                            <Link to={"/detailcollection/" + item.Collection}>
                              <span data-hover="Explore more">
                                Explore more
                              </span>
                            </Link>
                            <Link to={"/detailcollection/" + item.Collection}>
                              {item.Collection}
                            </Link>
                          </div>
                        </div>
                      </>
                    );
                  })}
            </div>
            <div className="col" data-scroll="" data-scroll-speed={-1}>
              {data &&
                data
                  .filter((item, index) => index > 1 && index < 4)
                  .map((item) => {
                    return (
                      <>
                        <div className="card">
                          <div className="img">
                            <Link to={"/detailcollection/" + item.Collection}>
                              <div className="img-w">
                                <span
                                  style={{
                                    background: `url(${item.Image}) no-repeat 50%/cover`,
                                  }}
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="flex">
                            <Link to={"/detailcollection/" + item.Collection}>
                              <span data-hover={item.Name}>{item.Name}</span>
                            </Link>
                            <Link to={"/detailcollection/" + item.Collection}>
                              <span data-hover="Explore more">
                                Explore more
                              </span>
                            </Link>
                            <Link to={"/detailcollection/" + item.Collection}>
                              {item.Collection}
                            </Link>
                          </div>
                        </div>
                      </>
                    );
                  })}
            </div>
            <div className="col">
              {data &&
                data
                  .filter((item, index) => index > 3 && index < 6)
                  .map((item) => {
                    return (
                      <>
                        <div className="card">
                          <div className="img">
                            <Link to={"/detailcollection/" + item.Collection}>
                              <div className="img-w">
                                <span
                                  style={{
                                    background: `url(${item.Image}) no-repeat 50%/cover`,
                                  }}
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="flex">
                            <Link to={"/detailcollection/" + item.Collection}>
                              <span data-hover={item.Name}>{item.Name}</span>
                            </Link>
                            <Link to={"/detailcollection/" + item.Collection}>
                              <span data-hover="Explore more">
                                Explore more
                              </span>
                            </Link>
                            <Link to={"/detailcollection/" + item.Collection}>
                              {item.Collection}
                            </Link>
                          </div>
                        </div>
                      </>
                    );
                  })}
            </div>
          </div>
        </div>
        <div
          className="flex "
          style={{ marginTop: "-60px", marginBottom: 80 }}
        ></div>
      </div>
      <div style={{ background: "#232323", paddingBottom: 90, paddingTop: 90 }}>
        <div className="container">
          <div className=" flex">
            <div className="accordion ">
              <div
                className="left"
                style={{ width: "35%", float: "left", marginRight: "5%" }}
              >
                <div className="accordion__header is-active">
                  <h2>Corporate Headquarters</h2>
                  <span className="accordion__toggle" />
                </div>
                <p className="ani">
                  <span style={{ fontWeight: 400, letterSpacing: 1 }}></span>
                  <br />A hub bustling with business-suited experts. Within
                  these walls, our team crafts wonders. Our extensive network
                  links devoted partners in cities across the nation and beyond,
                  collaborating to forge cutting-edge solutions for our clients.
                  Ocean Ceramica offices are meticulously crafted to inspire and
                  foster collaboration, streamlining the process of creation.
                </p>
                <div className="accordion__header is-active">
                  <h2>Manufacturing units</h2>
                  <span className="accordion__toggle" />
                </div>

                <p className="ani">
                  <span style={{ fontWeight: 400, letterSpacing: 1 }}></span>
                  <br />
                  With a remarkable daily production capacity, our
                  state-of-the-art facility churns out 92,000 square meters of
                  top-quality porcelain tiles each day, setting new benchmarks
                  in the industry. Moreover, our proficiency extends to crafting
                  exquisite porcelain slabs, generating an impressive 14,000
                  square meters daily. At Ocean Ceramica, we're dedicated to
                  meeting your demands with unparalleled efficiency and
                  uncompromising quality.
                </p>
              </div>

              <div
                className=" right"
                style={{ width: "60%", float: "right", marginTop: "-80px" }}
                data-scroll=""
                data-scroll-speed={-1}
              >
                <img src="img/Ocean-3d.png" className="ani rounded border" />
              </div>

              {/* <div className="accordion__header">
                  <h2>Production Plants</h2>
                  <span className="accordion__toggle" />
                </div> */}
              {/* <div className="accordion__body">
                  <div
                    className="left"
                    style={{ width: "35%", float: "left", marginRight: "5%" }}
                  >
                    <p className="ani">
                      
Ocean Ceramica consistently captivates the market with its enchanting creations, leaving a lasting impression on customers.
                      <br />
                      Ocean Ceramica continually astounds the market with captivating offerings. Our fully integrated manufacturing facilities stand as a testament to our commitment. Equipped with cutting-edge machinery, our production units are capable of delivering large quantities of ceramic products while adhering to stringent industrial quality standards
                    </p>
                  </div>
                  <div
                    className=" right"
                    style={{
                      width: "60%",
                      float: "right",
                      marginTop: "-100px",
                    }}
                    data-scroll=""
                    data-scroll-speed={-1}
                  >
                    <img src="img/a3.jpg" className="ani" />
                  </div>
                </div> */}
              {/* <div className="accordion__header">
                  <h2>Display Emporium</h2>
                  <span className="accordion__toggle" />
                </div> */}
              {/* <div className="accordion__body">
                  <div
                    className="left"
                    style={{ width: "35%", float: "left", marginRight: "5%" }}
                  >
                    <p className="ani">
                    Our showcase space stands at the core of our offerings. Discover our diverse range by exploring our gallery. If you're keen on visiting and immersing yourself in our collections, we are here to assist you every step of the way.
                    </p>
                  </div>
                  <div
                    className=" right"
                    style={{
                      width: "60%",
                      float: "right",
                      marginTop: "-140px",
                    }}
                    data-scroll=""
                    data-scroll-speed={-1}
                  >
                    <img src="img/manufacturing.jpg" className="ani" />
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>

      {/*<div className="contacts pt-0">*/}
      {/*            <div className="container-full">*/}
      {/*                <div className="top mt-0">*/}
      {/*                    <form action="#">*/}
      {/*                        <div className="heading">*/}
      {/*                            <div className="split">Event & Exhibition</div>*/}
      {/*                        </div>*/}
      {/*                        <span style="margin-top: 15px; display: block; text-align: center;line-height: 1.6;">*/}
      {/*                           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">*/}
      {/*                              <ol className="carousel-indicators">*/}
      {/*                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>*/}
      {/*                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>*/}
      {/*                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>*/}
      {/*                              </ol>*/}
      {/*                              <div className="carousel-inner">*/}
      {/*                                <div className="carousel-item active" style="text-align:center;">*/}
      {/*                                    <a  className="fancybox" data-fancybox="gallery1" href="img/event.jpg">*/}
      {/*                                  <img className="d-block w-100" src="img/event.jpg"  alt="First slide">*/}
      {/*                                  </a>*/}
      {/*                                </div>*/}
      {/*                                <div className="carousel-item"  style="text-align:center;">*/}
      {/*                                     <a  className="fancybox" data-fancybox="gallery1" href="img/event.jpg">*/}
      {/*                                        <img className="d-block w-100" src="img/event.jpg" alt="Second slide">*/}
      {/*                                      </a>*/}
      {/*                                </div>*/}
      {/*                                <div className="carousel-item"  style="text-align:center;">*/}
      {/*                                    <a  className="fancybox" data-fancybox="gallery1" href="img/event.jpg">*/}
      {/*                                  <img className="d-block w-100" src="img/event.jpg" alt="Third slide">*/}
      {/*                                  </a>*/}
      {/*                                </div>*/}
      {/*                              </div>*/}
      {/*                            </div>*/}
      {/*                        <br><br>*/}
      {/*                        We attend exhibitions and events to meet people in person and show them what we have to offer. It's a great chance for<br>them to experience our products firsthand and understand their benefits. Plus, by participating in these events, we can spread the word about  <br>our brand and reach more people.*/}
      {/*                        <br>*/}
      {/*                        <br>   <a href="events.php" className="a">Learn more</a>*/}
      {/*                        </span>*/}
      {/*<br><br>*/}
      {/*                    </form>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*            </div>*/}

      {/* modals */}

      <div style={{ position: "fixed", bottom: 25, right: 25 }}>
        <a
          href="https://api.whatsapp.com/send?phone=%206359977277&text=%20Hello,%20I%20was%20going%20through%20your%20website,%20myself"
          target="_blank"
          style={{
            backgroundColor: "#25d366",
            padding: "10px 12px",
            borderRadius: "50%",
          }}
        >
          <i
            className="fa fa-whatsapp"
            style={{ fontSize: 36, color: "#fff" }}
          />
        </a>
      </div>
    </>
  );
};

export default Home;
