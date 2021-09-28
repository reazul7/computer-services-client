import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const ServiceDetails = ({ service }) => {
  const { _id, image, title, description, price } = service;

  return (
    <div className="m-2 border-gray-800 bg-gray-100 relative text-center card-container rounded shadow">
      <Flip>
        <div className="pt-1">
          <img
            className="w-10/12 h-60 m-auto object-contain rounded-lg"
            src={`data:image/jpeg;base64,${image.img}`}
            alt="service-img"
          />
        </div>

        <div class="pb-2">
          <p class="title text-lg font-bold block cursor-pointer text-gray-500 hover:text-yellow-500">
            {title}
          </p>

          <p class="title text-base block capitalize cursor-pointer text-gray-500 hover:text-yellow-500">
            {description.slice(0, 50)}
          </p>

          <p class="text-gray-900 rounded text-lg font-bold">${price}</p>

          <p class="star flex text-yellow-400 justify-content-center">
            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
            <BsStarFill />
          </p>
          <Link to={`/placeService/${_id}`}>
            <div className="p-2 flex justify-center">
              <button className="rounded bg-blue-400 w-8/12 mb-1">
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
