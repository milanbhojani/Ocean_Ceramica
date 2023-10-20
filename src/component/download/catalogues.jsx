import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Catalogues =()=> {

 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jimpform.backendless.app/api/data/category');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          console.log(result);
          setData(result); // Update the state with the fetched data
        } catch (error) {
          setError(error); // Update the state in case of an error
        } finally {
          setLoading(false); // Set loading to false, indicating that the data has been fetched
        }
      }
      fetchData();
      },[]);

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
          {/* <div class="split"></div> */}
        </div>
       
      </form>
    </div>
  </div>
  <div
    className="container catalogue-cantainer"
    style={{ paddingBottom: "0 !important" }}
  >
    <div className="row">
      {data && data.map((item)=>{
        return(
        <>
         <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="cat-img">
          <Link to="/"> 
          {/* link redirect on single page */}
            <img src={item.image} className="rounded " alt="" />
          </Link>
        </div>
        <div className="cat-title">
          <h3>{item.name}</h3>
          <Link to={"/brouchers/"+item.objectId}>View all</Link>
        </div>
      </div>
        
        </>)
      }
      )
      }
     
      
    </div>

  </div>
</div>


  </>
    )
}

export default Catalogues;