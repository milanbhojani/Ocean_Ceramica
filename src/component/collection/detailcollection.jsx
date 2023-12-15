import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import FA from "react-fontawesome";
import { FaBroom, FaHome, FaBuilding, FaHotel, FaSpa } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { LuSun } from "react-icons/lu";
import { CiHospital1, CiSettings } from "react-icons/ci";
import { RxDimensions } from "react-icons/rx";
import { CgGym } from "react-icons/cg";
import { GiFamilyHouse } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";

const Detailcollection = () => {
  const [data, setData] = useState(null);
  const [catalougeDetails, setCatalougeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { collection } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://primedseashore.backendless.app/api/data/collection"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        //find one collection from all collection array
        let temp = result.filter((item) => item.Name == collection);

        setData(temp[0]);
        setLoading(false);
        let scrollerTemp = window.scroller;
        const catalougeDetails = await fetch(
          "https://primedseashore.backendless.app/api/data/catalougeDetails"
        );
        if (!catalougeDetails.ok) {
          throw new Error("Network response was not ok");
        }
        let catlougeResult = await catalougeDetails.json();
        let tempCatlougeList = catlougeResult.filter(
          (item) => item.Collection == temp[0].Name
        );
        setCatalougeDetails(tempCatlougeList); // Update the state with the fetched data
        if (scrollerTemp) {
          scrollerTemp.update();
        }
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
  }, [data, catalougeDetails]);

  return (
    <>
      {/* content */}
      <>
        {!loading ? (
          <div className="contacts">
            <div className="container-full">
              <h1 className="marquee" data-title={data && data.Name}>
                {data && data.Name}
              </h1>
              <div className="top">
                <div className="heading" style={{ textAlign: "left" }}>
                  <div className="split">{data && data.Name} </div>
                  <div className="split">Collection</div>
                </div>
                <p
                  style={{
                    fontFamily: "cursive",
                  }}
                >
                  {data && data.Description}
                </p>

                <div className="main">
                  <div className="pt-3">
                    {/* <video autoplay>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="d-block w-100"
                            src={data && data.Image1}
                            alt="First slide"
                            loading="lazy"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            src={data && data.Image2}
                            alt="Second slide"
                            loading="lazy"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            src={data && data.Image3}
                            alt="Third slide"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="heading" style={{ textAlign: "left" }}>
                  <div className="split">Inventory</div>
                </div>
                <section className="services-section-two">
                  <div className="auto-container">
                    <div className="row clearfix">
                      {catalougeDetails &&
                        catalougeDetails.map((item) => {
                          return (
                            <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box ">
                                <div className="content">
                                  {/* <div class="icon-box">
                                  <span class="icon flaticon-house-1"><img src="img/a4.jpg" style="max-width: 35%;"> </span>
                              </div> */}
                                  <img
                                    src={item.Image}
                                    style={{ maxWidth: "25%", marginRight: 30 }}
                                  />
                                  <div className="w-100">
                                    <h3>
                                      <a>{item.Name}</a>
                                    </h3>
                                    <div className="text">
                                      Collection : {item.Collection}
                                    </div>
                                    <a
                                      href={item.DownloadLink}
                                      className="read-more btn btn-block btn-primary"
                                      target="_blank"
                                    >
                                      Download
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </section>
                <div className="heading" style={{ textAlign: "left" }}>
                  <div className="split">Features</div>
                </div>
                <div className="row">
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <GiChemicalDrop size={"2rem"} />
                        </h5>
                        <p className="card-text">Chemical Resistant</p>
                      </div>
                    </div>
                  </div>
                  {/* chemical Resistant */}
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <LuSun size={"2rem"} />
                        </h5>
                        <p className="card-text">Thermal Resistant</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <CiSettings size={"2rem"} />
                        </h5>
                        <p className="card-text">Easy Installation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <RxDimensions size={"2rem"} />
                        </h5>
                        <p className="card-text">Dimensionally Stable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading" style={{ textAlign: "left" }}>
                  <div className="split">Applications</div>
                </div>
                <div className="row">
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <FA name="home" size="2x"></FA>
                        </h5>
                        <p className="card-text">Residential</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h1 className="card-title">
                          <FaBuilding size={"2rem"} />
                        </h1>
                        <p className="card-text">Commercial</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <FaHotel size={"2rem"} />
                        </h5>
                        <p className="card-text">Hotel</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <CgGym size={"2rem"} />
                        </h5>
                        <p className="card-text">Gym</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <CiHospital1 size={"2rem"} />
                        </h5>
                        <p className="card-text">Hospital</p>
                      </div>
                    </div>
                  </div>
                  {/* chemical Resistant */}
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <FA name="plane" size="2x"></FA>
                        </h5>
                        <p className="card-text">Airport</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <FaSpa size={"2rem"} />
                        </h5>
                        <p className="card-text">Spa</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <GiFamilyHouse size={"2rem"} />
                        </h5>
                        <p className="card-text">Hall and Corridor</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3 p-3">
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          <BsThreeDots size={"2rem"} />
                        </h5>
                        <p className="card-text">And Many More</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="contacts">
            <div className="container-full">
              <h1 className="marquee" data-title={data && data.Name}>
                {data && data.Name}
              </h1>
              <div className="top">
                <form>
                  <div className="heading" style={{ textAlign: "left" }}>
                    <div className="split"> </div>
                    <div className="split">Collection</div>
                  </div>
                  <p>{data && data.Description}</p>
                </form>
              </div>
              <div className="main">
                <div className="pt-3">
                  {/* <video autoplay>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          src={data && data.Image1}
                          alt="First slide"
                          loading="lazy"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src={data && data.Image2}
                          alt="Second slide"
                          loading="lazy"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src={data && data.Image3}
                          alt="Third slide"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};
export default Detailcollection;
