import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { db } from '../files/firebase';
import Hodnavbar from '../navbar/hod_navbar';


const Monthlyreport = () => {
    const [section, setSection] = useState('');
    const [collegeyear, setCollegeyear] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [students, setStudents] = useState([]);
    const [record, setrecord] = useState(false);
    const reportFunction = () => {
        db.collection("permissionreports").where("section", "==", section).where("collegeyear", "==", collegeyear).where("month", "==", month).where("year", "==", year).get().then((snapshot) => {
            const students = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                console.log(data);
                if (data == "") {
                    setrecord(false);
                } else {
                    setrecord(true);
                    students.push(data);
                }
            })
            setStudents(students)
        }).catch((error) => {
            console.log(error);
        })
        setSection('');
        setCollegeyear('');

    }


    return <>
        <br /><br /><br /><br />
        <Hodnavbar />
        <Form.Group controlId="formBasicStartdate">
            <Card className="report-card">
                <br /><br /><br /><br />

                <Form.Group controlId="formBasicSection">
                    <Form.Label>Pick class Section</Form.Label>
                    <br />
                    <select className="section" value={section} onChange={(e) => setSection(e.target.value)}>
                        <option value="" disabled={true}>Pick Section</option>
                        <option value="CSE-A">CSE-A</option>
                        <option value="CSE-B">CSE-B</option>
                        <option value="CSE-C">CSE-C</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formBasicYear">
                    <Form.Label>Pick class Year</Form.Label>
                    <br />
                    <select className="section" value={collegeyear} onChange={(e) => setCollegeyear(e.target.value)}>
                        <option value="" disabled={true}>Pick college Year</option>
                        <option value="I-year">I-year</option>
                        <option value="II-year">II-year</option>
                        <option value="III-year">III-year</option>
                        <option value="IV-year">IV-year</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formBasicMonth">
                    <Form.Label>Pick Month</Form.Label>
                    <br />
                    <select className="section" value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="" disabled={true}>Pick month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formBasicYear">
                    <Form.Label>Pick Year</Form.Label>
                    <br />
                    <select className="section" value={year} onChange={(e) => setYear(e.target.value)}>
                        <option value="" disabled={true}>Pick Year</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </Form.Group>
                <br />
                <Button varient="primary" onClick={reportFunction} className="get-button">Get</Button>
                <br />

                <br />
                <Card.Body>
                    {
                        record ? students.map((student, index) => {
                            return (
                                <div key={index}>
                                    <p>Date : {student.date}</p>
                                    <p>Section : {student.section}</p>
                                    <p>Collegeyear : {student.collegeyear}</p>
                                    <p>Month : {student.month}</p>
                                    <p>Year : {student.year}</p>
                                    <br />
                                    <Button variant="primary" className="submit" onClick={() => window.open(student.pdf)}>View Pdf</Button>
                                    <br /><br />
                                </div>
                            )
                        }) : <div className="container"><div className="alert alert-danger">No Records Found</div></div>
                    }
                </Card.Body>
            </Card>

        </Form.Group>
    </>
}
export default Monthlyreport;