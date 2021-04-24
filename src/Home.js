import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home__row">
        <Product id="123" title="123" price={11.96} rating={5} image="" />
        <Product id="123" title="123" price={11.96} rating={5} image="" />
      </div>

      <div className="home__row">
        <Product id="123" title="123" price={11.96} rating={5} image="" />
        <Product id="123" title="123" price={11.96} rating={5} image="" />
        <Product id="123" title="123" price={11.96} rating={5} image="" />
      </div>

      <div className="home__row">
        <Product id="123" title="123" price={11.96} rating={5} image="" />
      </div>
    </div>
  );
}

export default Home;
