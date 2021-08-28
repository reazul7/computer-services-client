import React from 'react';

const ParticularUser = ({particularUser}) => {
    console.log(particularUser);
    // const newImage = JSON.stringify(particularUser.image)
    return (
        <div className="row mx-auto text-center px-1">
            <div className="card mb-3 w-100">
                <div className="">
                    <div className="w-full img-fluid h-60 p-1">
                        <img className="img-fluid w-full h-60 align-self-center " src={`data:image/jpeg;base64,${particularUser?.image || ""}`} alt="" />
                    </div>
                    <div className="w-50 pt-3 flex items-center mx-auto">
                        <button className="btn-black">{particularUser.status}</button>
                    </div>
                </div>
                <div className="card-body items-center">
                    <h5 className="card-title fw-bold">{particularUser.service}</h5>
                    <p className="card-text text-secondary w-100 pb-2">{particularUser.description}</p>
                    <h5 className="card-text w-25 mx-auto py-2 rounded text-white font-bold bg-gray-500">Cost: {particularUser.price}</h5>
                </div>
            </div>
        </div>
    );
};

export default ParticularUser;