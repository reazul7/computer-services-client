import React from 'react';

const FeedBackDetails = ({feedBack}) => {
    const description = feedBack.description;
    const newDescription = description.split(' ').slice(0, 14).join(' ');
    return (
        <div className="col-md-4 col-sm-6 text-center justify-content-center align-items-center my-3">
            <img className="img-fluid" style={{width: '100px', height: '100px', borderRadius: '50%'}} src={feedBack.newFile} alt=""/>
            <h6 className="fw-bold mt-2">{feedBack.name}</h6>
            <h5 className="text-secondary" style={{textTransform: 'uppercase'}}>{feedBack.designation}</h5>
            <h5 className="text-dark">" {newDescription} "</h5>
        </div>
    );
};

export default FeedBackDetails;