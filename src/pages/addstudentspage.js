import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { database } from '../files/firebase';
import Tutornavbar from '../navbar/tutor_navbar';

const Addstudentspage = () => {
  const [name, setName] = useState('');
  const [rollno, setRollno] = useState('');
  const [libraryid, setLibraryid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [section, setSection] = useState('');
  const [year, setYear] = useState('');
  const [department, setDepartment] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || rollno === "" || libraryid === "" || email === "" || password === "" || section === "" || year === "" || department === "" || address === "" || mobile === "") {
      alert("please fill all fields");
    }
    else {
      var db = database.ref().child("cseb");
      await db.push({
        "name": name,
        "rollno": rollno,
        "libraryid": libraryid,
        "email": email,
        "password": password,
        "section": section,
        "year": year,
        "department": department,
        "address": address,
        "mobile": mobile
      }).then(() => {
        alert("Student Was Successfully Added");
      }).catch((error) => {
        alert(error);
      });
      setName('');
      setRollno('');
      setLibraryid('');
      setEmail('');
      setPassword('');
      setSection('');
      setYear('');
      setDepartment('');
      setAddress('');
      setMobile('');
    }
  }

  return <>
    <br /><br /> <br /><br />
    <Tutornavbar />
    <Card className="leaveform-card">
      <Card.Body>
        <h2 className="text-center mb-4">ADD STUDENTS</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Enter Student Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Student Name" />
          </Form.Group>

          <Form.Group controlId="formBasicRollno">
            <Form.Label>Enter Student Rollno</Form.Label>
            <Form.Control type="text" value={rollno} onChange={(e) => setRollno(e.target.value)} placeholder="Enter Student Rollno" />
          </Form.Group>

          <Form.Group controlId="formBasicLibraryid">
            <Form.Label>Enter Student Libraryid</Form.Label>
            <Form.Control type="text" value={libraryid} onChange={(e) => setLibraryid(e.target.value)} placeholder="Enter Student Libraryid" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Student Email</Form.Label>
            <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Student Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter Student Password</Form.Label>
            <Form.Control type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Student Password" />
          </Form.Group>


          <Form.Group controlId="formBasicSection">
            <Form.Label>Pick Student Section</Form.Label>
            <br />
            <select className="student-section" value={section} onChange={(e) => setSection(e.target.value)}>
              <option value="" disabled={true}>Pick Section</option>
              <option value="CSE-A">CSE-A</option>
              <option value="CSE-B">CSE-B</option>
              <option value="CSE-C">CSE-C</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasicYear">
            <Form.Label>Pick Student Year</Form.Label>
            <br />
            <select className="student-section" value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="" disabled={true}>Pick Year</option>
              <option value="I-year">I-year</option>
              <option value="II-yaer">II-year</option>
              <option value="III-year">III-year</option>
              <option value="IV-year">IV-year</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasicDepartment">
            <Form.Label>Pick Student Department</Form.Label>
            <br />
            <select className="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="" disabled={true}>Pick Department</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Enter Student Address</Form.Label>
            <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Student Address" />
          </Form.Group>

          <Form.Group controlId="formBasicMobile">
            <Form.Label>Enter Student Mobile</Form.Label>
            <Form.Control type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Student Mobile" />
          </Form.Group>
          <br />
          <Button variant="primary" className="submit" type="submit">
            Add Student
          </Button>
        </Form>
      </Card.Body>
    </Card>

  </>
}
export default Addstudentspage;