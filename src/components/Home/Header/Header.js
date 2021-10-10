import banner from "../../../images/pc-services-home-banner.png";
import apple from "../../../images/apple.png";
import asus from "../../../images/asus.png";
import dell from "../../../images/dell.png";
import hp from "../../../images/hp.png";
import lenevo from "../../../images/lenevo.png";
import razer from "../../../images/razer.png";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {

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
          <NavBar />
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
              <a href="https://www.linkedin.com/in/reazul7/" target="_blank">
                <button className="bg-black rounded w-25 animate-pulse">Hire Me</button>
              </a>
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
