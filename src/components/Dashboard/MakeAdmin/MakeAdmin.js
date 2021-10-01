import { useContext, useState } from "react";
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
        <div className="col-md-3 col-lg-2 bg-gray-200 md:h-screen h-full">
          <Sidebar></Sidebar>
        </div>

        {/* make admin area */}
        <div className="col-md-9 col-lg-10 text-center py-5">
          <p className="text-2xl font-bold pb-4 text-gray-700 animate-pulse">
            Make Admin using Gmail
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-8/12 mx-auto shadow-xl"
          >
            {/* email-area */}
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-xl text-gray-900 text-left">
                Enter New Gmail
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                type="email"
              />
              <p className="text-red-500">
                {errors.email && (
                  <span role="alert">{errors.email.message}</span>
                )}
              </p>
            </div>

            {/* password-area */}
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-xl text-gray-900 text-left">
                Give a Admin Password
              </label>
              <input
                id="password"
                {...register("password", {
                  required: "required",
                  minLength: {
                    value: 6,
                    message: "min length is 6",
                  },
                })}
                type="password"
              />
              <p className="text-red-500">
                {errors.password && (
                  <span role="alert">{errors.password.message}</span>
                )}
              </p>
            </div>
            <button type="submit" className="block btn-black sm:w-6/12 md:w-8/12 lg:w-4/12 w-full text-white capitalize text-xl mx-auto py-2 rounded">
              Make an Admin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
