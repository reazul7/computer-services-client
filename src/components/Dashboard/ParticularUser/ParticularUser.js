import React from 'react';

const ParticularUser = ({particularUser}) => {
    // const newImage = JSON.stringify(particularUser.image)
    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="card mb-3 w-100" style={{ width: "28rem", boxSizing: "border-box", padding: "20px" }}>
                <div className="row">
                    <div className="col-md-7 offset-md-1">
                        <img style={{ width: "150px", height: "150px" }} className="card-img-top align-self-center" src={`data:image/jpeg;base64,${particularUser?.serviceImg || ""}`} alt="" />
                    </div>
                    <div className="col-md-4 w-50 my-3">
                        <button className="btn-black">{particularUser.status}</button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="card-title fw-bold">{particularUser.service}</h5>
                            <p className="card-text text-secondary w-100">{particularUser.description}</p>
                            <h5 className="card-text w-25" style={{ border: "1px solid gray" }}>Cost: {particularUser.price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParticularUser;