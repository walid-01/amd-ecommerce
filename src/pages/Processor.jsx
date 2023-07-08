import { useParams } from "react-router-dom";
import processors from "../data/items.json";
import "../Styles/Processor.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Processor = () => {
  const { cpu } = useParams();
  const { increaseCartQt, openCart } = useContext(CartContext);
  const id = cpu === "five" ? 1 : cpu === "seven" ? 2 : 3;
  const item = processors.find((i) => i.id === id);
  return (
    <div id="cpu" key={item.id}>
      <img id="cpu-img" src={item.image} alt="AMD CPU" />
      <div id="cpu-card">
        <div id="cpu-container">
          <h1>{item.name}</h1>
          <p id="price">${item.price}</p>
          <ul id="desc">
            {item.desc.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <button
            className="btn-orange"
            onClick={() => {
              increaseCartQt(item.id);
              openCart();
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Processor;
