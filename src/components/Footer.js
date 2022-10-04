import { Link } from "react-router-dom";
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <>
      <div id="quick-links">
        <div className="links-list">
          <h3 className="list-name">Shop</h3>
          <ul>
            <li>
              <Link to="/products/ratio-six">Ratio Six</Link>
            </li>
            <li>
              <Link to="/products/ratio-eight">Ratio Eight</Link>
            </li>
            <li>
              <Link to="/products/ratio-eight-thermal-set">
                Ratio Eight Thermal Set
              </Link>
            </li>
            <li>
              <Link to="/collections/espresso-machines">Espresso Machines</Link>
            </li>
            <li>
              <Link to="/collections/accessories">Accessories</Link>
            </li>
            <li>
              <Link to="/collections/shop">Shop All</Link>
            </li>
          </ul>
        </div>
        <div className="links-list">
          <h3 className="list-name">Learn</h3>
          <ul>
            <li>
              <Link to="/blogs/journal/how-to-brew-with-ratio-eight">
                How to brew with Ratio Eight
              </Link>
            </li>
            <li>
              <Link to="/blogs/journal/ratio-cold-brew">
                Cold brew on the Ratio Eight
              </Link>
            </li>
            <li>
              <Link to="/blogs/journal/why-does-the-ratio-eight-cost-so-much">
                Why does the Ratio Eight cost so much
              </Link>
            </li>
            <li>
              <Link to="/blogs/journal/comparing-the-ratio-eight-and-six">
                Ratio Eight versus Ratio Six
              </Link>
            </li>
            <li>
              <Link to="/blogs/journal/adjusting-your-grind">
                Adjusting your grind
              </Link>
            </li>
          </ul>
        </div>
        <div className="links-list">
          <h3 className="list-name">Support</h3>
          <ul>
            <li>
              <Link to="/pages/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/pages/warranty-request-form">Warranty</Link>
            </li>
            <li>
              <Link to="/pages/return-request-form">Returns</Link>
            </li>
            <li>
              <Link to="/collections/spare-parts">Spare Parts</Link>
            </li>
            <li>
              <Link to="/pages/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="https://help.ratiocoffee.com">Help Articles</Link>
            </li>
            <li>
              <Link to="/pages/accessbility">Accessiblity</Link>
            </li>
            <li>
              <Link to="/policies/shipping-policy">Shipping Policy</Link>
            </li>
          </ul>
        </div>
        <div className="links-list">
          <h3 className="list-name">Inside Ratio</h3>
          <ul>
            <li>
              <Link to="/pages/about">About Us</Link>
            </li>
            <li>
              <Link to="/pages/press-reviews">Press & Reviews</Link>
            </li>
            <li>
              <Link to="/pages/wholesale">Wholesale Info</Link>
            </li>
            <li>
              <Link to="/pages/where-to-buy-ratio">Ratio Retailers</Link>
            </li>
          </ul>
        </div>
        <div className="links-list">
          <h3 className="list-name">Great Coffee Everywhere</h3>
          <ul>
            <li>
              <Link to="/pages/office">Office</Link>
            </li>
            <li>
              <Link to="/pages/hotem">Hotel</Link>
            </li>
            <li>
              <Link to="/pages/restaurants">Restaurant</Link>
            </li>
            <li>
              <Link to="/pages/roaster">Roaster & Cafe</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="socials">
        <div id="newsletter">
          <h3>Get the inside scoop on coffee culture & brewing tips.</h3>
          <p>Please complete this required field.</p>
          <div id="newsletter-container">
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              autoComplete="email"
              inputMode="email"
            />
            <button>Submit</button>
          </div>
        </div>
        <div id="media">
          <h3>See the latest and follow us.</h3>
          <div>
            <p>
              <Link to="https://www.facebook.com/ratiocoffeemachines">Fb</Link>
            </p>
            <p>
              <Link to="https://www.pinterest.it/ratiocoffee/_created/">P</Link>
            </p>
            <p>
              <Link to="https://www.instagram.com/ratiocoffee/">Insta</Link>
            </p>
            <p>
              <Link to="https://www.youtube.com/channel/UCo-z46J2TXLLjKSTIyEPqXg?view_as=subscriber">
                Yt
              </Link>
            </p>
          </div>
        </div>
        <div>
          <div id="privacy-terms">
            <p>
              <Link to="/pages/privacy-security">Privacy Policy</Link>
            </p>
            <p>/</p>
            <p>
              <Link to="/pages/terms-of-service">Terms of Service</Link>
            </p>
          </div>
          <p id="copyright">Copyright C 2022 Ratio</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
