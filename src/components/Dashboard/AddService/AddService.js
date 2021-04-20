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
                alert('Data has been send')
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
        <div className="container-fluid">
            <div className="row">
                <div className="com-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="com-md-9 mt-5 p-0 m-0">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="">Service Title</label>
                                    <input onBlur={handleBlur} type="text" name="title" placeholder="Title" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="">Description</label>
                                    <br />
                                    <textarea onBlur={handleBlur} name="description" id="" cols="60" rows="5" placeholder="Enter description"></textarea>
                                </div>
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="">Price</label>
                                    <br />
                                    <input onBlur={handleBlur} name="price" type="number" id="" placeholder="Enter Price"></input>
                                </div>
                            </div>
                            
                            <div className="col-md">
                                <div className="form-group">
                                    <label className="fw-bold" htmlFor="">Picture</label>
                                    <input onChange={handleFileChange} type="file" name="file" placeholder="Upload Image" className="form-control" />
                                </div>
                            </div>
                        </div>
                        </div>
                        <input type="submit" value="Click here" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;