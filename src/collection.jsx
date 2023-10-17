import React from 'react';

const Collection = () => {
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
          <div className="split">Our Collection</div>
          {/* <div class="split"></div> */}
        </div>
        <span style={{ textAlign: "center", marginTop: 15, display: "block" }}>
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
      <div className="clearfix">
        {/* Team Block */}
        <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="img/abs0.jpg" alt="" className="img-fluid" />
              <div className="overlay-box">
                <ul className="social-icons">
                  <li>
                    <a href="absolute.html">view detail</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lower-content">
              <a href="absolute.html">
                <img src="img/abs.png" className="img-fluid " />{" "}
              </a>
              <div className="designation">
                With the Absolute Collection, elevate your spaces to new heights
                of refined elegance and indulge in the ultimate expression of
                architectural excellence.
              </div>
              <div className="designation btn-link">
                <a href="absolute.html" className="btn btn-secondary">
                  View Detail
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div className="inner-box ">
            <div className="image">
              <img src="img/canva0.jpg" alt="" />
              <div className="overlay-box">
                <ul className="social-icons">
                  <li>
                    <a href="canvas.html">view detail</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lower-content">
              <a href="canvas.html">
                <img src="img/canva.png" className="img-fluid " />{" "}
              </a>
              <div className="designation">
                Experience the artistic possibilities of our Canvas Collection,
                where GVT technology brings designs to life on a versatile
                canvas of varying sizes.
              </div>
              <div className="designation btn-link">
                <a href="canvas.html" className="btn btn-secondary">
                  View detail
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="img/element.jpg" alt="" />
              <div className="overlay-box">
                <ul className="social-icons">
                  <li>
                    <a href="element.html">View Detail</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lower-content">
              <a href="element.html">
                <img src="img/element-logo.png" className="img-fluid " />{" "}
              </a>
              <div className="designation">
                Elevate your space with a stunning range of porcelain flooring
                that embodies the essence of timeless beauty and durability.{" "}
              </div>
              <div className="designation btn-link">
                <a href="element.html" className="btn btn-secondary">
                  View Detail
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image">
              <img src="img/art0.jpg" alt="" />
              <div className="overlay-box">
                <ul className="social-icons">
                  <li>
                    <a href="artwork.html">view detail</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lower-content">
              <a href="artwork.html">
                <img src="img/art.png" className="img-fluid " />{" "}
              </a>
              <div className="designation">
                Explore the rich heritage of intricate patterns and geometric
                motifs, meticulously crafted into stunning pieces of art that
                redefine the boundaries of tile aesthetics.
              </div>
              <div className="designation btn-link">
                <a href="artwork.html" className="btn btn-secondary">
                  View Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <div class="container ptb-9rem">
          <div class="row">
              <div class="col-lg-3 col-md-6">
                  <div class="collection-img">
                      <img src="img/abs0.jpg">
                  </div>
                  <ul>
                      <li><img src="img/abs.png" class="abs-logo" alt=""></li>
                      <li class="text-center">
                          <p>The symbolizes Simplicity and Comfort of your space , we design this unique and mesmerizing collection.
                          </p>
                      </li>
                      <li class=" text-center"><a href="absolute.php" class="btn btn-secondary">View More</a></li>
                      
                  </ul>
              </div>
              
              <div class="col-lg-3 col-md-6">
                  <div class="collection-img">
                      <img src="img/canva0.jpg">
                  </div>
                  <ul>
                      <li class="text-center"><img src="img/canva.png" class="abs-logo"> </li>
                      <li class="text-center">
                          <p>Canvas collection has the power to delight and inspire, it can enhance everyday experiences with di分erent prospective.
                          </p>
                      </li>
                      <li class=" text-center"><a href="canvas.php" class="btn btn-secondary">View More</a></li>
                      
                  </ul>
              </div>

              
              <div class="col-lg-3 col-md-6">
                  <div class="collection-img">
                      <img src="img/element.jpg">
                  </div>
                  <ul>
                      <li class="text-center"><img src="img/element-logo.png" class="abs-logo"> </li>
                      <li class="text-center">
                          <p>The beauty of nature around us is one of the greatest blessings of God on us; we
                              accepted the things and crafted this collection.
                          </p>
                      </li>
                      <li class=" text-center"><a href="element.php" class="btn btn-secondary">View More</a></li>
                      
                  </ul>
              </div>
              
              <div class="col-lg-3 col-md-6">
                  <div class="collection-img">
                      <img src="img/art0.jpg">
                  </div>
                  <ul>
                      <li class="text-center"><img src="img/art.png" class="abs-logo"> </li>
                      <li class="text-center">
                          <p>Artwork collection is the quality inspiration for everyone; we take art as way and defining the world by verity of colours that can change the people living.
                          </p>
                      </li>
                      <li class=" text-center"><a href="artwork.php" class="btn btn-secondary">View More</a></li>
                      
                  </ul>
              </div>
              
          </div>
      </div> */}
</div>


    </>
  )
}

export default Collection;