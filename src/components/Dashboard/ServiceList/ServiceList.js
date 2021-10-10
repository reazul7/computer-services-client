import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Swal from "sweetalert2";

const ServiceList = () => {
  const [showAllData, setShowAllData] = useState([]);

  useEffect(() => {
    fetch("https://warm-springs-45915.herokuapp.com/seeAllService?")
      .then((res) => res.json())
      .then((results) => setShowAllData(results));
  }, []);

  const handleStateChange = (state, id) => {
    // console.log("object");
    // console.log(state, id);

    fetch(`https://warm-springs-45915.herokuapp.com/updateSurviceById/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: state }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          fetch("https://warm-springs-45915.herokuapp.com/seeAllService")
            .then((res) => res.json())
            .then((results) => {
              setShowAllData(results);
            });
          Swal.fire({
            icon: "success",
            title: "Service Status Updated Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="container-fluid w-100">
      <div className="row">
        {/* sidebar */}
        <div className="col-md-3 col-lg-2 bg-gray-200 md:h-screen h-full">
          <Sidebar></Sidebar>
        </div>

        {/* Show all servies status */}
        <div className="col-md-9 col-lg-10 text-center pt-4">
        <p className="text-2xl font-bold pb-4 text-gray-700 animate-pulse">
            All ordered services view
          </p>
          <table className="table">
            <thead>
              <tr className="bg-gray-200 border-2 border-gray-300">
                <th>Sr No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Service Details</th>
                <th>Status</th>
              </tr>
            </thead>

            {/* Show all servies status info in table-body */}
            <tbody>
              {/* spinner */}
              {showAllData.length === 0 && (
                <div className="flex items-center justify-center h-full m-auto">
                  <div className="w-24 h-24 border-t-8 border-b-8 border-blue-500 rounded-full animate-spin"></div>
                </div>
              )}

              {/* all status info */}
              {showAllData.map((showData, index) => (
                <tr className="border-1 border-gray-300">
                  <td className="border-1 border-gray-300">{index + 1}</td>
                  <td className="border-1 border-gray-300">{showData.name}</td>
                  <td className="border-1 border-gray-300">{showData.email}</td>
                  <td className="border-1 border-gray-300">
                    {showData.service}
                  </td>
                  <td className="border-1 border-gray-300">
                    {showData.description.slice(0, 40)}
                  </td>

                  {/* dynamic dropdown */}
                  <td className="border-1 border-gray-300">
                    <div className="dropdown">
                      {/* default pending status */}
                      <button
                        className="btn btn-secondary dropdown-toggle capitalize"
                        // role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {showData.status}
                      </button>

                      {/* dynamic dropdown status */}
                      <ul
                        className="dropdown-menu bg-gray-300"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <button
                            onClick={() =>
                              handleStateChange("pending", showData._id)
                            }
                            className="dropdown-item"
                            href="/"
                          >
                            Pending
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleStateChange("working", showData._id)
                            }
                            className="dropdown-item"
                            href="/"
                          >
                            Working
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleStateChange("done", showData._id)
                            }
                            className="dropdown-item"
                            href="/"
                          >
                            Done
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
