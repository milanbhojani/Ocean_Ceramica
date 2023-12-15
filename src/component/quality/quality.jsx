import React, { useEffect } from "react";

const Quality = () => {
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
          <h1 className="marquee" data-title="Quality">
            Quality
          </h1>
          <div className="top">
            <form>
              <div className="heading" style={{ textAlign: "left" }}>
                <div className="split">Quality </div>
                <div className="split">Assurance</div>
              </div>
              <p>
                <br />
                The quality of products and services is a major competitive
                differentiator. Quality assurance helps us manufacture and
                transport goods <br />
                <br />
                that are defect-free and fulfil the demands and expectations of
                our consumers worldwide. We make sure that customers who consume
                <br />
                <br />
                ceramic products from us be satisfied with the quality, which
                may lead to customer loyalty, repeat purchases, upsell, and
                advocacy.
                <br />
                <br />
                To ensure the customer satisfaction and product quality from raw
                material to finished product we perform following tests and
                inspections.
              </p>
            </form>
          </div>
        </div>
      </div>
      <section className="story-section">
        <div className="container">
          <div className="row ">
            {/* Content Column */}
            <div className="content-column col-xl-8 col-lg-6 col-md-12 col-sm-12 ">
              <div className="inner-column pr-0">
                <h2>Sample Matching Inspection:</h2>
                <div className="text pt-4">
                  <p>
                    {" "}
                    Sample matching inspection is a necessary stage before to
                    the manufacturing process, commencing with a physical
                    inspection of a trial or developed product sample prior to
                    production to discover any problems prior to mass
                    production.
                  </p>
                  <p>
                    During the sample checking process, we make sure that the
                    physical parameters of the product, such as size, surface,
                    and functional characteristics, should be verified against
                    the Master, design documents, ensuring the quality of the
                    sample meets specified requirements in order to avoid
                    quality problems during our manufacturing process, as well
                    as the reliability and consistency of the manufacturing
                    process and our final product.
                  </p>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="img/sample.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="story-section pt-0">
        <div className="container">
          <div className="row ">
            {/* Image Column */}
            <div className="image-column col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column pl-0">
                <div className="">
                  <img src="img/during.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* Content Column */}
            <div className="content-column col-xl-8 col-lg-6 col-md-12 col-sm-12 ">
              <div className="inner-column pr-0 pat-sm-5">
                <h2>During the Manufacturing Inspection:</h2>
                <div className="text pt-4">
                  <p>
                    {" "}
                    During the Manufacturing of fine ceramic products, During
                    Production Inspection (DPI) is taken. DPI is an inspection
                    service performed when 10-15% of units are produced.
                  </p>
                  <p>
                    During the manufacturing process, to guarantee that the
                    items are produced in accordance with the authorised
                    requirements. This permits us to remedy any problems
                    throughout the subsequent manufacturing process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="story-section pt-5 s-pading">
        <div className="container">
          <div className="row ">
            <div className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column pr-0">
                <h2>Pre-Shipment Inspection:</h2>
                <div className="text pt-4">
                  <p>
                    The Pre-Shipment Inspection (PSI) is a service that inspects
                    our products before they are sent to the buyer or packaged
                    on a pallet. It is one of the most crucial processes in the
                    quality assurance process and the most effective means of
                    inspecting items before they are distributed to buyers.
                  </p>
                  <p>
                    Ocean Ceramica guarantees that the finished product meets
                    the buyer's standards and is of high quality. It is
                    performed on the final batch of products in accordance with
                    standard Acceptable Quality Limits (AQL) criteria and
                    comprises a thorough assessment of the items, package, and
                    packaging material.
                  </p>
                </div>
              </div>
              <div className="inner-column pr-0">
                <div className="">
                  <img src="img/preship.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* Content Column */}
            <div className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
              <div className="inner-column pr-0">
                <div className="">
                  <img src="img/palletizing.jpg" alt="" />
                </div>
              </div>
              <div className="inner-column pr-0">
                <h2>Palletizing witnessing Inspection:</h2>
                <div className="text pt-4">
                  <p>
                    Palletizing witnessing inspection is the activity of
                    inspecting final products and materials that have been
                    palletized for shipping to ensure that they are securely
                    fastened and protected from harm.{" "}
                  </p>
                  <p>
                    Palletizing witnessing inspection is a thorough evaluation
                    of the items and materials, including the wood used to
                    construct pallets for transportation.
                  </p>
                  <p>
                    At Ocean Ceramica we thoroughly check the palletized items
                    and supplies, as well as the pallets themselves. The
                    inspection report will contain images and a full analysis of
                    the items and materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-section style-two news-section alternate">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-xl-9 col-lg-8 col-md-8 col-sm-12">
              <div className="inner-column">
                <h2>Product Testing</h2>
                <div className="text pt-2">
                  Product testing assists us in developing goods that are
                  trustworthy within specific technical parameters. In other
                  words, testing is a vital step for our product development
                  teams to do in order to deliver high-quality, long-lasting
                  goods. Most significantly, product testing may confirm that a
                  product is fit for widespread usage.
                </div>
                <h3>Tests conducted before, during and after production</h3>
                <div className="row clearfix">
                  <div className="column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <ul className="list-style-two pb-0 mb-0">
                      <li>- Dimensions and surface quality testing</li>
                      <li>- Water absorption testing</li>
                      <li>- Modulus of rupture/breaking strength testing</li>
                      <li>- Impact resistance testing</li>
                      <li>- Deep abrasion testing</li>
                      <li>- Surface abrasion testing</li>
                    </ul>
                  </div>
                  <div className="column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <ul className="list-style-two">
                      <li>- Thermal expansion testing</li>
                      <li>- Thermal shock resistance testing</li>
                      <li>- Moisture expansion testing</li>
                      <li>- Crazing resistance testing</li>
                      <li>- Frost resistance testing</li>
                      <li>- Chemical resistance testing</li>
                      <li>- Stain resistance testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-3 col-lg-4 col-md-4 col-sm-12">
              <div className="">
                <div className="image">
                  <img src="img/product.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="story-section pt-0 pb-0">
        <div className="container">
          <div className="row ">
            {/* Content Column */}
            <div className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
              <div className="inner-column pr-0">
                <h2>Pallet Packing</h2>
                <div className="text pt-4">
                  <p>
                    {" "}
                    At Ocean Ceramica Tile, we understand the importance of
                    safeguarding our delicate glazed porcelain tiles during
                    transport. That's why we employ meticulous pallet packaging
                    techniques.
                  </p>
                  <p>
                    {" "}
                    By securely stacking the tiles on pallets and reinforcing
                    them with strapping, we minimize the risk of damage
                    throughout the entire journey. Our commitment to protecting
                    your tiles ensures they arrive at their destination in
                    pristine condition, ready to enhance any space.
                  </p>
                  {/*<a href="https://www.essencetiles.com/pallet-packing/ESSENCE_PALLET_PACKAGING_%20Linkup%20PDF.pdf" target="_blank" className="theme-btn" type="submit" id="submit" name="submit">Download pdf </a>*/}
                  <a
                    type="button"
                    className="btn btn-info btn-lg"
                    href="/img/packing-details.pdf"
                    target="_blank"
                  >
                    Download pdf
                  </a>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="">
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
                    </ol>
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        style={{ textAlign: "center" }}
                      >
                        <a
                          href="/img/packing-details.pdf"
                          className="fancybox"
                          data-fancybox="gallery1"
                        >
                          <img src="/img/packing-1.png" />
                        </a>
                      </div>
                      <div
                        className="carousel-item"
                        style={{ textAlign: "center" }}
                      >
                        <a
                          href="/img/packing-details.pdf"
                          className="fancybox"
                          data-fancybox="gallery1"
                        >
                          <img src="img/packing-2.png" />
                        </a>
                      </div>
                      <div
                        className="carousel-item"
                        style={{ textAlign: "center" }}
                      >
                        <a
                          href="img/ESSENCE_PALLETS_PACKAGING_3.jpg"
                          className="fancybox"
                          data-fancybox="gallery1"
                        >
                          <img src="img/ESSENCE_PALLETS_PACKAGING_1.jpg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-section alternate">
        <div className="auto-container">
          <div className="row">
            {/* News Block */}
            <div className="news-block-two col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="inner-box">
                <div className="">
                  <figure className="image">
                    <img src="/img/container.gif" alt="" />
                  </figure>
                </div>
                <div className="caption-box">
                  <div className="inner">
                    <h3>
                      <a>Container Loading Inspection:</a>
                    </h3>
                    <p>
                      Container Loading Inspections verify that our completed
                      goods are appropriately packed and handled when loaded
                      into containers to ensure safe transit and delivery to the
                      ultimate destination in accordance with international
                      standards. This service is critical for preventing damage
                      while delivery.
                    </p>
                    <p>
                      Container Loading Inspections entail a thorough assessment
                      of the goods and materials being loaded into containers.
                      We thoroughly check the items and ensure that the
                      container is in good shape, clean, appropriately
                      fumigated, and sealed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quality;
