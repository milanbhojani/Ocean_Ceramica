import React from'react';

const catalogues =()=> {
    return (
  <>
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
            <span style={{ color: "#fff" }}>Catalogues</span>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div
    className="container catalogue-cantainer"
    style={{ paddingBottom: "0 !important" }}
  >
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="cat-img">
          <a href="wall-tiles.html">
            <img src="img/wall-tiles.jpg" />
          </a>
        </div>
        <div className="cat-title">
          <h3>WALL TILES</h3>
          <a href="wall-tiles.html">View all</a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="cat-img">
          <a href="gvt-pgvt.php">
            <img src="img/gvt-pgvt.jpg" />
          </a>
        </div>
        <div className="cat-title">
          <h3>GVT/PGVT</h3>
          <a href="gvt-pgvt.php">View all</a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="cat-img">
          <a href="porcelain.php">
            <img src="img/porcelain-tiles.jpg" />
          </a>
        </div>
        <div className="cat-title">
          <h3>PORCELAIN TILES</h3>
          <a href="porcelain.php">View all</a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="cat-img">
          <a href="full-body-vitrified-tiles.html">
            <img src="img/fullbody-vitrified-tiles.jpg" />
          </a>
        </div>
        <div className="cat-title">
          <h3>FULLBODY VITRIFIED TILES</h3>
          <a href="full-body-vitrified-tiles.html">View all</a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="cat-img">
          <a href="parking-tiles.html">
            <img src="img/parking-tiles.jpg" />
          </a>
        </div>
        <div className="cat-title">
          <h3>PARKING TILES</h3>
          <a href="parking-tiles.html">View all</a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="cat-img">
          <a href="step-risers.html">
            <img src="img/step-risers.jpg" />
          </a>
        </div>
        <div className="cat-title">
          <h3>STEP RISERS TILES</h3>
          <a href="step-risers.html">View all</a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="cat-img">
          <a href="double-charge.html">
            <img src="img/double-charged-vitrified-tiles.jpg" />
          </a>
        </div>
        <div className="cat-title">
          <h3>DOUBLE CHARGED VITRIFIED TILES</h3>
          <a href="double-charge.html">View all</a>
        </div>
      </div>
      {/*<div class="col-xl-3 col-lg-4 col-md-6">*/}
      {/*    <div class="cat-img">*/}
      {/*        <a href="pallet.php">*/}
      {/*            <img src="img/catalogue-mockup.jpg">*/}
      {/*        </a>*/}
      {/*    </div>*/}
      {/*    <div class="cat-title">*/}
      {/*        <h3> PALLET PACKAGING</h3>*/}
      {/*        <a href="pallet.php">View all</a>*/}
      {/*    </div>*/}
      {/*</div>*/}
    </div>
  </div>
</div>


  </>
    )
}

export default catalogues;