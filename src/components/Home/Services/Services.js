import { useEffect, useState } from 'react';
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
            <div className="mb-3">
                <h3 className="text-center text-2xl fw-bold animate-pulse">Our <span className="text-blue-500">Services</span></h3>
            </div>
            <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
                {service.length === 0 && (
                    <div class="flex items-center justify-center h-full m-auto">
                        <div class="w-24 h-24 border-t-8 border-b-8 border-blue-500 rounded-full animate-spin"></div>
                    </div>
                )}
                {
                    service.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Services;