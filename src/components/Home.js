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
            <h1 className="title">
              Make perfect coffee with the touch of a button
            </h1>
            <p className="subtitle">
              Finally, enjoy convenience without compromise
            </p>
            <button className="btn-green">Shop Now</button>
          </div>
        </div>
      </div>
      <div id="lineup">
        <h1>Meet the Ratio line-up</h1>
        <p className="subtitle centered-text">
          Every Ratio machine is inspired by the beautiful ritual of manual
          brewing, often called pour over. Many of us love the taste of pour
          over but not the attention to detail and precision required for a
          consistent result. Enter Ratio.
        </p>
        <div className="lineup-list">
          <Link to="/">
            <div className="lineup-item">
              <img
                id="ratio-six-img"
                src="//cdn.shopify.com/s/files/1/0215/8508/products/ratio6-black-A3_360x.jpg?v=1628633076 360w"
                alt="Ratio model six"
              />
              <h5 className="mini-subtitle">SCA AWARD WINNER</h5>
              <h3>Ratio Six</h3>
              <button className="btn-white">Shop Six</button>
            </div>
          </Link>
          <Link to="/">
            <div className="lineup-item">
              <img
                id="ratio-eight-img"
                src="//cdn.shopify.com/s/files/1/0215/8508/products/ratio8-white-walnut-glass-A2_ec9add25-30ff-46d7-9ff8-9389fae5e6eb_360x.jpg?v=1629843557 360w"
                alt="Ratio model eight"
              />
              <h5 className="mini-subtitle">OUR BEST-SELLING ORIGINAL</h5>
              <h3 className="item-name">Ratio Eight</h3>
              <button className="btn-white">Shop Eight</button>
            </div>
          </Link>
          <Link to="/">
            <div className="lineup-item">
              <img
                id="ratio-eight-set-img"
                src="//cdn.shopify.com/s/files/1/0215/8508/products/ratio-silver-parawood-thermal-A1_360x.jpg?v=1628810524 360w,"
                alt="Ratio model eight thermal set"
              />
              <h5 className="mini-subtitle">THE COMPLETE PACKAGE</h5>
              <h3 className="item-name">Ratio Eight Thermal Set</h3>
              <button className="btn-white">Shop Thermal Set</button>
            </div>
          </Link>
        </div>
      </div>
      <div id="slideshow"></div>
      <div id="qualities-container">
        <h1>The best part of your day just got better.</h1>
        <div id="qualities">
          <div className="quality">
            <img
              src="https://cdn.shopify.com/s/files/1/0215/8508/files/Ratio-Eight-Button-Dark-Cobalt_c69eb403-632d-4589-88e6-977249c8831f_540x.jpg?v=1619824019"
              alt="Machine simple controls"
            />
            <h2>Simplify your routine.</h2>
            <p className="centered-text">
              The Ratio removes variables like water temperature, extraction
              time, and pour over pattern so you can worry less about making
              your coffee, and more about drinking it.
            </p>
          </div>
          <div className="quality">
            <img
              src="https://cdn.shopify.com/s/files/1/0215/8508/files/Ratio-Eight-Brewing-White_8c8a671c-197d-443a-b349-87c0e1f3b06c_540x.jpg?v=1619824007"
              alt="Quality brewing"
            />
            <h2>Elevate your taste.</h2>
            <p className="centered-text">
              Making coffee at home or office shouldn’t feel like a compromise.
              We’ve engineered a <i>pour over</i> style system with the
              precision of high-end espresso machines. You’ll taste the
              difference.
            </p>
          </div>
          <div className="quality">
            <img
              src="https://cdn.shopify.com/s/files/1/0215/8508/files/Ratio-Eight-Tank-Silver_b7c7ef38-908e-4af4-95a4-e6bfc635679e_540x.jpg?v=1619823993"
              alt="Made with quality materials"
            />
            <h2>Enjoy it for life.</h2>
            <p className="centered-text">
              We avoid things like plastic screws, tabs, or pods. We use
              materials like cast metal, handblown borosilicate glass, and real
              hardwoods, and back every Ratio coffee machine with a 5 year
              warranty.
            </p>
          </div>
        </div>
      </div>

      <div id="comparison-container">
        <div id="comparsion-card">
          <h5 className="mini-subtitle">THE RIGHT RATIO FOR YOU</h5>
          <h3 className="title">Compare Ratio machines.</h3>
          <p>
            Whatever Ratio model you choose is the product of our closest
            attention to detail and commitment to incredible coffee. We've made
            it easy for you to compare each model side by side.
          </p>
          <button className="btn-green">Compare Models</button>
        </div>
        <div id="comparsion-img">
          <img
            src="https://cdn.shopify.com/s/files/1/0215/8508/files/compare-ratio-machines-six-eight-thermal_720x.jpg?v=1647458372"
            alt="ratio models"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
