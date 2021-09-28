import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logo-com-service.svg";

const Sidebar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetch(
      `https://warm-springs-45915.herokuapp.com/admin?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const newUser = { ...loggedInUser };
          newUser.setUser = true;
          setLoggedInUser(newUser);
        } else {
          const newUser = { ...loggedInUser };
          newUser.setUser = false;
          setLoggedInUser(newUser);
        }
      })
  }, []);

  return (
    <div>
      <div className="mt-5 pl-5">
        <Link to="/">
          <img
            style={{ height: "50px" }}
            src={logo}
            className="img-fluid"
            alt=""
          />
        </Link>
      </div>

      <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-4 px-4">
        <ul className="list-unstyled">
          {loggedInUser.setUser ? (
            <div className="w-40">
              <li className="font-bold py-2 text-lg">
                <Link to="/serviceList">All Services Status</Link>
              </li>
              <li className="font-bold py-2 text-lg">
                <Link to="/addService">Add Service</Link>
              </li>
              <li className="font-bold py-2 text-lg">
                <Link to="/mainAdmin">Make Admin</Link>
              </li>
              <li className="font-bold py-2 text-lg">
                <Link to="/manageService">Manage Service</Link>
              </li>
            </div>
          ) : (
            <div className="w-40 ">
              <li className="font-bold py-2 text-lg">
                <Link to="/dashboard">User Dashboard</Link>
              </li>
              <li className="font-bold py-2 text-lg">
                <Link to="/user-service-list">Service list user</Link>
              </li>
              <li className="font-bold py-2 text-lg">
                <Link to="/review">Review</Link>
              </li>
            </div>
          )}
        </ul>
        <div className="py-2 font-bold py-2 text-lg">
          <Link to="/" className="btn-black hover:text-white">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
