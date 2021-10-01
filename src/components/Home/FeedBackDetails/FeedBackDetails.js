const FeedBackDetails = ({ feedBack }) => {
  return (
    <div className="row mx-auto text-center my-3">
      {/* img-are */}
      {/* <img className="img-fluid mx-auto" style={{width: '170px', height: '150px', borderRadius: '50%'}} src={feedBack.newFile} alt=""/> */}
      <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-2">
          <img
            src={feedBack.newFile}
            alt="image loading..."
            className="shadow-lg rounded-bl-3xl rounded-tr-3xl w-full h-auto align-middle border-none"
          />
        </div>
      </div>

      {/* text-area */}
      <h6 className="font-bold text-xl mt-2 w-full">{feedBack.name}</h6>
      <h5 className="text-secondary font-semibold py-1">{feedBack.designation}</h5>
      <h5 className="text-dark text-lg"><span className="text-red-500 font-extrabold">"</span>{feedBack.description}<span className="text-red-500 font-extrabold">"</span></h5>
    </div>
  );
};

export default FeedBackDetails;
