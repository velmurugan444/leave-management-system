import React,{useRef} from 'react';
import { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../App.css';
import { db } from '../files/firebase';
import emailjs from "emailjs-com";
import Studentnavbar from '../navbar/student_navbar';

const LeaveForm = () => {
  const formdata = useRef('');
  const [days, setDays] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [reason, setReason] = useState('');
  const [studentname, setstudentname] = useState('');
  const [studentrollno, setstudentrollno] = useState('');
  const [studentsection, setstudentsection] = useState('');
  const [studentdepartment, setstudentdepartment] = useState('');
  const [studentyear, setstudentyear] = useState('');
  useEffect(() => {
    const studentname = localStorage.getItem('name');
    const studentrollno = localStorage.getItem('rollno');
    const studentsection = localStorage.getItem('section');
    const studentdepartment = localStorage.getItem('department');
    const studentyear = localStorage.getItem('year');
    setstudentname(studentname);
    setstudentrollno(studentrollno);
    setstudentsection(studentsection);
    setstudentdepartment(studentdepartment);
    setstudentyear(studentyear);
  }, []);



  const handleSubmit = (e) => {

    e.preventDefault();
    if (studentname === "" || studentrollno === "" || studentsection === "" || studentdepartment === "" || days === "" || startdate === "" || enddate === "" || reason === "") {
      alert("fill all fields");
    }
    else {
      var currentDate = new Date().toISOString().slice(0, 10);
       emailjs
        .sendForm(
          "service_usqitd9",
          "template_dkh93c6",
          formdata.current,
          "qlu-p36y5hdBefF1N"
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
      db.collection("leavepermission").add({
        date: currentDate,
        name: studentname,
        rollno: studentrollno,
        section: studentsection,
        department: studentdepartment,
        year: studentyear,
        days: days,
        startdate: startdate,
        enddate: enddate,
        reason: reason
      }).then(() => {
        alert("The Permssion has been successfully submited to the HOD");
      }).catch((error) => {
        alert(error);
      });

      setDays('');
      setStartdate('');
      setEnddate('');
      setReason('');
    }
  }
  return (
    <>
      <Studentnavbar />
      <br /><br /><br /><br />
      <Card className="leaveform-card">
        <Card.Body>
          <h2 className="text-center mb-4">LEAVE FORM</h2>
          <Form onSubmit={handleSubmit}ref={formdata}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control type="text"name='student_name'id='student_name' defaultValue={studentname} placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group controlId="formBasicRollno">
              <Form.Label>Enter Your Rollno</Form.Label>
              <Form.Control type="text"name='roll_no'id='roll_no' defaultValue={studentrollno} placeholder="Enter Your Rollno" />
            </Form.Group>
            <Form.Group controlId="formBasicSection">
              <Form.Label>Pick Your Section</Form.Label>
              <Form.Control type="text"name='student_section'id='student_section' defaultValue={studentsection} placeholder="Enter Your Section" />
            </Form.Group>

            <Form.Group controlId="formBasicDepartment">
              <Form.Label>Pick Your Department</Form.Label>
              <Form.Control type="text"name='student_department'id='student_department' defaultValue={studentdepartment} placeholder="Enter Your Department" />
            </Form.Group>

            <Form.Group controlId="formBasicDays">
              <Form.Label>Pick Number Of Days</Form.Label>
              <br />
              <select className="days" value={days} onChange={(e) => setDays(e.target.value)}name='student_days'id='student_days'>
                <option value="" disabled={true}>Pick days</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
              </select>
            </Form.Group>

            <Form.Group controlId="formBasicStartdate">
              <Form.Label>Pick Start Date</Form.Label>
              <Form.Control type="text" onFocus={(e) => e.target.type = 'date'} onChange={(e) => setStartdate(e.target.value)} value={startdate} placeholder="Pick start date"name='student_startdate'id='student_startdate' />
            </Form.Group>

            <Form.Group controlId="formBasicEnddate">
              <Form.Label>Pick End Date</Form.Label>
              <Form.Control type="text" onFocus={(e) => e.target.type = 'date'} onChange={(e) => setEnddate(e.target.value)} value={enddate} placeholder="pick end date"name='student_enddate'id='student_enddate' />
            </Form.Group>

            <Form.Group controlId="formBasicReason">
              <Form.Label>Email Your Reason</Form.Label>
              <Form.Control type="text" onChange={(e) => setReason(e.target.value)} value={reason} placeholder="Enter Your Reason"name='student_reason'id='student_reason' />
            </Form.Group>
            <br />
            <Button variant="primary" className="submit" type="submit">
              Ask permission
            </Button>
          </Form>
        </Card.Body>
      </Card>

    </>);
}
export default LeaveForm;