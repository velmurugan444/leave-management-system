import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { db } from '../files/firebase';
import Representativenavbar from '../navbar/representative_navbar';

const Representativepage = () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [rollno, setRollno] = useState('');
  const [section, setSection] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date === "" || name === "" || rollno === "") {
      alert("please fill all fields");
    } else {
      db.collection("studentabsentreport").add({
        "date": date,
        "name": name,
        "rollno": rollno,
        "section": section,
        "year": year
      }).then(() => {
        alert("data was successfully submitted to the tutor");
      }).catch((error) => {
        console.log(error);
      });
      setName('');
      setRollno('');
    }
  }
  return <>
    <Representativenavbar />
    <br /><br /><br /><br />
    <Card className="leaveform-card">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">ABSENTEES FORM</h2>
          <Form.Group controlId="formBasicStartdate">
            <Form.Label>Pick Date</Form.Label>
            <Form.Control type="text" onFocus={(e) => e.target.type = 'date'} value={date} onChange={(e) => setDate(e.target.value)} placeholder="Pick date" />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Enter Student Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group controlId="formBasicRollno">
            <Form.Label>Enter Student Rollno</Form.Label>
            <Form.Control type="text" value={rollno} onChange={(e) => setRollno(e.target.value)} placeholder="Enter Your Rollno" />
          </Form.Group>

          <Form.Group controlId="formBasicDays">
            <Form.Label>Pick section</Form.Label>
            <br />
            <select className="days" value={section} onChange={(e) => setSection(e.target.value)}>
              <option value="" disabled={true}>Pick section</option>
              <option value="CSE-A">CSE-A</option>
              <option value="CSE-B">CSE-B</option>
              <option value="CSE-C">CSE-C</option>
              <option value="CSE-D">CSE-D</option>
            </select>
          </Form.Group>

          <Form.Group controlId="formBasicDays">
            <Form.Label>Pick Year</Form.Label>
            <br />
            <select className="days" value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="" disabled={true}>Pick year</option>
              <option value="I-year">I-year</option>
              <option value="II-year">II-year</option>
              <option value="III-year">III-year</option>
              <option value="IV-year">IV-year</option>
            </select>
          </Form.Group>
          <br />
          <Button variant="secondary" className="submit" type="submit">
            Add Student
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </>
}
export default Representativepage;