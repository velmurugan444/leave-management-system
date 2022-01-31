import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { db } from '../files/firebase';
import { Card, Button } from 'react-bootstrap';
import Tutornavbar from '../navbar/tutor_navbar';
import '../css/alert_message.css';


const Studentmonthlyattendance = () => {

    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [section, setSection] = useState('');
    const [year, setYear] = useState('');
    const [rollno, setRollno] = useState('');
    const [students, setStudents] = useState([]);
    const [display, setdisplay] = useState(false);


    const handleSubmit = () => {
        alert(startdate)
        alert(enddate)
        alert(section)
        alert(year)
        alert(rollno)
        db.collection("studentabsentreport").where("section", "==", section).where("year", "==", year).where("rollno", "==", rollno).where("date", ">=", startdate).where("date", "<=", enddate).get().then((snapshot) => {
            const students = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                students.push(data);
            })
            if (students.length == 0) {
                setdisplay(false);
            } else {
                setdisplay(true);
                setStudents(students);
            }
        }).catch((error) => {
            console.log(error);
        })
    }



    return <>
        <br /><br /><br /><br />
        <Tutornavbar />
        <Form.Group controlId="formBasicStartdate">
            <Form.Label>Pick Start Date</Form.Label>
            <Form.Control type="text" onFocus={(e) => e.target.type = 'date'} placeholder="Pick start date" className="retrieve-date" value={startdate} onChange={(e) => setStartdate(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEnddate">
            <Form.Label>Pick end date</Form.Label>
            <Form.Control type="text" onFocus={(e) => e.target.type = 'date'} placeholder="pick end date" className="retrieve-date" value={enddate} onChange={(e) => setEnddate(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicSection">
            <Form.Label>Pick Tutor Section</Form.Label>
            <br />
            <select className="section" value={section} onChange={(e) => setSection(e.target.value)}>
                <option>Pick Section</option>
                <option value="CSE-A">CSE-A</option>
                <option value="CSE-B">CSE-B</option>
                <option value="CSE-C">CSE-C</option>
            </select>
        </Form.Group>

        <Form.Group controlId="formBasicYear">
            <Form.Label>Pick Tutor Year</Form.Label>
            <br />
            <select className="section" value={year} onChange={(e) => setYear(e.target.value)}>
                <option>Pick Year</option>
                <option value="I-year">I-year</option>
                <option value="II-year">II-year</option>
                <option value="III-year">III-year</option>
                <option value="IV-year">IV-year</option>
            </select>
        </Form.Group>

        <Form.Group controlId="formBasicRollno">
            <Form.Label>Enter Rollno</Form.Label>
            <Form.Control type="text" placeholder="Enter Rollno" className="retrieve-date" value={rollno} onChange={(e) => setRollno(e.target.value)} />
        </Form.Group>

        <Button varient="primary" id="get" onClick={handleSubmit}>Get Report</Button>
        <br />
        {
            students ? students.map((student, index) => {
                return (
                    <Card className="permission-card" key={index}>
                        <br />
                        <Card.Body>
                            <div>
                                <p>
                                    Date : {student.date}
                                </p>
                                <p>Name : {student.name}</p>
                                <p>Rollno : {student.rollno}</p>
                                <br /><br />
                            </div>
                        </Card.Body>
                    </Card>
                );
            }) : <div className="container"><div className="alert alert-danger">No Absent Report Yet</div></div>
        }
    </>
}
export default Studentmonthlyattendance;