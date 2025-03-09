import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <nav>
        <Link to="/">CRYPTO PRICES</Link> |
        <Link to="/currencies">CURRENCIES</Link>
      </nav>
    </div>
  );
}

export default Nav;
