import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_7zdiv3p', 'template_taps7jq', e.target, 'user_PsmRntaXM3mRIYeOJL9bk')
      .then((result) => {
          console.log(result.text);
          alert("Email Send Successfully")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return (
        <div className="contact" id="contact">
            <div className="container pb-5 mb-5">
                <div className="row">
                <h3 className="text-center text-2xl fw-bold pb-4"><span style={{color: '#E45E53'}}>Contact</span> With US</h3>
                    <div className="col-md-6 pb-4 align-item center">
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt vero dolore, quam voluptas dolores!</small></p>
                    </div>

                    <div className="col-md-6">
                        <form onSubmit={sendEmail} className="w-full">
                            <div className="row m-auto">
                                <div className="col-12 form-group mx-auto">
                                    <input type="text" name="name" placeholder="Name" id="" className="form-control"/>
                                </div>
                                <div className="col-12 form-group mx-auto pt-2">
                                    <input type="email" name="email" placeholder="Email Address" id="" className="form-control"/>
                                </div>
                                <div className="col-12 form-group mx-auto">
                                    <input type="text" name="subject" placeholder="Subject" id="" className="form-control"/>
                                </div>
                                <div className="col-12 form-group mx-auto">
                                    <textarea cols="30" rows="8" name="message" placeholder="Your Message" id="" className="form-control"/>
                                </div>
                                <div className="col-12 form-group mx-auto py-2">
                                    <input type="submit"  id="" className="btn-black" value="Send Mail "/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;