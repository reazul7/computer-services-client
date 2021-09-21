import React, { useContext } from "react";
import logo from "../../../images/logo-com-service.svg";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-md navbar-light row ms-auto">
      <div className="col-md-4 text-center">
        <Link class="navbar-brand flex text-center justify-center pb-2" to="/">
          <img style={{ width: "50px" }} src={logo} alt="" />
          <span className="pt-2 pl-2">Computer Services</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="col-md-8">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item active">
              <Link className="nav-link fw-bold" to="">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link fw-bold" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <a className="nav-link fw-bold" href="#contact">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link fw-bold" href="#feedback">
                FeedBack
              </a>
            </li>
            {loggedInUser.name ? (
              <h5 className="p-2">{loggedInUser.name}</h5>
            ) : (
              <Link to="/login" className="mx-auto">
                <button className="btn-black ml-3">LogIn</button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
