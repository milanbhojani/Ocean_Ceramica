import React, { useEffect, useState } from "react";
import Flag from "react-world-flags";

const Export = () => {
  useEffect(() => {
    setTimeout(() => {
      let scrollerTemp = window.scroller;
      if (scrollerTemp) {
        scrollerTemp.update();
      }
    }, 500);
  }, []);

  const [country, setCountry] = useState([
    { Name: "Spain", Code: "ES" },
    { Name: "Germany", Code: "DE" },
    { Name: "Russia", Code: "RU" },
    { Name: "Turkey", Code: "TR" },
    { Name: "Mexico", Code: "MX" },
    { Name: "France", Code: "FR" },
    { Name: "greece", Code: "GR" },
    { Name: "United Kingdom", Code: "GB" },
    { Name: "Poland", Code: "PL" },
    { Name: "Belarus", Code: "BY" },
    { Name: "USA", Code: "US" },
    { Name: "Canada", Code: "CA" },
    { Name: "Brazil", Code: "BR" },
    { Name: "Colombia", Code: "CO" },
    { Name: "Peru", Code: "PE" },
    { Name: "Venezuela", Code: "VE" },
    { Name: "Jamaica", Code: "JM" },
    { Name: "Azerbaijan", Code: "AZ" },
    { Name: "Cyprus", Code: "CY" },
    { Name: "Iraq", Code: "IQ" },
    { Name: "Jordan", Code: "JO" },
    { Name: "Kuwait", Code: "KW" },
    { Name: "Lebanon", Code: "LB" },
    {
      Name: "Australia",
      Code: "AU",
    },
    { Name: "UAE", Code: "AE" },
    { Name: "Saudi Arabia", Code: "SA" },
    { Name: "Oman", Code: "OM" },
    { Name: "Qatar", Code: "QA" },
    { Name: "Israel", Code: "IL" },
    { Name: "Belgium", Code: "BE" },
    { Name: "Guatemala", Code: "GT" },
    { Name: "Singapore", Code: "SG" },
    { Name: "Egypt", Code: "EG" },
    { Name: "Vietnam", Code: "VN" },
    { Name: "Thailand", Code: "TH" },
    { Name: "Mauritius", Code: "MU" },
    { Name: "papua New Guinea", Code: "PG" },
    { Name: "Bolivia", Code: "BO" },
    { Name: "Ireland", Code: "IE" },
    { Name: "Romania", Code: "RO" },
    { Name: "Ukraine", Code: "UA" },
    {
      Name: "South Africa",
      Code: "ZA",
    },

    {
      Name: "New Zealand",
      Code: "NZ",
    },
    {
      Name: "Netherlands",
      Code: "NL",
    },
  ]);

  return (
    <>
      <div className="contacts">
        <div className="container-full">
          <h1 className="marquee" data-title="Export">
            Export
          </h1>
          <div className="top">
            <form action="#">
              <div className="heading">
                <div className="split">EXPORTER</div>
                {/* <div className="split"></div> */}
              </div>
              <span
                style={{
                  marginTop: 15,
                  textAlign: "center",
                  display: "block",
                }}
              >
                Ocean Ceramica Is Proud To Have A Presence In More Than 40+
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
                        from Mundra port,the largest port in India. Well
                        connected, the port is easily accessible by road and its
                        geographical proximity and easy connectivity ensure
                        minimum time lag for a shipment. The port of Mundra is
                        frequented by all major shipping lines and provides
                        flexibility in choice of lines that can be used to send
                        shipments across the world without any obstacles as well
                        as on time. Ocean Ceramica has always expanded its
                        horizons of achievements by producing world-className
                        quality products. No wonder today Ocean Ceramica has
                        became a symbol of trust and synonym of Quality because
                        of its world className Quality and diversified product
                        range backed up by the prompt services. Our in-house
                        export division is a team of experienced & professional
                        people who are familiar with the international trends &
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
            <div className="row clearfix">
              <div className="col-md-12 mt-5 mb-5">
                <h1 className="text-center">Our Export Country</h1>
              </div>
              {country.map((item, index) => {
                return (
                  <div className="col-lg-1 col-md-1 col-xs-1 text-center mb-1">
                    <Flag
                      code={item.Code}
                      height={"100px"}
                      width={"200px"}
                      style={{
                        height: "100px",
                        width: "200px",
                      }}
                    />
                    <h6 className="mt-1">{item.Name}</h6>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* <div className="container event">
                <div className="bottom is-inview" data-scroll="" data-scroll-speed="1" style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 6.47031, 0, 1);">
                    <div className="info enent">
      
                            <span className="opisanie"> <img src="img/event/event.png" className="event"> <a href="ace-reflect.php">ACE –
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
