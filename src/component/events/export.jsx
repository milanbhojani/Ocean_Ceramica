import React from'react';

const Export = () => {
    return (
     <>
     <div className="contacts">
        <div className="container-full">
          <h1 className="marquee" data-title="Ocean Ceramica">
          Ocean Ceramica
          </h1>
          <div className="top">
            <form action="#">
              <div className="heading">
                <div className="split">Events &amp; Exhibition</div>
                {/* <div class="split"></div> */}
              </div>
              <span style={{ marginTop: 15, textAlign: "center", display: "block" }}>
                With the right planning and preparation Essence team has been
                participating in many national and international <br />
                <br />
                exhibitions and events, we organise and sponsor events and exhibitions
                that promote our range of products, as <br />
                <br />
                well as the expos with whom we collaborate. Allows us to reach a
                broader audience and spread awareness.
              </span>
            </form>
          </div>
        </div>
        <section className="services-section-two top">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Service Block */}
              <div className="service-block-two col-lg-6 col-md-12 col-sm-12">
                <div className="inner-box ">
                  <div className="content">
                    {/* <div class="icon-box">
                                        <span class="icon flaticon-house-1"><img src="img/a4.jpg" style="max-width: 35%;"> </span>
                                    </div> */}
                    <img
                      src="img/event-view.png"
                      style={{ maxWidth: "25%", marginRight: 30 }}
                    />
                    <div>
                      <h3>
                        <a href="ace-reflect.html">ACE – Reflect</a>
                      </h3>
                      <div className="text">
                        ACE REFLECT aims to multiply the legacy of ACETECH – Asia’s
                        largest B2B networking platform.
                      </div>
                      <a href="ace-reflect.html" className="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-block-two col-lg-6 col-md-12 col-sm-12">
                <div className="inner-box ">
                  <div className="content">
                    {/* <div class="icon-box">
                                        <span class="icon flaticon-house-1"><img src="img/a4.jpg" style="max-width: 35%;"> </span>
                                    </div> */}
                    <img
                      src="img/gthm.jpg"
                      style={{ maxWidth: "25%", marginRight: 30 }}
                    />
                    <div>
                      <h3>
                        <a href="dubai.html">The Big 5 - Dubai</a>
                      </h3>
                      <div className="text">
                        Ocean Ceramica participated in the biggest construction and
                        material exhibition in the world, <br />
                        <br />
                      </div>
                      <a href="dubai.html" className="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*   <div class="service-block-two col-lg-6 col-md-12 col-sm-12">*/}
              {/*    <div class="inner-box ">*/}
              {/*        <div class="content">*/}
              {/* <div class="icon-box">
                        <!--                <span class="icon flaticon-house-1"><img src="img/a4.jpg" style="max-width: 35%;"> </span>*/}
              {/*            </div> */}
              {/*            <img src="img/event-view.png" style="max-width: 25%; margin-right: 30px;">*/}
              {/*           <div>*/}
              {/*            <h3><a href="guahati.php">ACE – Reflect -Guwahati</a></h3>*/}
              {/*            <div class="text">ACE REFLECT aims to multiply the legacy of ACETECH – Asia’s*/}
              {/*                largest B2B networking platform. <br><br></div>*/}
              {/*            <a href="guahati.php" class="read-more">Read More</a>*/}
              {/*           </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </section>
        {/* <div class="container event">
                <div class="bottom is-inview" data-scroll="" data-scroll-speed="1" style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 6.47031, 0, 1);">
                    <div class="info enent">
      
                            <span class="opisanie"> <img src="img/event/event.png" class="event"> <a href="ace-reflect.php">ACE –
                                Reflect</a>
                        </span>
      
                    </div>                    
                </div>
            </div> */}
      </div>
</>      
    )
}

export default Export;