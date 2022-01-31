import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { database } from '../files/firebase';
import '../App.css';
import Hodnavbar from '../navbar/hod_navbar';

const Addteacherpage = () => {
  const [name, setName] = useState('');
  const [libraryid, setLibraryid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [section, setSection] = useState('');
  const [year, setYear] = useState('');
  const [department, setDepartment] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || libraryid === "" || email === "" || password === "" || subject === "" || section === "" || year === "" || department === "" || address === "" || mobile === "") {
      alert("please fill all fields");
    }
    else {
      var db = database.ref().child("teacherdetails");
      await db.push({
        "name": name,
        "libraryid": libraryid,
        "email": email,
        "password": password,
        "subject": subject,
        "section": section,
        "year": year,
        "department": department,
        "address": address,
        "mobile": mobile
      }).then(() => {
        alert("Teacher Was Successfully Added");
      }).catch((error) => {
        alert(error);
      });
      setName('');
      setLibraryid('');
      setEmail('');
      setPassword('');
      setSubject('');
      setSection('');
      setYear('');
      setDepartment('');
      setAddress('');
      setMobile('');
    }
  }

  return <>

    <br /><br /><br /><br />
    <Hodnavbar />
    <Card className="tutor-card">
      <Card.Body>
        <h2 className="text-center mb-4">ADD TEACHERS</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Enter Teacher Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Teacher Name" />
          </Form.Group>

          <Form.Group controlId="formBasicLibraryid">
            <Form.Label>Enter Teacher Libraryid</Form.Label>
            <Form.Control type="text" value={libraryid} onChange={(e) => setLibraryid(e.target.value)} placeholder="Enter Teacher Libraryid" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Teacher Email</Form.Label>
            <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Teacher Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter Teacher Password</Form.Label>
            <Form.Control type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Teacher Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter Subject Name</Form.Label>
            <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter Subject Name" />
          </Form.Group>


          <Form.Group controlId="formBasicSection">
            <Form.Label>Pick Teacher Section</Form.Label>
            <br />
            <select className="teacher-section" value={section} onChange={(e) => setSection(e.target.value)}>
              <option value="" disabled={true}>Pick Section</option>
              <option value="CSE-A">CSE-A</option>
              <option value="CSE-B">CSE-B</option>
              <option value="CSE-C">CSE-C</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasicYear">
            <Form.Label>Pick Teacher Year</Form.Label>
            <br />
            <select className="teacher-section" value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="" disabled={true}>Pick Year</option>
              <option value="I-year">I-year</option>
              <option value="II-yaer">II-year</option>
              <option value="III-year">III-year</option>
              <option value="IV-year">IV-year</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasicDepartment">
            <Form.Label>Pick Teacher Department</Form.Label>
            <br />
            <select className="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="" disabled={true}>Pick Department</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Enter Teacher Address</Form.Label>
            <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Teacher Address" />
          </Form.Group>

          <Form.Group controlId="formBasicMobile">
            <Form.Label>Enter Teacher Mobile</Form.Label>
            <Form.Control type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Teacher Mobile" />
          </Form.Group>
          <br />
          <Button variant="primary" className="submit" type="submit">
            Add Teacher
          </Button>
        </Form>
      </Card.Body>
    </Card>

  </>
}
export default Addteacherpage;