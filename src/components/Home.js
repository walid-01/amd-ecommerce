import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="intro">
        <img
          id="intro-img"
          src="https://cdn.shopify.com/s/files/1/0215/8508/files/RATIO_JEN_022_websize_1296x.jpg?v=1659035989"
          alt="ratio coffee"
        />
        <div id="intro-card">
          <div id="card-container">
            <h1 className="card-title">
              Make perfect coffee with the touch of a button
            </h1>
            <p className="card-subtitle">
              Finally, enjoy convenience without compromise
            </p>
            <button className="shop-now">Shop Now</button>
          </div>
        </div>
      </div>

      <div id="lineup">
        <h1 className="lineup-title">Meet the Ratio line-up</h1>
        <p className="lineup-subtitle">
          Every Ratio machine is inspired by the beautiful ritual of manual
          brewing, often called pour over. Many of us love the taste of pour
          over but not the attention to detail and precision required for a
          consistent result. Enter Ratio.
        </p>
        <div className="lineup-list">
          <Link to="/" className="lineup-link">
            <div className="lineup-item">
              <img
                id="ratio-six-img"
                src="//cdn.shopify.com/s/files/1/0215/8508/products/ratio6-black-A3_360x.jpg?v=1628633076 360w"
                alt="Ratio model six"
              />
              <p className="">SCA AWARD WINNER</p>
              <p className="item-name">Ratio Six</p>
              <button>Shop Six</button>
            </div>
          </Link>
          <Link to="/" className="lineup-link">
            <div className="lineup-item">
              <img
                id="ratio-six-img"
                src="//cdn.shopify.com/s/files/1/0215/8508/products/ratio6-black-A3_360x.jpg?v=1628633076 360w"
                alt="Ratio model six"
              />
              <p className="">SCA AWARD WINNER</p>
              <p className="item-name">Ratio Six</p>
              <button>Shop Six</button>
            </div>
          </Link>
          <Link to="/" className="lineup-link">
            <div className="lineup-item">
              <img
                id="ratio-six-img"
                src="//cdn.shopify.com/s/files/1/0215/8508/products/ratio6-black-A3_360x.jpg?v=1628633076 360w"
                alt="Ratio model six"
              />
              <p className="">SCA AWARD WINNER</p>
              <p className="item-name">Ratio Six</p>
              <button>Shop Six</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
