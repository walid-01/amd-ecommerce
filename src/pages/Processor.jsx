import { useParams } from "react-router-dom";
import processors from "../data/items.json";
import "./Processor.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Processor = () => {
  const { cpu } = useParams();
  const { increaseCartQt, openCart } = useContext(CartContext);
  return (
    <div id="cpu" key={processors[cpu].id}>
      <img id="cpu-img" src={processors[cpu].image} alt="AMD CPU" />
      <div id="cpu-card">
        <div id="cpu-container">
          <h1>{processors[cpu].name}</h1>
          <p id="price">{processors[cpu].price}</p>
          <ul id="desc">
            {processors[cpu].desc.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <button
            className="btn-orange"
            onClick={() => {
              increaseCartQt(processors[cpu].id);
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
