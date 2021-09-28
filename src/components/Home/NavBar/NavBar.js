import React, { useContext } from "react";
import logo from "../../../images/logo-com-service.svg";
import { UserContext } from "../../../App";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  let history = useHistory();

  const handleSignOut = () => {
    setLoggedInUser({});
    history.push("/");
  };
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
            <li class="nav-item active px-1">
              <Link
                className="nav-link fw-bold hover:bg-blue-300 rounded hover:shadow-xl"
                to=""
              >
                Home
              </Link>
            </li>
            <li class="nav-item px-1">
              <Link
                className="nav-link fw-bold hover:bg-blue-300 rounded hover:shadow-xl"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li class="nav-item px-1">
              <a
                className="nav-link fw-bold hover:bg-blue-300 rounded hover:shadow-xl"
                href="#contact"
              >
                Contact Us
              </a>
            </li>
            <li class="nav-item px-1">
              <a
                className="nav-link fw-bold hover:bg-blue-300 rounded hover:shadow-xl"
                href="#feedback"
              >
                Feed Back
              </a>
            </li>
            {loggedInUser.name ? (
              <Link to="/" className="nav-item">
                <button
                  onClick={handleSignOut}
                  className="nav-link fw-bold bg-black text-white rounded hover:shadow-xl"
                >
                  Signout
                </button>
              </Link>
            ) : (
              <Link to="/login" className="nav-item">
                <button className="nav-link fw-bold bg-black text-white rounded hover:shadow-xl">
                  Signin
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
