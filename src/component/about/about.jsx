import React from "react";

const About = () => {
  return (
    <>
      <div className="contacts">
        <h1 className="marquee" data-title="Ocean Ceramica">
          Ocean Ceramica
        </h1>
        <div className="top">
          <form>
            <div className="heading">
              <div className="split">All About Ocean Ceramica</div>
              {/* <div className="split"></div> */}
            </div>
            <span
              style={{ textAlign: "center", marginTop: 15, display: "block" }}
            >
              Unexpected beauty with tiles
            </span>
          </form>
        </div>
      </div>
      <div className="abtext" id="block2" style={{ paddingTop: "5%" }}>
        <div className="container-full">
          <div className="flex">
            <h2 className="col">{/*<span>Company Profile</span>*/}</h2>
            <p className="col">
              <span>
                {/*<span style="margin-bottom:12px"> <b> Essence: Unleashing the Power of Innovative Ceramic Products.</b></span><br>*/}
                At Ocean Ceramica, we go beyond traditional tile manufacturing.
                We are at the forefront of transforming the ceramic industry
                with our innovative products that redefine excellence. Our core
                mission is to eradicate existing system errors and empower our
                channel partners with in-depth knowledge about every Essence
                product. This ensures accurate information is delivered to end
                users, allowing our partners to maintain a competitive edge in
                the market.
                <br />
                <br />
                <span style={{ marginBottom: 12 }}>
                  <b> Setting New Horizons in Ceramics</b>
                </span>
                <br />
                Signifying the company's mission to push the boundaries of
                excellence in the ceramic industry
                <br />
                <br />
                <span style={{ marginBottom: 12 }}>
                  <b>Navigating Quality, Innovation, and Style</b>
                </span>
                <br />
                Emphasizing the company's commitment to delivering high-quality,
                innovative, and stylish ceramic products.
                <br />
                <br />
                <span style={{ marginBottom: 12 }}>
                  <b>Where Expertise Meets Elegance</b>
                </span>
                <br />
                Highlighting the company's expertise in ceramics and its
                dedication to creating elegant solutions.
                <br />
                <br />
                <span style={{ marginBottom: 12 }}>
                  <b>Waves of Inspiration for Your Space</b>
                </span>
                <br />
                Indicating the company's ability to provide inspirational
                ceramic solutions for various spaces.
              </span>
            </p>
            <div className="col" />
          </div>
        </div>
      </div>
      <div className="part " style={{ backgroundColor: "white !important" }}>
        <div className="container-full">
          <div className="part1 flex">
            <div className="col">
              <span>OCEAN Key Point</span>
            </div>
            <div className="col">
              <div className="card">
                <span className="year">
                  <img src="img/O.svg" />
                  <span className="name">Outstanding Quality</span>
                </span>
                <span className="geo geo-img">
                  We prioritize delivering products of exceptional quality,
                  ensuring our customers get the best.
                </span>
              </div>
              <div className="card">
                <span className="year">
                  <img src="img/c.svg" />
                  <span className="name">Creative Innovation</span>
                </span>
                <span className="geo geo-img">
                  Innovation and creativity drive our company, leading to
                  groundbreaking solutions and designs.
                </span>
              </div>
              <div className="card">
                <span className="year">
                  <img src="img/e.svg" />
                  <span className="name">Environmental Responsibility</span>
                </span>
                <span className="geo geo-img">
                  We are committed to eco-friendly practices, minimizing our
                  impact on the environment.
                </span>
              </div>
              <div className="card">
                <span className="year">
                  <img src="img/a.svg" />
                  <span className="name">Accessible Design</span>
                </span>
                <span className="geo geo-img">
                  Our designs are accessible, making stylish and functional
                  products available to all.
                </span>
              </div>
              <div className="card">
                <span className="year">
                  <img src="img/n.svg" />
                  <span className="name">Nurturing Partnerships</span>
                </span>
                <span className="geo geo-img">
                  We believe in nurturing strong partnerships, fostering growth
                  and success for all involved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
