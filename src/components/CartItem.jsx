import { Link } from "react-router-dom";
import "./CartItem.css";
import processors from "../data/items.json";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartItem = ({ id, quantity }) => {
  const { increaseCartQt, decreaseCartQt } = useContext(CartContext);
  // let name = "";
  // if (id === 1) name = "five";
  // else if (id === 2) name = "seven";
  // else name = "nine";
  // const item = processors[name];
  const item = processors.find((i) => i.id === id);

  return (
    <li className="cart-item">
      <Link to={"/processor/" + id}>
        <img
          className="cart-img"
          src="https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-770-02.jpg"
          alt="ryzen 5"
        />
      </Link>
      <div>
        <h3>{item.name}</h3>
        <div className="quantity">
          <div className="change-qt">
            <button className="svg-button" onClick={() => decreaseCartQt(id)}>
              <svg className="svg" viewBox="0 0 20 20">
                <path
                  fill="#444"
                  d="M17.543 11.029H2.1A1.032 1.032 0 0 1 1.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"
                ></path>
              </svg>
            </button>
            <p className="qt-nb">{quantity}</p>
            <button className="svg-button" onClick={() => increaseCartQt(id)}>
              <svg className="svg" viewBox="0 0 20 20">
                <path
                  fill="#444"
                  d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"
                ></path>
              </svg>
            </button>
          </div>
          <p className="quantity-price">${item.price * quantity}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
