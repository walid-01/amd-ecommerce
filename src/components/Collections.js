import { Link } from "react-router-dom";
import "./Collections.css";

const Collections = () => {
  return (
    <div id="catalog">
      <h1>Catalog</h1>
      <div id="catalog-list">
        <div className="catalog-item">
          <Link to="/collections/accessories">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/collections/Ratio_Accessories_Coffee_Collection_Hero_Spring_540x.jpg?v=1647460128"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Accessories & Coffee</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/best-sellers">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/products/ratio6-black-A3_540x.jpg?v=1628633076"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Best Sellers</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/cleaning-water-quality">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/products/ratio6-wash-A1_540x.jpg?v=1583879365"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Cleaning & Water Quality</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/espresso-grinders">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/products/Eureka-Mignon-Oro-Chrome-XL-KO-Hero_540x.png?v=1636742863"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Espresso Grinders</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/espresso-machines">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/collections/LUCCA-A53-Mini-Walnut-Espresso-Machine-Eureka-Mignon-XL-White-Grinder-04_540x.jpg?v=1636666752"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Espresso Machines</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/filters">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/collections/ratio-filters-narrow_540x.jpg?v=1640201426"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Filters</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/frontpage">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/products/ratio6-black-A3_540x.jpg?v=1628633076"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Frontpage</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/grinders">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/collections/ratio-grinders-hero_540x.jpg?v=1647450127"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Grinders</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/machines">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/products/ratio6-black-A3_540x.jpg?v=1628633076"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Machines</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/manual-brewing">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/collections/Ratio_Manual_Brewing_Collection_Hero_540x.jpg?v=1647459962"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Manual Brewing</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/mugs-cups">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/collections/ratio-cups-mugs-hero_540x.jpg?v=1647459853"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Mugs & Cups</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/notneutral">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/products/lino_mug_white_1080_540x.jpg?v=1628808912"
                alt=""
              />
            </div>
            <h3 className="catalog-title">notNeutral</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/ratio-accessories">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/collections/ratio-accessories-hero_540x.jpg?v=1647459700"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Ratio Accessories</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/roasters">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/products/ratio8-white-walnut-glass-A2_ec9add25-30ff-46d7-9ff8-9389fae5e6eb_540x.jpg?v=1629843557"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Roasters</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/sale">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/products/ratio6-stainless-A4_413e9489-3e91-4d49-8017-9729f90d61da_540x.jpg?v=1628882749"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Sale</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/shop">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/products/ratio8-white-walnut-glass-A2_ec9add25-30ff-46d7-9ff8-9389fae5e6eb_540x.jpg?v=1629843557"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Shop</h3>
          </Link>
        </div>
        <div className="catalog-item">
          <Link to="/collections/spare-parts">
            <div className="image-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0215/8508/products/ratio6-carafe-lidweb_540x.jpg?v=1605139997"
                alt=""
              />
            </div>
            <h3 className="catalog-title">Spare Parts</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;
