import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect in collection");
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://primedseashore.backendless.app/api/data/collection"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("collection", result);
        //sort by sequence number
        result.sort((a, b) => (a.sequence > b.sequence ? 1 : -1));
        setData(result); // Update the state with the fetched data
        let scrollerTemp = window.scroller;
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
    }, 1000);
  }, [data]);

  return (
    <>
      <div className="contacts">
        <div className="container-full">
          <h1 className="marquee" data-title="our collection">
            our collection
          </h1>
          <div className="top">
            <form>
              <div className="heading">
                <div className="split"> Collection</div>
                {/* <div className="split"></div> */}
              </div>
              <span
                style={{ textAlign: "center", marginTop: 15, display: "block" }}
              >
                Discover our captivating tile collection, where artistry meets
                innovation. <br />
                <br />
                Elevate your spaces with our extraordinary tiles and create a
                masterpiece that truly reflects your unique vision.
              </span>
            </form>
          </div>
        </div>
        <section className="team-section style-two">
          <div className="container">
            <div className="clearfix row">
              {/* Team Block */}
              {data &&
                data.map((item) => {
                  return (
                    <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image">
                          <img src={item.Image} alt="" className="img-fluid" />
                          <div className="overlay-box">
                            <ul className="social-icons">
                              <li>
                                <Link to={"/detailcollection/" + item.Name}>
                                  View Details
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="lower-content">
                          <h2
                            style={{
                              fontFamily: "cursive",
                              fontSize: "2rem",
                            }}
                          >
                            <b>{item.Name}</b>
                          </h2>

                          <div className="btn btn-block">
                            <Link to={"/detailcollection/" + item.Name}>
                              View Details about {item.Name} Collection
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Collection;
