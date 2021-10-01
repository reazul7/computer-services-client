import React from "react";

const FeedBackDetails = ({ feedBack }) => {
  const description = feedBack.description;
  const newDescription = description.split(" ").slice(0, 14).join(" ");
  return (
    <div className="row mx-auto text-center my-3">
      {/* img-are */}
      {/* <img className="img-fluid mx-auto" style={{width: '170px', height: '150px', borderRadius: '50%'}} src={feedBack.newFile} alt=""/> */}
      <div class="flex flex-wrap justify-center">
        <div class="w-6/12 sm:w-4/12 px-2">
          <img
            src={feedBack.newFile}
            alt="..."
            class="shadow-lg rounded-bl-3xl rounded-tr-3xl w-full h-auto align-middle border-none"
          />
        </div>
      </div>

      {/* text-area */}
      <h6 className="font-bold text-lg mt-2 w-full">{feedBack.name}</h6>
      <h5 className="text-secondary py-1 uppercase ">{feedBack.designation}</h5>
      <h5 className="text-dark">" {newDescription} "</h5>
    </div>
  );
};

export default FeedBackDetails;
