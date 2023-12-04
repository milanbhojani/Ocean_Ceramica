import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./component/home";
import Contact from "./component/contact/contact";
import About from "./component/about/about";
import Header from "./header";
import Footer from "./footer";
import Collection from "./component/collection/collection";
import Catalogues from "./component/download/catalogues";
import Quality from "./component/quality/quality";
import Export from "./component/events/export";
import LocomotiveScroll from "locomotive-scroll";
import ListCatalogues from "./component/download/listCatalouge";
import Infra from "./component/infrastructure/infra";
import Subcollection from "./component/collection/subcollection";
import Detailcollection from "./component/collection/detailcollection";

const Main = () => {
  return (
    <>
      <div data-scroll-container className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/catalogues" element={<Catalogues />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/export" element={<Export />} />

          <Route
            path="/brouchers/:id/:collection"
            element={<ListCatalogues />}
          />
          <Route path="/subcollection" element={<Subcollection />} />
          <Route
            path="/detailcollection/:collection"
            element={<Detailcollection />}
          />

          <Route path="/infra" element={<Infra />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default Main;
