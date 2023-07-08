import "../Styles/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div id="not-found">
      <h1>ERROR - 404</h1>
      <h2>Sorry</h2>
      <p>The page you are looking for is not found</p>
      <p>
        Back to the <Link>homepage...</Link>
      </p>
    </div>
  );
};

export default NotFound;
