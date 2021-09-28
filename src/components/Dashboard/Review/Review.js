import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import Swal from 'sweetalert2'

const Review = () => {
  const { loggedInUser } = useContext(UserContext);
  const [review, setReview] = useState({});

  const handleBlur = (e) => {
    const newReview = { ...review };
    newReview[e.target.name] = e.target.value;
    setReview(newReview);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("newFile", loggedInUser.photo);
    formData.append("name", loggedInUser.name);
    formData.append("designation", review.designation);
    formData.append("description", review.description);
    console.log(loggedInUser.photo, loggedInUser.name, review.designation, review.description);
    fetch("https://warm-springs-45915.herokuapp.com/review", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Thanks, for your important review',
          showConfirmButton: false,
          timer: 2000
        })
        e.target.reset();
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 bg-gray-200 md:h-screen h-full">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-9 col-lg-10 text-center">
          <h4 className="pt-5 pb-3 text-3xl text-black font-semibold">
            Order Review
          </h4>
          <form
            action=""
            onSubmit={handleReviewSubmit}
            className="mx-auto w-10/12"
          >
            {loggedInUser.name && (
              <input
                onBlur={handleBlur}
                type="text"
                placeholder="Your name"
                className="form-control"
                value={loggedInUser.name}
                name="name"
              />
            )}
            <br />
            <input
              onBlur={handleBlur}
              type="text"
              placeholder="Your works"
              className="form-control"
              name="designation"
              required
            />
            <br />
            <input
              onBlur={handleBlur}
              type="text"
              placeholder="Review Description"
              className="form-control"
              name="description"
              required
            />
            <br />
            <button type="submit" className="btn-black mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
