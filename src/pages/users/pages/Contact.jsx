import React from "react";
import Navbar from '../../../components/common/Navbar';
import Footer from '../../../components/common/Footer';
import SecondaryBtn from "../../../components/common/SecondaryBtn";
import Headings from "../../../components/common/Headings";

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar/>
      {/* Banner Section */}
      <div className="contactus_banner text-center" style={{}}>
        {/* <div className="text-center"> */}
          <h1>Contact Us</h1>
          <p>Connect with us for orders, queries, or partnerships.</p>
        {/* </div> */}
      </div>

      <div className="container">
        {/* Contact Info Section */}
        <section className="contact-content">
        <Headings title='Connect With Us'/>
          <div className="contact-box">
            <div className="contact-item">
              <h3>Office Name</h3>
              <p> Address: 5190, Lahori Gate, Delhi – 110006, India</p>
              <p><strong>Phone:</strong> +91-8448893199</p>
              <p><strong>Email:</strong> customercare@gmail.com</p>
            </div>
          </div>
        </section>

        {/* Address */}
        <Headings title='Connect With Us'/>
        <div className="row mb-5">
          <div className="col-lg-4 col-md-12 col-sm-12 p-0 mb-4 mb-lg-0">
            <form className="inputform">
              {/* username */}
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
                {/* email */}
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
                {/* phone */}
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" placeholder="+91 98765 43210" />
                {/* subject */}
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject of your message" />
                {/* reason */}
                <label className="form-label">Reason for Contact</label>
                <select className="form-select">
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                </select>
                {/* message */}
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Type your message here..."></textarea>
                {/* attachment file */}
                <label className="form-label">Attachment (optional)</label>
                <input type="file" className="form-control" />
                {/* submit btn */}
                <SecondaryBtn title='Submit' />
          </form>
          </div>
          <section className="col-lg-8 col-md-12 col-sm-12 p-0">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15218.502255678883!2d78.3704845560669!3d17.52537873442394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753521539509!5m2!1sen!2sin"
              width="100%"
              height="100%"
              // style={{ border:'0',display:'block', minHeight:'100%',height:'100%'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
