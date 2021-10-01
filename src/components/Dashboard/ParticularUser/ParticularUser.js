const ParticularUser = ({particularUser}) => {
    // const newImage = JSON.stringify(particularUser.image)
    return (
        <div className="m-3 rounded-lg border-gray-300 border-1 shadow-xl relative text-center card-container">
            <img className="w-11/12 h-60 py-2 rounded-lg m-auto object-contain" src={`data:image/jpeg;base64,${particularUser?.image || ""}`} alt="" />
            <button className="bg-black py-2 capitalize w-1/2 mx-auto mt-4">{particularUser.status}</button>
                    
            <div className="card-body items-center">
                <h5 className="card-title fw-bold m-0">{particularUser.service}</h5>
                <p className="card-text text-secondary w-100 pb-2">{particularUser.description}</p>
                <h5 className="card-text w-4/12 mx-auto py-2 rounded text-gray-700 font-bold bg-gray-200">Cost: {particularUser.price}</h5>
            </div>
        </div>
    );
};

export default ParticularUser;