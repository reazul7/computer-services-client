import React, { useEffect, useState } from "react";
import FeedBackDetails from "../FeedBackDetails/FeedBackDetails";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FeedBack = () => {
  const [feedBack, setFeedBack] = useState([]);
  const newFeedback = feedBack.slice(0, 6);
  useEffect(() => {
    fetch("https://warm-springs-45915.herokuapp.com/seeReview")
      .then((res) => res.json())
      .then((data) => setFeedBack(data));
  }, []);

  return (
    <div className="container my-5" id="feedback">
      <div className="row">
        <h3 className="text-center text-2xl fw-bold">
          Client <span className="text-blue-500">Feedback</span>
        </h3>
      </div>
      <div className="d-flex row justify-content-center mx-auto">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all 1s linear"
          transitionDuration={3000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="py-5"
        >
          {newFeedback.length === 0 && (
                    <div className="text-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
          {newFeedback.map((feedback) => (
            <FeedBackDetails
              key={feedback._id}
              feedBack={feedback}
            ></FeedBackDetails>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeedBack;
