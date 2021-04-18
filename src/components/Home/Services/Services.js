import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("https://warm-springs-45915.herokuapp.com/seeService")
            .then(res => res.json())
            .then(data => setService(data))
    },[])
    return (
        <div className="container my-5 pt-5">
            <div className="row">
                <h3 className="text-center fw-bold">Our <span className="txt-color">Services</span></h3>
            </div>
            <div className="d-flex row justify-content-center">
                {
                    service.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Services;