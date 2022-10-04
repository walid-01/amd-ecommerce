import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="intro">
        <img
          id="intro-img"
          src="https://cdn.shopify.com/s/files/1/0215/8508/files/Ratio_Feb_22_-_Matte_Black_Eight_Hearth_1_1296x.jpg?v=1664210967"
          alt="ratio coffee"
        />
        <div id="intro-card">
          <div id="card-container">
            <h1>Make perfect coffee with the touch of a button</h1>
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
              <h3 className="mini-subtitle">SCA AWARD WINNER</h3>
              <h2>Ratio Six</h2>
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
          <h3>Compare Ratio machines.</h3>
          <p>
            Whatever Ratio model you choose is the product of our closest
            attention to detail and commitment to incredible coffee. We've made
            it easy for you to compare each model side by side.
          </p>
          <button className="btn-green">Compare Models</button>
        </div>
        <div id="comparison-img">
          <img
            src="https://cdn.shopify.com/s/files/1/0215/8508/files/compare-ratio-machines-six-eight-thermal_720x.jpg?v=1647458372"
            alt="ratio models"
          />
        </div>
      </div>
      <div id="setups-container">
        <h1>Complete your ratio setup.</h1>
        <div id="setups">
          <Link>
            <div className="setup">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/files/Ratio_Grinder_Collection_Tile_540x.jpg?v=1641408511"
                alt=""
              />
              <div>
                <h5 className="mini-subtitle">SHOP</h5>
                <h2>Grinders</h2>
              </div>
            </div>
          </Link>
          <Link>
            <div className="setup">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/files/Ratio_Accessories_Collection_Tile_Spring_540x.jpg?v=1647458755"
                alt=""
              />
              <div>
                <h5 className="mini-subtitle">SHOP</h5>
                <h2>Ratio Accessories</h2>
              </div>
            </div>
          </Link>
          <Link>
            <div className="setup">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/files/Ratio_Mugs_Cups_Collection_Tile_540x.jpg?v=1641407815"
                alt=""
              />
              <div>
                <h5 className="mini-subtitle">SHOP</h5>
                <h2>Mugs & Cups</h2>
              </div>
            </div>
          </Link>
          <Link>
            <div className="setup">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/files/Ratio_Brewing_Collection_Tile_Spring_540x.jpg?v=1647459448"
                alt=""
              />
              <div>
                <h5 className="mini-subtitle">SHOP</h5>
                <h2>Manual Brewing</h2>
              </div>
            </div>
          </Link>
          <Link>
            <div className="setup">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/files/ratio-accessories-tile-image_540x.jpg?v=1640201218"
                alt=""
              />
              <div>
                <h5 className="mini-subtitle">SHOP</h5>
                <h2>Filters</h2>
              </div>
            </div>
          </Link>
          <Link>
            <div className="setup">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/collections/LUCCA-A53-Mini-Walnut-Espresso-Machine-Eureka-Mignon-XL-White-Grinder-04_540x.jpg?v=1636666752"
                alt=""
              />
              <div>
                <h5 className="mini-subtitle">SHOP</h5>
                <h2>Espreso Machines</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div id="latest">
        <h1>The latest from the journal.</h1>
        <div id="events">
          <div className="event">
            <Link>
              <img
                src="//cdn.shopify.com/s/files/1/0215/8508/articles/Ratio_Feb_22_-_Matte_Black_Eight_Hearth_1_800x550_crop_center.jpg?v=1664211228"
                alt=""
              />
            </Link>

            <p>September 2022</p>
            <Link>
              <h3>Every 10th Ratio Eight Is Free...</h3>
            </Link>
          </div>
          <div className="event">
            <Link>
              <img
                src="//cdn.shopify.com/s/files/1/0215/8508/articles/RATIO_JEN_043_websize_800x550_crop_center.jpg?v=1659035688"
                alt=""
              />
            </Link>

            <p>August 2022</p>
            <Link>
              <h3>Service Design with Jen Macias</h3>
            </Link>
          </div>
          <div className="event">
            <Link>
              <img
                src="//cdn.shopify.com/s/files/1/0215/8508/articles/PushXPull_20191113_0213_800x550_crop_center.jpg?v=1654821419"
                alt=""
              />
            </Link>

            <p>June 2022</p>
            <Link>
              <h3>Christopher Hall's Coffee Conversion</h3>
            </Link>
          </div>
          <div className="event">
            <Link>
              <img
                src="//cdn.shopify.com/s/files/1/0215/8508/articles/2022-05-20_Bigwig_Donuts-1025782_websize_800x550_crop_center.jpg?v=1653341952"
                alt=""
              />
            </Link>

            <p>May 2022</p>
            <Link>
              <h3>
                It'd be better for you ti try abd fail, than never to do
                anything at all.
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
