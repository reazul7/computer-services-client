import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 bg-gray-200 md:h-screen h-full">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-9 col-lg-10 text-center">
          {/* Dashboard Header */}
        {loggedInUser.setUser ? (
          
            <div className="my-5">
              <h3 className="text-center text-xl">
                Welcome to Admin Dashboard
              </h3>
              <h3 className="text-center text-xl">
                Admin Name:{" "}
                <span className="font-bold text-green-600">
                  {" "}
                  {loggedInUser.name}
                </span>{" "}
              </h3>
            </div>
          
        ) : (
          <div>
            <div className="my-5">
              <h3 className="text-center text-xl">
                Welcome to User Dashboard
              </h3>
              <h3 className="text-center text-xl">
                User Name:{" "}
                <span className="font-bold text-green-600">
                  {" "}
                  {loggedInUser.name}
                </span>{" "}
              </h3>
            </div>

            <div className="font-semibold">
            <p className="text-center pt-28 pb-2">Want to buy any services??</p>
            <Link to="/">
              <p className="text-center py-2 bg-gray-100 w-4/12 mx-auto rounded shadow hover:text-gray-500">View all Services</p>
            </Link>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
