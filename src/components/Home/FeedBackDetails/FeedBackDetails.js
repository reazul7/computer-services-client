import React from 'react';

const FeedBackDetails = ({feedBack}) => {
    const description = feedBack.description;
    const newDescription = description.split(' ').slice(0, 14).join(' ');
    return (
        <div className="col-md-4 col-sm-6 text-center justify-content-center align-items-center my-3">
            <img className="img-fluid" style={{width: '150px', height: '150px' }} src={feedBack.newFile} alt=""/>
            <h5 className="fw-bold">{feedBack.name}</h5>
            <h6>{feedBack.designation}</h6>
            <p className="text-secondary">{newDescription}</p>
        </div>
    );
};

export default FeedBackDetails;