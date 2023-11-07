import React from "react";
import Flag from 'react-world-flags'


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
                <div className="split">EXPORTER</div>
                {/* <div class="split"></div> */}
              </div>
              <span
                style={{
                  marginTop: 15,
                  textAlign: "center",
                  display: "block",
                }}
              >
                Ocean Ceramica Is Proud To Have A Presence In More Than 87+
                Countries Across The World.
              </span>
            </form>
          </div>
        </div>
        {/* create new secrtion with two col left side image and right side text responsive */}
        <section className="services-section-two top">
          <div className="row">
            <div className="col-md-6">
              <img src="img/export.png" style={{ width: "100%" }} />
            </div>
            <div className="col-md-6 content auto-container">
              <div className="abtext" id="block2" style={{ paddingTop: "0%" }}>
                <div className="container-full">
                  <div className="flex">
                    <h2 className="">{/*<span>Company Profile</span>*/}</h2>
                    <p className="col w-100">
                      <span>
                        {/*<span style="margin-bottom:12px"> <b> Essence: Unleashing the Power of Innovative Ceramic Products.</b></span><br>*/}
                        Ocean Ceramica Dispatch Centre is located about 184 kms
                        from Mundra port,the largest port in India.Well
                        connected, the port is easily accessible by road and its
                        geographical proximity and easy connectivity ensure
                        minimum time lag for a shipment. The port of Mundra is
                        frequented by all major shipping lines and provides
                        flexibility in choice of lines that can be used to send
                        shipments across the world without any obstacles as well
                        as on time. Ocean Ceramica has always expanded its
                        horizons of achievements by producing world-class
                        quality products. No wonder today Ocean Ceramica has
                        became a symbol of trust and synonym of Quality because
                        of its world class Quality and diversified product range
                        backed up by the prompt services. Our in-house export
                        division is a team of experienced & professional people
                        who are familiar with the international trends &
                        procedures. Ocean Ceramica has been expanding its base
                        by leaps & bounds with national as well as international
                        presence with exporting products to many countries.
                        <br />
                        <br />
                      </span>
                    </p>
                    <div className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section-two top">
          <div className="auto-container">
            <div class="row clearfix">
              <div class="col-md-12 mt-5 mb-5">
                <h1 class="text-center">Our Export Country</h1>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
                
                <Flag code={ 356 } />
           
                <h6 class="mt-1">India</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 250 } />
                <h6 class="mt-1">France</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 276 } />
                <h6 class="mt-1">Germany</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 300 } />
                <h6 class="mt-1">Greece</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 348 } />
                <h6 class="mt-1">Hungary</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 496 } />
                <h6 class="mt-1">Mongolia</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 504 } />
                <h6 class="mt-1">Morocco</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 528 } />
                <h6 class="mt-1">Netherlands</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 616 } />
                <h6 class="mt-1">Poland</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 620 } />
                <h6 class="mt-1">Portugal</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 634 } />
                <h6 class="mt-1">Qatar</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 642 } />
                <h6 class="mt-1">Romania</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 688 } />
                <h6 class="mt-1">Serbia</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 780 } />
                <h6 class="mt-1">Trinidad</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 826 } />
                <h6 class="mt-1">United Kingdom</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 840 } />
                <h6 class="mt-1">United States</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 784 } />
                <h6 class="mt-1">United Arab Emirates</h6>
              </div>
              <div class="col-lg-2 col-md-2 col-xs-4 text-center mb-4">
              <Flag code={ 380 } />
                <h6 class="mt-1">Italy</h6>
              </div>
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
  );
};

export default Export;
