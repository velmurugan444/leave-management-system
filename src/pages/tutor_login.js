import { React, useState } from 'react';
import { database } from '../files/firebase';
import Navbar from './navbar';


const Tutorlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please fill all fields");
    } else {
      var data = database.ref().child("tutordetails");
      await data.orderByChild("password").equalTo(password).once("child_added", function (snapshot) {
        console.log(snapshot.val().password);
        var user = snapshot.val();
        var useremail = user.email;
        var userpassword = user.password;
        if (useremail === email && userpassword === password) {
          window.location.pathname = '/Tutorpage';
        } else {
          alert("Invalid username or password");
        }
        //window.open('/Leaveform');

      }).catch((error) => {
        alert(error);
      });
    }
  }
  return <div>
    <Navbar />
    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src="assets/img/teacher.jpg" alt="login" className="login-card-img" />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="brand-wrapper">
                  <img src="assets/img/logo.svg" alt="logo" className="logo" />
                </div>
                <p className="login-card-description">Sign into your account</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email address" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="***********" />
                  </div>
                  <input name="login" id="login" className="btn btn-block login-btn mb-4" type="submit" value="Login" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
}
export default Tutorlogin;