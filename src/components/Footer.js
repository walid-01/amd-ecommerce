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
              <Link to="/processor/five">AMD Ryzen™ 5</Link>
            </li>
            <li>
              <Link to="/processor/seven">AMD Ryzen™ 7</Link>
            </li>
            <li>
              <Link to="/processor/nine">AMD Ryzen™ 9</Link>
            </li>
            <li>
              <Link to="/all">Shop All</Link>
            </li>
          </ul>
        </div>
        <div className="links-list">
          <h3 className="list-name">Learn</h3>
          <ul>
            <li>
              <a
                href="https://www.amd.com/en/processors/ryzen-compatible-memory"
                target="_blank"
                rel="noreferrer"
              >
                AMD Ryzen™ Compatible Memory
              </a>
            </li>
            <li>
              <a
                href="https://www.amd.com/en/processors/ryzen-thermal-solutions"
                target="_blank"
                rel="noreferrer"
              >
                AMD Recommended CPU Coolers
              </a>
            </li>
            <li>
              <a
                href="https://www.amd.com/en/processors/ryzen-storage-solutions"
                target="_blank"
                rel="noreferrer"
              >
                Partner PCIe® Gen Storage Drives
              </a>
            </li>
            <li>
              <a
                href="https://www.amd.com/en/processors/ryzen-5000-series"
                target="_blank"
                rel="noreferrer"
              >
                AMD Ryzen™ 5000 Series Desktop Processors
              </a>
            </li>
          </ul>
        </div>
        <div className="links-list">
          <h3 className="list-name">Company</h3>
          <ul>
            <li>
              <a
                href="https://www.amd.com/en/corporate.html"
                target="_blank"
                rel="noreferrer"
              >
                About AMD
              </a>
            </li>
            <li>
              <a
                href="https://www.amd.com/en/corporate/leadership.html"
                target="_blank"
                rel="noreferrer"
              >
                Management Team
              </a>
            </li>
            <li>
              <a
                href="https://www.amd.com/en/corporate-responsibility"
                target="_blank"
                rel="noreferrer"
              >
                Corporate Responsibilty
              </a>
            </li>
            <li>
              <a
                href="https://careers.amd.com/careers-home"
                target="_blank"
                rel="noreferrer"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="https://www.amd.com/en/corporate/contact"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="links-list">
          <h3 className="list-name">Community</h3>
          <ul>
            <li>
              <a
                href="https://community.amd.com/t5/support-forums/ct-p/supprtforums"
                target="_blank"
                rel="noreferrer"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="https://community.amd.com/t5/developers/ct-p/devgurus"
                target="_blank"
                rel="noreferrer"
              >
                Developer
              </a>
            </li>
            <li>
              <a
                href="https://community.amd.com/t5/red-team/ct-p/red-team"
                target="_blank"
                rel="noreferrer"
              >
                Red Team
              </a>
            </li>
          </ul>
        </div>
        <div className="links-list">
          <h3 className="list-name">News & Events</h3>
          <ul>
            <li>
              <a
                href="https://www.amd.com/en/newsroom.html"
                target="_blank"
                rel="noreferrer"
              >
                Newsroom
              </a>
            </li>
            <li>
              <a
                href="https://www.amd.com/en/events"
                target="_blank"
                rel="noreferrer"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="https://www.amd.com/en/corporate/newsroom-media"
                target="_blank"
                rel="noreferrer"
              >
                Media Library
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="socials">
        <div id="newsletter">
          <h3>Subscribe to our weekly newsletter to get updates</h3>
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
              <a
                href="http://www.facebook.com/amd"
                target="_blank"
                rel="noreferrer"
              >
                F
              </a>
            </p>
            <p>
              <a
                href="https://twitter.com/amd"
                target="_blank"
                rel="noreferrer"
              >
                T
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/amd"
                target="_blank"
                rel="noreferrer"
              >
                Insta
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com/user/amd?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
              >
                YT
              </a>
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
