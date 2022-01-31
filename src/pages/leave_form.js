import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../App.css';
import { db } from '../files/firebase';
import Studentnavbar from '../navbar/student_navbar';

const LeaveForm = () => {
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
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control type="text" defaultValue={studentname} placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group controlId="formBasicRollno">
              <Form.Label>Enter Your Rollno</Form.Label>
              <Form.Control type="text" defaultValue={studentrollno} placeholder="Enter Your Rollno" />
            </Form.Group>
            <Form.Group controlId="formBasicSection">
              <Form.Label>Pick Your Section</Form.Label>
              <Form.Control type="text" defaultValue={studentsection} placeholder="Enter Your Section" />
            </Form.Group>

            <Form.Group controlId="formBasicDepartment">
              <Form.Label>Pick Your Department</Form.Label>
              <Form.Control type="text" defaultValue={studentdepartment} placeholder="Enter Your Department" />
            </Form.Group>

            <Form.Group controlId="formBasicDays">
              <Form.Label>Pick Number Of Days</Form.Label>
              <br />
              <select className="days" value={days} onChange={(e) => setDays(e.target.value)}>
                <option value="" disabled={true}>Pick days</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
              </select>
            </Form.Group>

            <Form.Group controlId="formBasicStartdate">
              <Form.Label>Pick Start Date</Form.Label>
              <Form.Control type="text" onFocus={(e) => e.target.type = 'date'} onChange={(e) => setStartdate(e.target.value)} value={startdate} placeholder="Pick start date" />
            </Form.Group>

            <Form.Group controlId="formBasicEnddate">
              <Form.Label>Pick End Date</Form.Label>
              <Form.Control type="text" onFocus={(e) => e.target.type = 'date'} onChange={(e) => setEnddate(e.target.value)} value={enddate} placeholder="pick end date" />
            </Form.Group>

            <Form.Group controlId="formBasicReason">
              <Form.Label>Email Your Reason</Form.Label>
              <Form.Control type="text" onChange={(e) => setReason(e.target.value)} value={reason} placeholder="Enter Your Reason" />
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