import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6 my-3 d-flex justify-content-center">
            <Link to={`/placeService/${service._id}`}>
            <div className="card card-style">
            <img
              style={{ width: "50px" }}
              className="card-img-top align-self-center"
              src={`data:image/jpeg;base64,${service.image.img}`}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">
                {service.title}
              </h5>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;