import React, { useEffect } from "react";

const About = () => {
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
        <h1 className="marquee" data-title="About us">
          About us
        </h1>
        <div className="top">
          <form>
            <div className="heading">
              <div className="split">About us</div>
              {/* <div className="split"></div> */}
            </div>
            <span
              style={{ textAlign: "center", marginTop: 15, display: "block" }}
            >
              Ocean's : "Unexpected beauty with tiles"
            </span>
          </form>
        </div>
      </div>
      <div className="abtext" id="block2" style={{ paddingTop: "5%" }}>
        <div className="container-full">
          <div className="flex pb-5">
            <h2 className="col">{/*<span>Company Profile</span>*/}</h2>
            <p className="col text-justify">
              <span>
                {/*<span style="margin-bottom:12px"> <b> Essence: Unleashing the Power of Innovative Ceramic Products.</b></span><br>*/}
                <span
                  style={{
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  <b>We create luxurious spaces that can be lived in. </b>
                </span>
                <br />
                "Ocean Ceramica" is a reputable company with four manufacturing
                units and one export house. We are producing and exporting an
                exclusive range of porcelain tiles and porcelain slabs. Our
                tiles are manufactured using top-notch raw materials and
                employing proven techniques. Our tiles are well-known in the
                marketplace for their smooth finish, appealing designs,
                easy-to-clean features, and durability.
                <br />
                Ocean Ceramica is one of the most popular brands creating luxury
                innovations in the ceramic hub of Morbi, India. Iconic
                cutting-edge architectural surfaces with advanced technological
                characteristics. Ocean Ceramica continues to research and create
                new designs according to new trends and technologies. We aim to
                keep motivating people and create bright, vibrant settings that
                can be fully appreciated.
                <br />
                The owner, Kishan Patel has traveled the globe from Asia to
                Europe, America, Australia, and Latin America for more than 7
                years to gain endless ideas to export building materials from
                India to the world. Therefore, the journey experience and
                working with different people have shaped him into an expert in
                product quality.
                <br />
              </span>
            </p>
            <div className="col" />
          </div>
        </div>
      </div>
      <div
        className="part pb-5"
        style={{ backgroundColor: "white !important" }}
      >
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
