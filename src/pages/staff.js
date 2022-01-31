import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const Staff = () => {
  return <div>
    <Navbar />
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Staffs</h2>
          <p>All students can learn and succeed, but not in the same way and not in the same day.</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <Link to=""><i className="icofont-twitter"></i></Link>
                  <Link to=""><i className="icofont-facebook"></i></Link>
                  <Link to=""><i className="icofont-instagram"></i></Link>
                  <Link to=""><i className="icofont-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Dr. A.H. NANDHU KISHORE</h4>
                <span>M.E., Ph.D.</span>
                <span>Associate Professor</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <Link to=""><i className="icofont-twitter"></i></Link>
                  <Link to=""><i className="icofont-facebook"></i></Link>
                  <Link to=""><i className="icofont-instagram"></i></Link>
                  <Link to=""><i className="icofont-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Dr. D. shanthi</h4>
                <span>M.E., Ph.D.</span>
                <span>Professor And Head</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <Link to=""><i className="icofont-twitter"></i></Link>
                  <Link to=""><i className="icofont-facebook"></i></Link>
                  <Link to=""><i className="icofont-instagram"></i></Link>
                  <Link to=""><i className="icofont-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Dr. R. KARTHIKEYAN</h4>
                <span>M.Tech., Ph.D.</span>
                <span>Professor</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <Link to=""><i className="icofont-twitter"></i></Link>
                  <Link to=""><i className="icofont-facebook"></i></Link>
                  <Link to=""><i className="icofont-instagram"></i></Link>
                  <Link to=""><i className="icofont-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Dr. S. PUSHPALATHA</h4>
                <span>MCA, M.E., Ph.D.</span>
                <span>Professor</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  </div>
}
export default Staff;