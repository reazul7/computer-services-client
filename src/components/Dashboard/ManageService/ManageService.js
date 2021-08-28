import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://warm-springs-45915.herokuapp.com/seeService")
      .then((res) => res.json())
      .then((results) => setServices(results));
  }, []);

  const handleDeleteService = (id) => {
    console.log(id);
    fetch(`https://warm-springs-45915.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Delete service successfully");
          fetch("https://warm-springs-45915.herokuapp.com/seeService")
            .then((res) => res.json())
            .then((results) => setServices(results));
        }
      });
      
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 col-sm-12">
          <table className="table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Sr Id</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{service._id}</td>
                  <td>{service.title}</td>
                  <td>{service.price}</td>
                  <td>
                    <button onClick={() => handleDeleteService(service._id)}>
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
