import React from 'react';
import PlaceService from '../../PlaceService/PlaceService';

const Order = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <span></span>
                </div>
                <div className="col-md-9">
                    <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <PlaceService/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;