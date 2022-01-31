import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class Home extends React.Component {
  render() {
    return <div>
      <Navbar />
      <section id="hero" className="d-flex align-items-center">

        <div className="container-fluid" data-aos="zoom-out" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-xl-5">
                  <h1>Psna College Of Engineering And Technology</h1>
                  <h2>An investment in knowledge always pays the best interest.</h2>
                  <Link to="/Studentlogin" className="btn-get-started scrollto">Get Permission</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  }
}
export default Home;