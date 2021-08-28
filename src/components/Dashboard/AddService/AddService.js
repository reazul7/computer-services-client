import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [adminInfo, setAdminInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', adminInfo.title);
        formData.append('description', adminInfo.description);
        formData.append('price', adminInfo.price);
        fetch('https://warm-springs-45915.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                alert('Service Added Successfully')
                e.target.reset()
            })
    }

    const handleBlur = (e) => {
        const newAdminInfo = { ...adminInfo };
        newAdminInfo[e.target.name] = e.target.value;
        setAdminInfo(newAdminInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    return (
            <div className="row">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                
                <div className="col-md-9 g-0 mt-5">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md">
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="">Service Title</label>
                                    <input onBlur={handleBlur} type="text" name="title" placeholder="Title" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="">Description</label>
                                    <textarea className="form-control" onBlur={handleBlur} name="description" id="" cols="60" rows="5" placeholder="Enter description" required/>
                                </div>
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="">Price</label>
                                    <br />
                                    <input onBlur={handleBlur} name="price" type="number" id="" placeholder="Enter Price" required/>
                                </div>
                            </div>
                            
                            <div className="col-md">
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="">Picture</label>
                                    <input onChange={handleFileChange} type="file" name="file" placeholder="Upload Image" className="form-control" required/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center">
                            <button type="submit" className="">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default AddService;