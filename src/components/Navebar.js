import React from "react";
import { Link, withRouter } from "react-router-dom";

// all done with materialize css
// with Link, the app doesnt refresh
//withRouter we can access the history object

const Navbar = props => {
  console.log(props);
  return (
    <nav className="nav-wraper red darken-3">
      <div className="container">
        <a className="brand-logo">Pokemon (Router+Redux+axios)</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
