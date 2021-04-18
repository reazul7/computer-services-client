import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const PlaceService = () => {
    const { id } = useParams();
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [service, setService] = useState([]);
    const [file, setFile] = useState(null);
    const [placeService, setPlaceService] = useState({})

    const history = useHistory();

    const handleBlur = (e) => {
        const newPlaceService = { ...placeService };
        newPlaceService[e.target.name] = e.target.value;
        setPlaceService(newPlaceService);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    //finding clicked file from home page
    const newService = service.find(sv => sv._id === id)
    console.log(newService);

    useEffect(() => {
        fetch("https://warm-springs-45915.herokuapp.com/seeService")
            .then(res => res.json())
            .then(data => setService(data))
    },[])

    const handleSubmit = (e) => {
        const formData = new FormData();
        const image = JSON.stringify(newService.image)
        formData.append('file', file);
        formData.append('status', 'pending');
        formData.append('image', image);
        formData.append('service', newService.title);
        formData.append('price', placeService.price);
        formData.append('email', loggedInUser.email);
        formData.append('name', placeService.name);
        formData.append('description', newService.description);

        fetch('https://warm-springs-45915.herokuapp.com/placeService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                alert('Data has been send')
                history.push("/serviceListO");
            })
            .catch(err => console.log(err))
        e.preventDefault();
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                <form style={{ width: '60%' }} action="" onSubmit={handleSubmit}>
                        <input required onBlur={handleBlur} className="form-control" type="text" placeholder="Your Name" name="name" />
                        <br />
                        <input required onBlur={handleBlur} className="form-control" type="email" placeholder="Your email address" name="email" value={loggedInUser.email} />
                        <br />
                        {
                            newService && <input required onBlur={handleBlur} className="form-control" type="text" placeholder="Services" name="service" value={newService.title} />
                        }
                        <br />
                        {newService && <textarea required onBlur={handleBlur} className="form-control" placeholder="Service Details" value={newService.description} name="description" cols="50" rows="5"></textarea>}
                        <br />
                        <input required onBlur={handleBlur} className="form-control" type="number" placeholder="Price" name="price" />
                        <br />
                        <div className="row">
                            <div class="form-group">
                                <h6 >Image Upload</h6>
                                <div className='file-upload'>
                                    {/* <img style={{ width: "20px" }} src={icon} alt="" /> */}
                                    <input onChange={handleFileChange} type="file" />
                                    <p style={{ color: '#009444', margin: '0', marginLeft: '5px' }}>Upload image</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <button type="submit" className="btn-black">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceService;