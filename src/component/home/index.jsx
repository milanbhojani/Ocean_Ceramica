import React from'react';
import video from './tiles.mp4';

const Home = () => {
    return (
      <>
        {/* onb content */}
        <div className="main">
          <div>
            {/* <video autoplay>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <img src="img/ww.jpg" className="img pt-3" />
          </div>
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
              <p className="pt-4" style={{textAlign:"justify",lineHeight:"initial"}}>
                
                From our very inception, Ocean has been a beacon of uncompromising quality in the ceramic industry.
                
                We take pride in presenting our exquisite range of collections that transcend the ordinary, drawing inspiration from the raw and untamed beauty of nature.
                
                With our products, we aim to capture the true essence of nature in its purest forms, creating surfaces that are not just visually stunning but also an embodiment of art and innovation
                
                in its purest forms, creating surfaces that are not just
                visually stunning, but also an embodiment of art and innovation.
              </p>
              <br />
              <br />
              <a href="collection.html" className="a">
                View Collection
              </a>
            </div>
          </div>
          <div className="container-full">
            <div className="center" data-scroll="" data-scroll-speed={4}>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <span>
                      <a href="element.html">
                        {" "}
                        <img src="img/collection_01.jpg" className="img" />{" "}
                      </a>{" "}
                    </span>
                    {/*<span style="background: url('img/gr1.png') no-repeat 50%/cover;"><br>*/}
                    {/* <span  class="pbx">elements collection</span></span> */}
                  </div>
                  <div className="swiper-slide">
                    <span>
                      <a href="absolute.html">
                        {" "}
                        <img src="img/collection_02.jpg" className="img" />{" "}
                      </a>{" "}
                    </span>
                    {/*<span style="background: url('img/gr2.png') no-repeat 50%/cover;"><br>*/}
                    {/* <span  class="pbx">absolute collection</span></span> */}
                  </div>
                  <div className="swiper-slide">
                    <span>
                      <a href="canvas.html">
                        {" "}
                        <img src="img/collection_03.jpg" className="img" />{" "}
                      </a>{" "}
                    </span>
                    {/*<span style="background: url('img/gr3.png') no-repeat 50%/cover;"><br>*/}
                    {/* <span  class="pbx">canvas collection</span></span> */}
                  </div>
                  <div className="swiper-slide">
                    <span>
                      <a href="artwork.html">
                        {" "}
                        <img src="img/collection_04.jpg" className="img" />{" "}
                      </a>{" "}
                    </span>
                    {/*<span style="background: url('img/gr4.png') no-repeat 50%/cover;">*/}
                    <br />
                    {/* <span  class="pbx">artwork collection</span></span> */}
                  </div>
                </div>
                <span className="cursor3" />
                <button className="prev" />
                <button className="next" />
              </div>
              <div className="paggination">
                <span /> / <span />
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
              <span>Ocean  </span>
            </div>
            <div
              className="heading heading2"
              data-scroll=""
              data-scroll-direction="horizontal"
              data-scroll-speed={21}
            >
              <span></span>
            </div>
            <div className="flex">
              <a href="#" className="img">
                <span
                  style={{
                    background: 'url("img/director.jpg") no-repeat 50%/cover',
                  }}
                />
              </a>
              <a href="#" className="info">
                <span className="name">The Brand Foundations</span>
                <span className="opisanie">
                At Ocean Ceramica, we take immense pride in positioning ourselves as a global leader in the ceramics sector, establishing new standards through our steadfast commitment to technical and aesthetic brilliance. Our continuous pursuit of innovation and growth, coupled with our enduring values of social and environmental responsibility, have catapulted us to this esteemed position. Our remarkable success is attributed to our exceptional team, whose relentless dedication, limitless creativity, and unwavering passion shape our brand philosophy. We are dedicated to creating a positive impact on our surroundings and forging a sustainable future for generations to come. Welcome to Ocean Tiles, where excellence converges with sustainability.
                </span>
              </a>
              <a href="about.html" className="a">
                Learn more
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
              <a href="collection.html" className="a">
                All Collection
              </a>
            </div>
          </div>
          <div className="container-full">
            <div className="flex">
              <div className="col">
                <div className="card">
                  <div className="img">
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=60x120cm&collection_id=17">
                      <div className="img-w">
                        <span
                          style={{
                            background:
                              'url("img/gvtpgvt.jpg") no-repeat 50%/cover',
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="flex">
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=60x120cm&collection_id=17">
                      <span data-hover="GVT/PGVT">GVT/PGVT </span>
                    </a>
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=60x120cm&collection_id=17">
                      <span data-hover="Explore more">Explore more</span>
                    </a>
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=60x120cm&collection_id=17">
                      {" "}
                      120x60cm
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <a href="#">
                      <div className="img-w">
                        {/*<span style="background:url('img/gvt33.jpg') no-repeat 50%/cover;"></span>*/}
                        <span
                          style={{
                            background:
                              'url("img/previes/can/ANVI-TUSK.jpg") no-repeat 50%/cover',
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="flex">
                    <a href="#">
                      <span data-hover="AURIKA">AURIKA</span>
                    </a>
                    <a href="#">
                      <span data-hover="Explore more">Explore more</span>
                    </a>
                    <a href="#">120X180cm</a>
                  </div>
                </div>
              </div>
              <div className="col" data-scroll="" data-scroll-speed={-1}>
                <div className="card">
                  <div className="img">
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=60x120cm&collection_id=6">
                      <div className="img-w">
                        <span
                          style={{
                            background:
                              'url("img/ele.jpg") no-repeat 50%/cover',
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="flex">
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=60x120cm&collection_id=6">
                      <span data-hover="Engrave Collection">
                        Engrave Collection
                      </span>
                    </a>
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=60x120cm&collection_id=6">
                      <span data-hover="Explore more">Explore more</span>
                    </a>
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=60x120cm&collection_id=6">
                      120X60cm
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=80x160cm&collection_id=21">
                      <div className="img-w">
                        <span
                          style={{
                            background:
                              'url("img/gvt22.jpg") no-repeat 50%/cover',
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="flex">
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=80x160cm&collection_id=21">
                      <span data-hover="GVT / PGVT">GVT / PGVT </span>
                    </a>
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=80x160cm&collection_id=21">
                      <span data-hover="Explore more">Explore more</span>
                    </a>
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=80x160cm&collection_id=21">
                      160x80cm
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="img">
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=30x60cm&collection_id=5">
                      <div className="img-w">
                        <video
                          src="img/es.mp4"
                          muted=""
                          autoPlay=""
                          loop=""
                          playsInline=""
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="flex">
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=30x60cm&collection_id=5">
                      <span data-hover="Exotic Surface">Exotic Surface</span>
                    </a>
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=30x60cm&collection_id=5">
                      <span data-hover="Explore more">Explore more</span>
                    </a>
                    <a href="https://essencetiles.com/sub-collection.php?collection_slug=30x60cm&collection_id=5">
                      60x30cm
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <a href="#">
                      <div className="img-w">
                        {/*<img src="img/previes/can/SAINT-LAURENT-BLACK.jpg" >*/}
                        <span
                          style={{
                            background:
                              'url("img/previes/can/SAINT-LAURENT-BLACK.jpg") no-repeat 50%/cover',
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="flex">
                    <a href="#">
                      <span data-hover="SPREAD">Spread</span>
                    </a>
                    <a href="#">
                      <span data-hover="Explore more">Explore more</span>
                    </a>
                    <a href="#">120x280cm</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex "
            style={{ marginTop: "-80px", marginBottom: 80 }}
          >
            <a href="collection.html" className="rotate">
              <span
                className="bg"
                style={{
                  background: 'url("img/more.png") no-repeat 50%/contain',
                }}
              />
              <span className="burger" />
            </a>
          </div>
        </div>
        <div
          style={{ background: "#232323", paddingBottom: 90, paddingTop: 90 }}
        >
          <div className="container">
            <div className=" flex">
              <div className="accordion ">
                <div className="accordion__header is-active">
                  <h2>Corporate Headquarters</h2>
                  <span className="accordion__toggle" />
                </div>
               
                  <div
                    className="left"
                    style={{ width: "35%", float: "left", marginRight: "5%" }}
                  >
                    <p className="ani">
                      <span style={{ fontWeight: 400, letterSpacing: 1 }}>
                      </span>
                      <br />A hub bustling with business-suited experts.
                      Within these walls, our team crafts wonders.
Our extensive network links devoted partners in cities across the nation and beyond, collaborating to forge cutting-edge solutions for our clients. Ocean Ceramica offices are meticulously crafted to inspire and foster collaboration, streamlining the process of creation.
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
        <div className="aobjects">
          <div className="container-full">
            <div className="bottom" data-scroll="" data-scroll-speed={1}>
              <div className="info">
                <span className="name">
                Exhibition 
                  <br />
                  &amp; Appearances
                </span>
                <span className="opisanie">
                We actively engage in exhibitions and events to connect with individuals face-to-face, showcasing our offerings. This unique opportunity allows attendees to experience our products directly, comprehending their advantages firsthand. Moreover, our presence at these events enables us to promote our brand widely, extending our outreach to a broader audience.
                </span>
                <a href="events.html" className="a">
                  Learn more
                </a>
                <br />
                <br />
              </div>
              <div
                className="card card22"
                style={{ border: "none", backgroundColor: "#fff0 !important" }}
              >
                <div className="slider-class">
                  <section className="sliders ">
                    {/* 3d Slider */}
                    <div
                      className="cascade-slider_container"
                      id="cascade-slider"
                    >
                      <div className="cascade-slider_slides">
                        <div className="cascade-slider_item ">
                          <a
                            className="fancybox"
                            data-fancybox="gallery1"
                            href="img/event/1.jpg"
                          >
                            <img src="img/event/1.jpg" />
                          </a>
                        </div>
                        <div className="cascade-slider_item ">
                          <a
                            className="fancybox"
                            data-fancybox="gallery1"
                            href="img/event/2.jpg"
                          >
                            <img src="img/event/2.jpg" />
                          </a>
                        </div>
                        <div className="cascade-slider_item ">
                          <a
                            className="fancybox"
                            data-fancybox="gallery1"
                            href="img/event/3.jpg"
                          >
                            <img src="img/event/3.jpg" />
                          </a>
                        </div>
                        <div className="cascade-slider_item ">
                          <a
                            className="fancybox"
                            data-fancybox="gallery1"
                            href="img/event/4.jpg"
                          >
                            <img src="img/event/4.jpg" />
                          </a>
                        </div>
                        <div className="cascade-slider_item">
                          <a
                            className="fancybox"
                            data-fancybox="gallery1"
                            href="img/event/5.jpg"
                          >
                            <img src="img/event/5.jpg" />
                          </a>
                        </div>
                      </div>
                      <span
                        className="cascade-slider_arrow cascade-slider_arrow-left"
                        data-action="prev"
                      >
                        {/*<i class="fa-solid fa-chevron-left"></i>*/}
                        <i className="fa fa-angle-left" />
                      </span>
                      <span
                        className="cascade-slider_arrow cascade-slider_arrow-right"
                        data-action="next"
                      >
                        {/*<i class="fa-solid fa-chevron-right"></i>*/}
                        <i className="fa fa-angle-right" />
                      </span>
                    </div>
                  </section>
                  {/*<div class="img-w">*/}
                  {/*    <span style="background: url('img/event.jpg') no-repeat 50%/cover"></span>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div class="contacts pt-0">*/}
        {/*            <div class="container-full">*/}
        {/*                <div class="top mt-0">*/}
        {/*                    <form action="#">*/}
        {/*                        <div class="heading">*/}
        {/*                            <div class="split">Event & Exhibition</div>*/}
        {/*                        </div>*/}
        {/*                        <span style="margin-top: 15px; display: block; text-align: center;line-height: 1.6;">*/}
        {/*                           <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">*/}
        {/*                              <ol class="carousel-indicators">*/}
        {/*                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>*/}
        {/*                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>*/}
        {/*                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>*/}
        {/*                              </ol>*/}
        {/*                              <div class="carousel-inner">*/}
        {/*                                <div class="carousel-item active" style="text-align:center;">*/}
        {/*                                    <a  class="fancybox" data-fancybox="gallery1" href="img/event.jpg">*/}
        {/*                                  <img class="d-block w-100" src="img/event.jpg"  alt="First slide">*/}
        {/*                                  </a>*/}
        {/*                                </div>*/}
        {/*                                <div class="carousel-item"  style="text-align:center;">*/}
        {/*                                     <a  class="fancybox" data-fancybox="gallery1" href="img/event.jpg">*/}
        {/*                                        <img class="d-block w-100" src="img/event.jpg" alt="Second slide">*/}
        {/*                                      </a>*/}
        {/*                                </div>*/}
        {/*                                <div class="carousel-item"  style="text-align:center;">*/}
        {/*                                    <a  class="fancybox" data-fancybox="gallery1" href="img/event.jpg">*/}
        {/*                                  <img class="d-block w-100" src="img/event.jpg" alt="Third slide">*/}
        {/*                                  </a>*/}
        {/*                                </div>*/}
        {/*                              </div>*/}
        {/*                            </div>*/}
        {/*                        <br><br>*/}
        {/*                        We attend exhibitions and events to meet people in person and show them what we have to offer. It's a great chance for<br>them to experience our products firsthand and understand their benefits. Plus, by participating in these events, we can spread the word about  <br>our brand and reach more people.*/}
        {/*                        <br>*/}
        {/*                        <br>   <a href="events.php" class="a">Learn more</a>*/}
        {/*                        </span>*/}
        {/*<br><br>*/}
        {/*                    </form>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            </div>*/}
        <section className="story-section pt-5">
          <div className="container">
            <div className="row ">
              {/* Image Column */}
              <div className="image-column col-xl-7 col-lg-7 col-md-7 col-sm-12">
                <div className="inner-column pl-0">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active"
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={1}
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={2}
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={3}
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={4}
                      />
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={5}
                      />
                    </ol>
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        style={{ textAlign: "center" }}
                      >
                        <a
                          className="fancybox"
                          data-fancybox="gallery1"
                          href="img/certificate/ce.jpg"
                        >
                          <img
                            className="d-block w-100"
                            src="img/certificate/ce.jpg"
                            style={{ maxWidth: 300 }}
                            alt="First slide"
                          />
                        </a>
                      </div>
                      <div
                        className="carousel-item"
                        style={{ textAlign: "center" }}
                      >
                        <a
                          className="fancybox"
                          data-fancybox="gallery1"
                          href="img/certificate/ISO-9001.jpg"
                        >
                          <img
                            className="d-block w-100"
                            src="img/certificate/ISO-9001.jpg"
                            style={{ maxWidth: 300 }}
                            alt="Second slide"
                          />
                        </a>
                      </div>
                      <div
                        className="carousel-item"
                        style={{ textAlign: "center" }}
                      >
                        <a
                          className="fancybox"
                          data-fancybox="gallery1"
                          href="img/certificate/ISO-14001.jpg"
                        >
                          <img
                            className="d-block w-100"
                            src="img/certificate/ISO-14001.jpg"
                            style={{ maxWidth: 300 }}
                            alt="Third slide"
                          />
                        </a>
                      </div>
                      <div
                        className="carousel-item"
                        style={{ textAlign: "center" }}
                      >
                        <a
                          className="fancybox"
                          data-fancybox="gallery1"
                          href="img/certificate/ISO-45001.jpg"
                        >
                          <img
                            className="d-block w-100"
                            src="img/certificate/ISO-45001.jpg"
                            style={{ maxWidth: 300 }}
                            alt="Third slide"
                          />
                        </a>
                      </div>
                      <div
                        className="carousel-item"
                        style={{ textAlign: "center" }}
                      >
                        <a
                          className="fancybox"
                          data-fancybox="gallery1"
                          href="img/certificate/ukca.jpg"
                        >
                          <img
                            className="d-block w-100"
                            src="img/certificate/ukca.jpg"
                            style={{ maxWidth: 300 }}
                            alt="Third slide"
                          />
                        </a>
                      </div>
                      <div
                        className="carousel-item"
                        style={{ textAlign: "center" }}
                      >
                        <a
                          className="fancybox"
                          data-fancybox="gallery1"
                          href="img/certificate/buildware.png"
                        >
                          <img
                            className="d-block w-100"
                            src="img/certificate/buildware.png"
                            style={{ maxWidth: 300 }}
                            alt="Third slide"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div class="image-column col-xl-2  col-lg-2 col-md-1 col-sm-12"></div>*/}
              {/* Content Column */}
              <div className="content-column col-xl-5 col-lg-5 col-md-5 col-sm-12 aobjects pt-0">
                <div className="inner-column pr-0 pat-sm-5 bottom pl-5 ml-5 mt-0">
                  <div
                    className="info"
                    style={{ maxWidth: "500px !important" }}
                  >
                    <span className="name">
                      Our <br />
                      certifications
                    </span>
                    <span className="opisanie">
                      All our products are manufactured keeping in mind the
                      international benchmarks.We believe in delivering
                      uncompromised quality with superior value, our systems and
                      practices are certified by the World’s most stringent
                      certification bodies.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
}

export default Home;