import Home from './pages/home';
import About from './pages/about';
import Service from './pages/services';
import Staff from './pages/staff';
import Contact from './pages/contact';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Studentlogin from './pages/student_login';
import Tutorlogin from './pages/tutor_login';
import Hodlogin from './pages/hod_login';
import LeaveForm from './pages/leave_form';
import TutorPage from './pages/tutorpage';
import Addstudentspage from './pages/addstudentspage';
import Hodpage from './pages/hodpage';
import Addtutorspage from './pages/addtutorspage';
import Permissionresponsepage from './pages/permission_response';
import Addrepresentativepage from './pages/add_representative';
import Representativepage from './pages/representative_page';
import Representativelogin from './pages/representative_login';
import Viewattendance from './pages/view_attendance';
import Viewpermission from './pages/view_permission';
import Retrieveattendance from './pages/retrieve_attendance';
import Retrievepermission from './pages/retrieve_permission';
import Rejectedpermission from './pages/rejected_permission';
import React from 'react';
import Addteacherpage from './pages/addteacherpage';
import Teacherpage from './pages/teacher_page';
import Teacherlogin from './pages/teacher_login';
import Imageupload from './pages/image_upload';
import Permissionimageretrieve from './pages/permissionimageretrieve_screen';
import Retrievemonthlyattendance from './pages/retrievemonthlyattendance';
import Retrievemonthlypermission from './pages/retrievemonthlypermission';
import Pdfupload from './pages/pdfupload_page';
import Monthlyreport from './pages/monthly_report';
import Studentmonthlyattendance from './pages/studentmonthlyattendance';
import { Viewtutors } from './pages/view_tutors';
import { Viewstudents } from './pages/view_students';
import { Viewfeedback } from './pages/view_feedback';
import { Viewteachers } from './pages/view_teachers';
import { Viewrepresentative } from './pages/view_representative';


class App extends React.Component {

  render() {

    return (

      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/viewtutor">
              <Viewtutors />
            </Route>

            <Route exact path="/About">
              <About />
            </Route>

            <Route exact path="/Service">
              <Service />
            </Route>
            <Route exact path="/viewstudents">
              <Viewstudents />
            </Route>

            <Route exact path="/Staff">
              <Staff />
            </Route>
            <Route exact path="/viewfeedback">
              <Viewfeedback />
            </Route>

            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Viewrepresentative">
              <Viewrepresentative />
            </Route>

            <Route exact path="/Studentlogin">
              <Studentlogin />
            </Route>
            <Route exact path="/viewteacher">
              <Viewteachers />
            </Route>

            <Route exact path="/Tutorlogin">
              <Tutorlogin />
            </Route>

            <Route exact path="/Hodlogin">
              <Hodlogin />
            </Route>

            <Route exact path="/Tutorpage">
              <TutorPage />
            </Route>

            <Route exact path="/addstudentpage">
              <Addstudentspage />
            </Route>

            <Route exact path="/Hodpage">
              <Hodpage />
            </Route>

            <Route exact path="/addtutorpage">
              <Addtutorspage />
            </Route>

            <Route exact path="/Permissionresponsepage">
              <Permissionresponsepage />
            </Route>

            <Route exact path="/addrepresentativepage">
              <Addrepresentativepage />
            </Route>

            <Route exact path="/Representativelogin">
              <Representativelogin />
            </Route>

            <Route exact path="/Representativepage">
              <Representativepage />
            </Route>

            <Route exact path="/viewattendance">
              <Viewattendance />
            </Route>

            <Route exact path="/viewpermission">
              <Viewpermission />
            </Route>

            <Route exact path="/Retrieveattendance">
              <Retrieveattendance />
            </Route>

            <Route exact path="/Retrievepermission">
              <Retrievepermission />
            </Route>
            <Route exact path="/Leaveform">
              <LeaveForm />
            </Route>

            <Route exact path="/Rejectedpermission">
              <Rejectedpermission />
            </Route>

            <Route exact path="/addteacherpage">
              <Addteacherpage />
            </Route>
            <Route exact path="/Logout">
              <Home />
            </Route>

            <Route exact path="/Teacherlogin">
              <Teacherlogin />
            </Route>

            <Route exact path="/Teacherpage">
              <Teacherpage />
            </Route>

            <Route exact path="/studentattendance">
              <Teacherpage />
            </Route>

            <Route exact path="/Studentmonthlyattendance">
              <Studentmonthlyattendance />
            </Route>

            <Route exact path="/Imageupload">
              <Imageupload />
            </Route>

            <Route exact path="/Permissionimageretrieve">
              <Permissionimageretrieve />
            </Route>

            <Route exact path="/Retrievemonthlyattendance">
              <Retrievemonthlyattendance />
            </Route>

            <Route exact path="/Retrievemonthlypermission">
              <Retrievemonthlypermission />
            </Route>

            <Route exact path="/uploadpdf">
              <Pdfupload />
            </Route>

            <Route exact path="/Monthlyreport">
              <Monthlyreport />
            </Route>
          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;
