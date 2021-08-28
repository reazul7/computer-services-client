import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {
  const { loggedInUser } = useContext(UserContext);
  const [admin, setAdmin] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    fetch("https://warm-springs-45915.herokuapp.com/setAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Admin Added successfully");
          e.target.value = "";
          e.target.reset();
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="text-center py-4 text-lg font-bold">
          <h2>Add admin</h2>
          <h4 className="text-blue-500 py-2">{loggedInUser.name}</h4>
        </div>
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 mt-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email ID"
                {...register("email", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
