import React, { useState, useEffect } from'react';
import {  useParams } from 'react-router-dom'


const ListCatalogues = (props) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams()
    useEffect(() => {
      const fetchData = async () => {
        console.log("category_id",id);
        try {
          const response = await fetch('https://jimpform.backendless.app/api/data/brouchers');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          let result = await response.json();
         
          result = result.filter(item => item.cat_id == id)
          setData(result); // Update the state with the fetched data
          console.log("brouchers",result);
        } catch (error) {
          setError(error); // Update the state in case of an error
        } finally {
          setLoading(false); // Set loading to false, indicating that the data has been fetched
        }
      }
      fetchData();
      },[]);



    return (<>
    <div className="contacts head-padding">
  <div className="container-full">
    <h1
      className="marquee"
      data-title="catalogue"
      style={{ color: "#7c7b7f36 !important" }}
    >
      catalogue
    </h1>
    <div className="top">
      <form action="#">
        <div className="heading">
          <div>
            <span style={{ color: "#fff" }}>WALL TILES</span>
          </div>
          {/* <div class="split" >Collection</div> */}
        </div>
      </form>
    </div>
  </div>
  <div className="container catalogue-cantainer">
    <ul className=" my-ul-list">
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30X45CM Decor Color </h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_DECOR_COLOR.pdf"
            download="30X45CM_DECOR_COLOR.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30X45cm Fish Series</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_FISH_SERIES.pdf"
            download="30X45CM_FISH_SERIES.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30X45cm Glossy Elevation</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_GLOSSY_ELEVATION.pdf"
            download="30X45CM_GLOSSY_ELEVATION.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30X45cm Glossy vol 01</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_GLOSSY_VOL-01.pdf"
            download="30X45CM_GLOSSY_VOL-01.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30X45cm Glossy Vol 02</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_GLOSSY_VOL-02.pdf"
            download="30X45CM_GLOSSY_VOL-02.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30X45cm Glossy Vol 03</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_GLOSSY_VOL-03.pdf"
            download="30X45CM_GLOSSY_VOL-03.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30X45cm High Gloss</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_HIGH-GLOSS.pdf"
            download="30X45CM_HIGH-GLOSS.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30x45cm Kitchen</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_KITCHEN.pdf"
            download="30X45CM_KITCHEN.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30x45cm Matt</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_MATT.pdf"
            download="30X45CM_MATT.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30x45cm Matt Elevation</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_MATT_ELEVATION.pdf"
            download="30X45CM_MATT_ELEVATION.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30x45cm Pooja Room</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_POOJA-ROOM.pdf"
            download="30X45CM_POOJA-ROOM.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30x45cm Sugar Series</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_SUGAR_SERIES.pdf"
            download="30X45CM_SUGAR_SERIES.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30x45cm Wall tiles</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X45CM_WALL_TILE.pdf"
            download="30X45CM_WALL_TILE.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">
            30x60cm Edition Collection Brochure
          </h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X60CM_EDITION_COLLECTION_BROCHURE.pdf"
            download="30X60CM_EDITION_COLLECTION_BROCHURE.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30x60cm Wall Tiles</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X60CM_WALL_TILES.pdf"
            download="30X60CM_WALL_TILES.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">30x60cm Exotic Surface</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/30X60CM_EXOTIC_SURFACE.pdf"
            download="30X60CM_EXOTIC_SURFACE.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">20x60cm Glossy Elevation</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/8x24_glossy_elevation.pdf"
            download="8x24_glossy_elevation.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">20x60cm Glossy</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/8x24_glossy.pdf"
            download="8x24_glossy.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">20x60cm Matt 1</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/8x24_matt_1.pdf"
            download="8x24_matt_1.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">20x60cm Matt 2</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/8x24_matt_2.pdf"
            download="8x24_matt_2.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <li className=" my-li-list">
        <div className="my-list-title">
          <h4 className="my-font crtext">20x60cm Matt Elevation</h4>
        </div>
        <div className="my-list-btn">
          <a
            href="https://essencetiles.com/admin/uploads/pdf/8x24_matt_elevation.pdf"
            download="8x24_matt_elevation.pdf"
            target="_blank"
            className="btn btn-light"
          >
            Download
          </a>
        </div>
      </li>
      <hr />
    </ul>
  </div>
</div>

    </>)}

export default ListCatalogues;