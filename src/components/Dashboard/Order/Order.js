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
                    <PlaceService></PlaceService>
                </div>
            </div>
        </div>
    );
};

export default Order;