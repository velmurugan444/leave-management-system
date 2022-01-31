import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { database } from '../files/firebase';
import Hodnavbar from '../navbar/hod_navbar';

const Addtutorspage = () => {
  const [name, setName] = useState('');
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
    if (name === "" || libraryid === "" || email === "" || password === "" || section === "" || year === "" || department === "" || address === "" || mobile === "") {
      alert("please fill all fields");
    }
    else {
      var db = database.ref().child("tutordetails");
      await db.push({
        "name": name,
        "libraryid": libraryid,
        "email": email,
        "password": password,
        "section": section,
        "year": year,
        "department": department,
        "address": address,
        "mobile": mobile
      }).then(() => {
        alert("Tutor Was Successfully Added");
      }).catch((error) => {
        alert(error);
      });
      setName('');
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

    <br /><br /><br /><br />
    <Hodnavbar />
    <Card className="tutor-card">
      <Card.Body>
        <h2 className="text-center mb-4">ADD TUTORS</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Enter Tutor Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Tutor Name" />
          </Form.Group>

          <Form.Group controlId="formBasicLibraryid">
            <Form.Label>Enter Tutor Libraryid</Form.Label>
            <Form.Control type="text" value={libraryid} onChange={(e) => setLibraryid(e.target.value)} placeholder="Enter Tutor Libraryid" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Tutor Email</Form.Label>
            <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Tutor Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter Tutor Password</Form.Label>
            <Form.Control type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Tutor Password" />
          </Form.Group>


          <Form.Group controlId="formBasicSection">
            <Form.Label>Pick Tutor Section</Form.Label>
            <br />
            <select className="tutor-section" value={section} onChange={(e) => setSection(e.target.value)}>
              <option value="" disabled={true}>Pick Section</option>
              <option value="CSE-A">CSE-A</option>
              <option value="CSE-B">CSE-B</option>
              <option value="CSE-C">CSE-C</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasicYear">
            <Form.Label>Pick Tutor Year</Form.Label>
            <br />
            <select className="tutor-section" value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="" disabled={true}>Pick Year</option>
              <option value="I-year">I-year</option>
              <option value="II-yaer">II-year</option>
              <option value="III-year">III-year</option>
              <option value="IV-year">IV-year</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasicDepartment">
            <Form.Label>Pick Tutor Department</Form.Label>
            <br />
            <select className="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="" disabled={true}>Pick Department</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Enter Tutor Address</Form.Label>
            <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Tutor Address" />
          </Form.Group>

          <Form.Group controlId="formBasicMobile">
            <Form.Label>Enter Tutor Mobile</Form.Label>
            <Form.Control type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Tutor Mobile" />
          </Form.Group>
          <br />
          <Button variant="primary" className="submit" type="submit">
            Add Tutor
          </Button>
        </Form>
      </Card.Body>
    </Card>

  </>
}
export default Addtutorspage;