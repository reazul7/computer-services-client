import React, { useEffect, useState } from 'react';
import face from '../../../images/face.png';
import FeedBackDetails from '../FeedBackDetails/FeedBackDetails';


const FeedBack = () => {
    const [feedBack, setFeedBack] = useState([]);
    const newFeedback = feedBack.slice(0,6);
    useEffect(() => {
        fetch('https://warm-springs-45915.herokuapp.com/seeReview')
            .then(res => res.json())
            .then(data => setFeedBack(data))
    },[])

    return (
        <div className="container my-5">
            <div className="row">
                <h3 className="text-center fw-bold">Client <span className="txt-color">Feedback</span></h3>
            </div>
            <div className="d-flex row justify-content-center">
                {
                    newFeedback.map(feedback => <FeedBackDetails key={feedback._id} feedBack={feedback}></FeedBackDetails>)
                }
            </div>
        </div>
    );
};

export default FeedBack;