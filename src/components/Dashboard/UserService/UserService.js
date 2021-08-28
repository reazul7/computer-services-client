import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ParticularUser from '../ParticularUser/ParticularUser';


const UserService = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [particularUser, setParticularUser] = useState([])
    useEffect(() => {
        fetch("https://warm-springs-45915.herokuapp.com/seeParticularService?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setParticularUser(data)
            })
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="pt-5 pb-3 text-center justify-content-around font-bold">
                    <h2 className="text-xl">Order</h2>
                    <h5 className="text-blue-600">{loggedInUser.name}</h5>
                </div>
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 ">
                    <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center">
                        {
                            particularUser.map(user => <ParticularUser key={user._id} particularUser={user}></ParticularUser>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserService;