import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ListCatalogues = (props) => {
  const [data, setData] = useState(null);
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id, collection } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      console.log("category_id", id, collection);
      try {
        const response = await fetch(
          "https://primedseashore.backendless.app/api/data/catalougeDetails"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let result = await response.json();
        console.log("catlouge --", result);
        if (collection == "all") {
          result = result.filter((item) => item.Catalouge == id);
        }
        // else {
        //   result = result.filter(
        //     (item) => item.cat_id == id && item.collection == collection
        //   );
        // }
        setData(result); // Update the state with the fetched data
        console.log("cat details", result);
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
          <h1 className="marquee" data-title="catalogue">
            catalogue
          </h1>
          <div className="top">
            <form action="#">
              <div className="heading">
                <div>
                  <span>Catalogue</span>
                </div>
                {/* <div className="split" >Collection</div> */}
              </div>
            </form>
          </div>
        </div>
        <div className="container catalogue-cantainer">
          <div className="row">
            {data &&
              data.map((item) => {
                return (
                  <>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="cat-img">
                        <img src={item.Image} className="rounded " alt="" />
                      </div>
                      <div className="cat-title">
                        <h3>{item.Name}</h3>
                        <a href={item.DownloadLink} target="_blank">
                          Download
                        </a>
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

export default ListCatalogues;
