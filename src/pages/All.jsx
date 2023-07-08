import "../Styles/All.css";
import { Link } from "react-router-dom";

const All = () => {
  return (
    <div id="lineup">
      <h1>AMD Processors</h1>
      <div className="lineup-list">
        <Link to="/processor/five">
          <div className="lineup-item">
            <img
              className="lineup-img"
              src="https://drive.google.com/uc?export=view&id=1AUNChhHdhErUUYwgpeIZk06z5QjiyQEJ"
              alt="AMD Ryzen Five"
            />
            <h3>Ryzen™ 5 7600X</h3>
            <button className="btn-white">Buy Now</button>
          </div>
        </Link>
        <Link to="/processor/seven">
          <div className="lineup-item">
            <img
              className="lineup-img"
              src="https://drive.google.com/uc?export=view&id=1K4NLlSp_OePuZ1nmwVEXtKT4Utj6p4M8"
              alt="AMD Ryzen Seven"
            />
            <h3>Ryzen™ 7 7700X</h3>
            <button className="btn-white">Buy Now</button>
          </div>
        </Link>
        <Link to="/processor/nine">
          <div className="lineup-item">
            <img
              className="lineup-img"
              src="https://drive.google.com/uc?export=view&id=1dfHohnHKteFd_poqZLK6IB6-ozSfIGnn"
              alt="AMD Ryzen Nine"
            />
            <h3>Ryzen™ 9 7900X</h3>
            <button className="btn-white">Buy Now</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default All;
