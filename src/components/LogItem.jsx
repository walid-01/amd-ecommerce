import "./LogItem.css";
import { Link } from "react-router-dom";
import processors from "../data/items.json";

const LogItem = ({ log }) => {
  const prods = log.products;
  // console.log(log.delivered);
  return (
    <div className="log-order">
      <h3 className="log-address">Delivery address: {log.address}</h3>
      <h3 className="log-address">Ordered At: {log.time}</h3>
      {prods.map((p) => (
        <div className="log-cpu">
          <Link
            to={`/processor/${
              p.id === 1 ? "five" : p.id === 2 ? "seven" : "nine"
            }`}
          >
            <img
              className="log-img"
              src={processors.find((i) => i.id === p.id).image}
              alt="cpu"
            />
          </Link>
          <div className="log-desc">
            <div className="log-quantity">
              <h2>{p.quantity}x</h2>
              <h2>{processors.find((i) => i.id === p.id).name}</h2>
            </div>
            <h2>${processors.find((i) => i.id === p.id).price * p.quantity}</h2>
          </div>
        </div>
      ))}
      <h3>Total price: ${log.price}</h3>
      {log.delivered && <h3>Status: Delivered</h3>}
      {!log.delivered && <h3>Status: Being delivered</h3>}
    </div>
  );
  // return <div id="log-item">{prods.map((p) => p.id)}</div>;
};

export default LogItem;
