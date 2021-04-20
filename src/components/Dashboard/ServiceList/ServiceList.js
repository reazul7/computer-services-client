import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Dropdown from 'react-dropdown';
import './ServiceList.css';

const options = [
    { value: 'pending', label: 'pending' },
    { value: 'ongoing', label: 'ongoing' },
    { value: 'done', label: 'done' }
]

const ServiceList = () => {
    const [showAllData, setShowAllData] = useState([])

    useEffect(() => {
        fetch('https://warm-springs-45915.herokuapp.com/seeAllService?')
            .then(res => res.json())
            .then(results => setShowAllData(results))
    }, [])

    const handleChange = (event, id) => {

        fetch(`https://warm-springs-45915.herokuapp.com/updateSurviceById/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ status: event.value }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const newData = [...showAllData];
                    newData.status = data;
                    setShowAllData(newData)
                    alert("You ordered successfully")
                }
            })

    }

    return (
        <div className="container-fluid w-100">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Service</th>
                                <th>Service Details</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showAllData.map((showData, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{showData.name}</td>
                                        <td>{showData.email}</td>
                                        <td>{showData.service}</td>
                                        <td>{showData.description}</td>
                                        <td>
                                        <Dropdown onChange={(e) => { handleChange(e, `${showData._id}`) }} className="bg=dark" options={options} value={showData.status} />
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;