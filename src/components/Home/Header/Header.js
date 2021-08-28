import React, { useContext } from "react";
import logo from "../../../images/logo-com-service.svg";
import banner from "../../../images/pc-services-home-banner.png";
import apple from "../../../images/apple.png";
import asus from "../../../images/asus.png";
import dell from "../../../images/dell.png";
import hp from "../../../images/hp.png";
import lenevo from "../../../images/lenevo.png";
import razer from "../../../images/razer.png";
import "./Header.css";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  // const handleLogout = () => {
  //     setLoggedInUser({})
  //     sessionStorage.setItem('email', '')
  //     sessionStorage.setItem('displayName', '')
  //     sessionStorage.setItem('photoURL', '')
  // }

  return (
    <header>
      <div className="header pb-4">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light row ms-auto">
            <div className="col-md-4">
              <Link class="navbar-brand d-none d-sm-block" href="/">
                <img style={{ width: "50px" }} src={logo} alt="" /> 
                Computer Services
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
                    <Link className="nav-link fw-bold" to="dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a className="nav-link fw-bold" href="#contact">
                      Contact Us
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
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6 align-self-center ">
              <h1 className="text-xl">
                COMPUTER
                <br />
                <span className="text-2xl font-black">REPAIR &#38; SUPPORT</span>
              </h1>
              <p className="pb-3 text-lg">
                Best computer service provider in your town
              </p>
              <button className="btn-black w-25">Hire us</button>
            </div>
            <div className="col-md-6 align-self-center">
              <img className="img-fluid" src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row" style={{ filter: "grayscale(100%)" }}>
          <div className="col-md-2 col-sm-6 mb-3">
            <img
              style={{ height: "70px", width: "140px", margin: "auto" }}
              src={apple}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 col-sm-6 mb-3">
            <img
              style={{ height: "80px", width: "140px", margin: "auto" }}
              src={asus}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 col-sm-6 mb-3">
            <img
              style={{ height: "70px", width: "140px", margin: "auto" }}
              src={dell}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 col-sm-6 mb-3">
            <img
              style={{ height: "80px", width: "140px", margin: "auto" }}
              src={hp}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 col-sm-6 mb-3">
            <img
              style={{ height: "80px", width: "140px", margin: "auto" }}
              src={lenevo}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-2 col-sm-6 mb-3">
            <img
              style={{ height: "70px", width: "140px", margin: "auto" }}
              src={razer}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
