import React from 'react';

const Footer = () => {
  return (
    <>
        {/* footer */}
     <footer className="footer">
       <div className="container">
         <a href="contact.html" target="_blank" className="text1 underline">
           Stay in the know
         </a>
         <div className="info">
           <div className="col">
             <span>Social media</span>
             <ul>
               <li>
                 <i className="fa fa-instagram fsi" aria-hidden="true" />{" "}
                 <a
                   href="https://www.instagram.com/essencetiles/"
                   target="_blank"
                   className="underline"
                 >
                   Instagram
                 </a>
               </li>
               <li>
                 <i className="fa fa-facebook-official fsi" aria-hidden="true" />{" "}
                 <a
                   href="https://www.facebook.com/essencetiles"
                   target="_blank"
                   className="underline"
                 >
                   Facebook
                 </a>
               </li>
               <li>
                 <i className="fa fa-linkedin-square fsi" aria-hidden="true" />{" "}
                 <a
                   href="https://www.linkedin.com/company/essence-buildware-pvt-ltd"
                   target="_blank"
                   className="underline"
                 >
                   linkedin
                 </a>
               </li>
             </ul>
           </div>
           <div className="col">
             <span>
               {" "}
               <i className="fa fa-map-marker fsi" /> Address
             </span>
             <ul>
               <li>
                 <a
                   href="https://goo.gl/maps/naZWp5CLm91jTE9F7"
                   target="_blank"
                   className="underline"
                 >
                   <b>Essence Tiles</b>
                   <br />
                   CH-8 Eden Ceramic City,
                   <br /> Opp: Honest Hotel,
                   <br />
                   Near Omkar Petroleum,
                   <br />
                   8-A, National Highway, Lalpar, <br /> Morbi- 363 642, (Guj.)
                   INDIA.
                 </a>
               </li>
             </ul>
           </div>
           <div className="col">
             <span>
               <i className="fa fa-envelope fsi" /> Email
             </span>
             <ul>
               <li>
                 <a href="mailto:info@essencetiles.com" className="underline">
                   info@essencetiles.com
                 </a>
               </li>
             </ul>
           </div>
           <div className="col">
             <span>
               {" "}
               <i className="fa fa-phone fsi" /> Phone
             </span>
             <ul>
               <li>
                 <a href="tel:+918980077077" className="underline">
                   +91 97519 46677
                 </a>
               </li>
             </ul>
           </div>
         </div>
         <div className="bottom">
           <span className="left">
             {" "}
             2022 Essence Tiles. All rights reserved by Essence Buildware Private
             Limited.{" "}
           </span>
           {/*<div class="line"></div>*/}
           <span className="right" style={{ float: "right" }}>
             <span>
               Created by
               <a href="https://sfumatographica.com/" target="_blank">
                 {" "}
                 Sfumato
               </a>
             </span>
           </span>
         </div>
       </div>
     </footer>
    </>
  )
}

export default Footer;