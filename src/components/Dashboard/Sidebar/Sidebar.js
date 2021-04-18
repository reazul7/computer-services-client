import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo-com-service.svg';
import './Sidebar.css';

const Sidebar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    useEffect(() => {
        fetch(`https://warm-springs-45915.herokuapp.com/admin?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data) {
                const newUser = {...loggedInUser};
                newUser.setUser = true;
                setLoggedInUser(newUser);
            }
            else {
                const newUser = {...loggedInUser};
                newUser.setUser = false;
                setLoggedInUser(newUser);
            }
        })
    }, [])

    return (
        <div>
            <Link to="/"><img style={{ height: "50px" }} src={logo} className='img-fluid justify-content-center' alt="" /></Link>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
            <ul className="list-unstyled">
                {/* { */}
                    {/* loggedInUser.setUser ?  */}
                    <div className="my-5">
                        <li className="li-style">
                            <Link to="/serviceList">Service List Admin</Link>
                        </li>
                        <li className="li-style">
                            <Link to="/addService">Add Service</Link>
                        </li>
                        <li className="li-style">
                            <Link to="/mainAdmin">Make Admin</Link>
                        </li>
                    </div>
                    {/* : */}
                    <div>
                        <li className="li-style">
                            <Link to="/placeService/:id">Order</Link>
                        </li>
                        <li className="li-style">
                            <Link to="/serviceListO">Service List Order</Link>
                        </li>
                        <li className="li-style">
                            <Link to="/review">Review</Link>
                        </li>
                    </div>
                {/* } */}
            </ul>
            <div>
                <Link to="/">Logout</Link>
            </div>
            </div>
        </div>
    );
};

export default Sidebar;