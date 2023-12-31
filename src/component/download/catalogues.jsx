import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Catalogues = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://primedseashore.backendless.app/api/data/catalouge"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("catlouge --", result);
        //sort by sequence number
        result.sort((a, b) => (a.sequence > b.sequence ? 1 : -1));
        setData(result); // Update the state with the fetched data
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
      <div className="contacts head-padding">
        <div className="container-full">
          <h1 className="marquee" data-title="Catalogues">
            Catalogues
          </h1>
          <div className="top">
            <form>
              <div className="heading">
                <div className="split">Catalogues</div>
                {/* <div className="split"></div> */}
              </div>
            </form>
          </div>
        </div>
        <div
          className="container catalogue-cantainer"
          style={{ paddingBottom: "0 !important" }}
        >
          <div className="heading pb-3" style={{ textAlign: "left" }}>
            <div style={{ display: "block", position: "relative" }}>
              <span
                style={{
                  display: "inline-block",
                  transform: "translate(0px, 0px)",
                }}
              >
                Porcelain Tiles
              </span>{" "}
            </div>
          </div>
          <div className="row">
            {data &&
              data
                .filter((item) => item.Type === "tiles")
                .map((item) => {
                  return (
                    <>
                      <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="cat-img">
                          <Link to={"/brouchers/" + item.Name + "/all"}>
                            <img src={item.Image} className="rounded " alt="" />
                          </Link>
                        </div>
                        <div className="cat-title">
                          <h3>{item.Name}</h3>
                          <Link to={"/brouchers/" + item.Name + "/all"}>
                            View all
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })}
          </div>
          <div className="heading pb-3" style={{ textAlign: "left" }}>
            <div style={{ display: "block", position: "relative" }}>
              <span
                style={{
                  display: "inline-block",
                  transform: "translate(0px, 0px)",
                }}
              >
                Porcelain Slabs
              </span>{" "}
            </div>
          </div>
          <div className="row">
            {data &&
              data
                .filter((item) => item.Type === "slabs")
                .map((item) => {
                  return (
                    <>
                      <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="cat-img">
                          <Link to={"/brouchers/" + item.Name + "/all"}>
                            <img src={item.Image} className="rounded " alt="" />
                          </Link>
                        </div>
                        <div className="cat-title">
                          <h3>{item.Name}</h3>
                          <Link to={"/brouchers/" + item.Name + "/all"}>
                            View all
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogues;
