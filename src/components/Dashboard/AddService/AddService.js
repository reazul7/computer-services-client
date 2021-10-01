import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Swal from 'sweetalert2'

const AddService = () => {
    const [newProductInfo, setNewProductInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', newProductInfo.title);
        formData.append('description', newProductInfo.description);
        formData.append('price', newProductInfo.price);
        fetch('https://warm-springs-45915.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Service Added Successfully',
                    showConfirmButton: false,
                    timer: 2000
                  })
                e.target.reset()
            })
    }

    const handleBlur = (e) => {
        const newnewProductInfo = { ...newProductInfo };
        newnewProductInfo[e.target.name] = e.target.value;
        setNewProductInfo(newnewProductInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3 col-lg-2 bg-gray-200 md:h-screen h-full">
                    <Sidebar/>
                </div>
                
                {/* add service */}
                <div className="col-md-9 col-lg-10 text-center py-5">
                  <p className="text-2xl font-bold pb-4 text-gray-700 animate-pulse">Add New Product</p>
                  <form action="" onSubmit={handleSubmit} className="w-full md:w-8/12 mx-auto shadow-xl">
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-xl text-gray-900 text-left">Service Name</label>
                        <input className="border py-2 px-3 text-grey-800" onBlur={handleBlur} type="text" name="title" placeholder="Service Name" required />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-xl text-gray-900 text-left">Service Description</label>
                        <textarea className="border py-2 px-3 text-grey-800" onBlur={handleBlur} name="description" id="" cols="60" rows="5" placeholder="Enter Service Description" required />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-xl text-gray-900 text-left">Add Price</label>
                        <input className="border py-2 px-3 text-grey-800" onBlur={handleBlur} name="price" type="number" placeholder="Service Price" required/>
                    </div>
                    
                      </div>
                      <div className="col-md-6">
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-xl text-gray-900 text-left">Select Picture</label>
                        <input className="border py-2 px-3 text-grey-800" onChange={handleFileChange} type="file" name="file" placeholder="Upload Image" required/>
                    </div>
                      </div>
                    </div>
                    <button className="block btn-black sm:w-6/12 md:w-8/12 lg:w-4/12 w-full text-white capitalize text-xl mx-auto py-2 rounded" type="submit">Add Service</button>
                  </form>
                </div>
              </div>
            </div>
    );
};

export default AddService;