import React from 'react';

const ParticularUser = ({particularUser}) => {
    const newImage = JSON.parse(particularUser.image)
    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="card mb-3" style={{ width: "28rem", boxSizing: "border-box", padding: "20px" }}>
                <div className="row">
                    <div className="col-md-8 offset-md-1">
                    <img style={{ width: "50px" }} className="card-img-top align-self-center" src={`data:image/jpeg;base64,${newImage.img}`} />
                    </div>
                    <div className="col-md-3 my-3">
                    <button className="btn-black">{particularUser.status}</button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                        <h5 className="card-title fw-bold">{particularUser.service}</h5>
                            <p className="card-text text-secondary">{particularUser.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParticularUser;