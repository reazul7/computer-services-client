import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container pb-5 mb-5">
                <div className="row p-5">
                    <div className="col-md-6 align-item center">
                        <h3 className="text-center fw-bold"><span style={{color: '#E45E53'}}>Contact</span> With US</h3>
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt vero dolore, quam voluptas dolores!
                            </small></p>

                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div className="form-group pt-2">
                                <input type="text" className="form-control" placeholder="Email Address *" />
                            </div>
                            <div className="form-group pt-2">
                                <input type="text" className="form-control" placeholder="Your name *" />
                            </div>
                            <div className="form-group pt-2">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message *"></textarea>
                            </div>
                            <div className="form-group pt-2">
                                <button className="btn-black"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;