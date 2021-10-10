import './Contact.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_7zdiv3p', 'template_taps7jq', e.target, 'user_PsmRntaXM3mRIYeOJL9bk')
      .then((result) => {
        //   console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Your email has been sent',
            showConfirmButton: false,
            timer: 2000
          })
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return (
        <div className="contact" id="contact">
            <div className="container pb-5 mb-5">
                <div className="row">
                <h3 className="text-center text-2xl fw-bold py-4 animate-pulse ">Feel Free To <span className="text-blue-500">Contact</span> With Us</h3>
                    <div className="col-md-6 pb-4 align-item center">
                        <img src="https://thumbs.gfycat.com/BlaringWeightyCollie-max-1mb.gif" alt="" />
                    </div>

                    <div className="col-md-6">
                        <form onSubmit={sendEmail} className="w-full">
                            <div className="row m-auto">
                                <div className="col-12 form-group mx-auto">
                                    <input type="text" name="name" placeholder="Name" id="" className="form-control" required/>
                                </div>
                                <div className="col-12 form-group mx-auto">
                                    <input type="email" name="email" placeholder="Email Address" id="" className="form-control" required/>
                                </div>
                                <div className="col-12 form-group mx-auto">
                                    <input type="text" name="subject" placeholder="Subject" id="" className="form-control" required/>
                                </div>
                                <div className="col-12 form-group mx-auto">
                                    <textarea cols="30" rows="8" name="message" placeholder="Your Message" id="" className="form-control" required/>
                                </div>
                                <div className="col-12 form-group mx-auto py-2">
                                    <input type="submit"  id="" className="bg-black text-white font-bold" value="Send Mail"/>
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