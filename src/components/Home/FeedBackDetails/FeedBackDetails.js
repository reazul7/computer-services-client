import React from 'react';

const FeedBackDetails = ({feedBack}) => {
    const description = feedBack.description;
    const newDescription = description.split(' ').slice(0, 14).join(' ');
    return (
        <div className="row mx-auto text-center my-3">
            <img className="img-fluid mx-auto w-40 h-40 rounded-full" src={feedBack.newFile} alt=""/>
            {/* style={{width: '170px', height: '150px', borderRadius: '50%'}} */}
            <h6 className="font-bold text-lg mt-2 w-full">{feedBack.name}</h6>
            <h5 className="text-secondary py-1 uppercase ">{feedBack.designation}</h5>
            <h5 className="text-dark">" {newDescription} "</h5>
        </div>
    );
};

export default FeedBackDetails;