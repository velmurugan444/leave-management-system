import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const About = () => {
  return <div>
    <Navbar />
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content">
              <h3>About Us</h3>
              <p>
                The Department of Computer Science and Engineering was started an undergraduate programme (B.E.CSE) in the academic year 1995-1996 with an intake of 60 students. Later it has been increased to 90 and 120 in the year 2002 and 2005. It is increased to 180 from the academic year 2011 -12. Now, it is increased to 240 from the academic year 2013 -14.The Post graduate programme M.E. Computer Science & Engineering was started in the year 2002 with an intake of 18 Students and it has been increased to 25 in the academic year 2004-2005.

              </p>
              <Link to="" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right"></i></Link>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-receipt"></i>
                  <h4>Vision And Mission</h4>
                  <p>To be centre of excellence in the field of Computer Science and Engineering education, producing globally competent professionals with social responsibilities.</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Programme Educational Objectives(PEOs)</h4>
                  <p>Graduates will accomplish professional skills with necessary technical knowledge in Computer Science and Engineering and be successful in their career or higher studies, engaging in lifelong learning.</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-images"></i>
                  <h4>Programme Outcomes</h4>
                  <p>Analyze, design and develop computing solutions by applying foundational concepts of computer science and engineering.</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-shield"></i>
                  <h4>Courses Offered</h4>
                  <p>Department Of Computer Science And Engineering:</p>
                  <h6>UG Programme</h6>
                  <p>B.E Computer Science And Engineering</p>
                  <h6>PG Programme</h6>
                  <p>M.E Computer Science And Engineering</p>
                  <h6>Research Programme</h6>
                  <p>PhD (Computer Science And Engineering)</p>
                  <p>M.S (By Research)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>



  </div>
}

export default About;