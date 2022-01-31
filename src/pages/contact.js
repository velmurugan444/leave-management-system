import React, { useState } from 'react';
import { db } from '../files/firebase';
import Navbar from './navbar';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("please fill the fields");
    }
    else {
      var currentDate = new Date().toISOString().slice(0, 10);
      db.collection("studentfeedbacks").add({
        "date": currentDate,
        "name": name,
        "email": email,
        "subject": subject,
        "message": message
      }).then(() => {
        alert("Your feedback has been submitted successfully");
      }).catch(error => {
        alert(error);
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  }
  return <div>
    <Navbar />
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <br /><br />
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>Dr.D.Shanthi,M.E.,Ph.D Professor and Head,</p>
                  <p>Department of Computer Science And Engineering,</p>
                  <p>PSNA College of Engineering And Technology,</p>
                  <p>Kothandaraman Nagar,</p>
                  <p>Dindigul-624 622.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p> hodcse@psnacet.edu.in</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+91- 0451-2554413,<br />2554032</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form role="form" className="php-email-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={name} onChange={(e) => setName(e.target.value)} />
                  <div className="validate"></div>
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>







    <footer id="footer">


      <div className="container d-md-flex py-4">

        <div className="mr-md-auto text-center text-md-left">
          <div className="copyright">
            &copy; Copyright <strong><span>PSNACET</span></strong>. All Rights Reserved
          </div>
          <div className="credits">

            Designed by <a href="https://bootstrapmade.com/">VELMURUGAN</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="https://twitter.com/psnacet" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/psnacetofficial/" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.youtube.com/channel/UCOe_0-pBKtp5hOP1OTk5YIQ/videos" className="instagram"><i className="bx bxl-youtube"></i></a>
          <a href="https://www.linkedin.com/in/psnacet/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
  </div>
}
export default Contact;