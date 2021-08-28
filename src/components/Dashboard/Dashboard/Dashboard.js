import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <div className="row">
        <div className="col-md-2 bg-light">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 my-5">
          <h3 className="text-center text-xl ">
            Welcome to  {" "} <span className="font-bold text-green-600"> {/* {loggedInUser.name} */}  Admin </span>{" "} Dashboard
          </h3>
          <h3 className="text-center text-xl ">
            Admin Email Name:  {" "} <span className="font-bold text-green-600"> {loggedInUser.name}  Admin </span>{" "} 
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
