import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const ServiceDetails = ({ service }) => {
  const { _id, image, title, description, price } = service;

  return (
    <div className="m-2 border-gray-800 bg-gray-100 relative text-center card-container rounded">
      <Flip>
        <div className="pt-2">
          <img
            className="w-11/12 h-48 m-auto object-fit rounded-lg"
            src={`data:image/jpeg;base64,${image.img}`}
            alt="service-img"
          />
        </div>

        <div className="py-2">
          <p className="title text-lg font-bold block cursor-pointer text-gray-700 hover:text-yellow-500">
            {title}
          </p>

          {/* <p className="title text-base block capitalize cursor-pointer text-gray-500 hover:text-yellow-500">
            {description.slice(0, 50)}
          </p> */}

          <p className="text-gray-900 rounded text-lg font-bold">{price}<span className="text-xl font-extrabold">৳</span></p>

          <p className="star py-1 flex text-yellow-400 justify-content-center">
            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
            <BsStarFill />
          </p>
          <Link to={`/placeService/${_id}`}>
            <div className="p-2 flex justify-center">
              <button className="rounded bg-blue-400 w-8/12 mb-1 py-2">
                Buy Now
              </button>
            </div>
          </Link>
        </div>
      </Flip>
    </div>
  );
};

export default ServiceDetails;
