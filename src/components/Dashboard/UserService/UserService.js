import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import ParticularUser from "../ParticularUser/ParticularUser";

const UserService = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [particularUser, setParticularUser] = useState([]);
  useEffect(() => {
    fetch(
      "https://warm-springs-45915.herokuapp.com/seeParticularService?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setParticularUser(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 bg-gray-200 md:h-screen h-full">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 col-lg-10 text-center">
          <div className="pt-5 pb-3 text-center justify-content-around font-bold">
            <h2 className="text-xl">
              <span className="text-blue-700">{loggedInUser.name}</span>'s all
              order List
            </h2>
          </div>
          <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {particularUser.length === 0 && (
              <div className="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {particularUser.map((user) => (
              <ParticularUser
                key={user._id}
                particularUser={user}
              ></ParticularUser>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserService;
