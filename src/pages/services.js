import React from 'react';
import Navbar from './navbar';

const Service = () => {
  return <div>
    <Navbar />
    <section id="services" className="services section-bg ">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>Our Department has provided a lot of services to students.</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <i className="icofont-computer"></i>
              <h4><a href="http://psnacet.edu.in/cse_overview.php">Venues</a></h4>
              <p>The Department of Computer Science and Engineering is functioning in an exclusive building with 4 floors (G+3) of built-up area of 4500 Sq. mt. The Department has an adequate number of lectures cum tutorial halls and Laboratories with sufficient capacity to accommodate students.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <i className="icofont-chart-bar-graph"></i>
              <h4><a href="http://psnacet.edu.in/cse_overview.php">Laboratories</a></h4>
              <p>The Department exclusively has a Laboratories for the benefit of the Students. The Laboratories is air fully conditioned with state of the Technical facilities such as Computers and has a 24 hours internet connection.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <i className="icofont-image"></i>
              <h4><a href="http://psnacet.edu.in/cse_overview.php">Seminar Hall</a></h4>
              <p>The Department exclusively has a Seminar hall for the benefit of the Students. The Seminar Hall is air fully conditioned with state of the art facilities such as Smart Board and has a seating capacity of 100. Meetings, conferences, seminars, symposia and co-curricular activities are conducted in this Hall.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <i className="icofont-settings"></i>
              <h4><a href="http://psnacet.edu.in/cse_overview.php">Department Library</a></h4>
              <p>Apart from the Main Library, the Department has an exclusive Library for the benefit of the Students. The Library has 3151 volumes under 949 titles specialized in subjects vide computer technology, computational theory, design and analysis of algorithms, image processing, computer networks, DBMS, Operating Systems, Internet Programming, etc. A Desktop with Printer is available in order to facilitate the Students for accessing online journals and E- learning materials.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>





}

export default Service;