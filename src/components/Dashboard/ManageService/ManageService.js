import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Swal from "sweetalert2";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://warm-springs-45915.herokuapp.com/seeService")
      .then((res) => res.json())
      .then((results) => setServices(results));
  }, [services]);

  const handleDeleteService = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure to Delete this service?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://warm-springs-45915.herokuapp.com/deleteService/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              fetch("https://warm-springs-45915.herokuapp.com/seeService")
                .then((res) => res.json())
                .then((results) => setServices(results));
            }
          });
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 bg-gray-200 md:h-screen h-full">
          <Sidebar />
        </div>

        {/* manage-service area */}
        <div className="col-md-9 col-lg-10 text-center py-3">
          <p className="text-2xl font-bold pb-4 text-gray-700 animate-pulse">
            Manage any Service...
          </p>
          <table className="table">
            <thead>
              <tr className="bg-gray-200 border-2 border-gray-300">
                <th>Sr No</th>
                <th>Sr Id</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* Show all servies status info in table-body */}
            <tbody>
              {/* spinner */}
              {services.length === 0 && (
                <div class="flex items-center justify-center h-full m-auto">
                  <div class="w-24 h-24 border-t-8 border-b-8 border-blue-500 rounded-full animate-spin"></div>
                </div>
              )}
              {services.map((service, index) => (
                <tr className="border-1 border-gray-300">
                  <td className="border-1 border-gray-300">{index + 1}</td>
                  <td className="border-1 border-gray-300">{service._id}</td>
                  <td className="border-1 border-gray-300">{service.title}</td>
                  <td className="border-1 border-gray-300">{service.price}</td>
                  <td className="border-1 border-gray-300">
                    <button
                      className="bg-black px-2 py-2"
                      onClick={() => handleDeleteService(service._id)}
                    >
                      Delete
                    </button>
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

export default ManageService;
