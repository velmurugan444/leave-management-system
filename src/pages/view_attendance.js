import React from 'react';
import { db } from '../files/firebase';
import { Card, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tutornavbar from '../navbar/tutor_navbar';
import '../css/alert_message.css';

toast.configure()

class Viewattendance extends React.Component {
    constructor() {
        super();
        this.state = {
            section: '',
            year: '',
            display: false,
        }
    }
    state = {
        students: null,
    };
    handleSection(sectionvalue) {
        this.setState({
            section: sectionvalue
        });
    }
    handleYear(yearvalue) {
        this.setState({
            year: yearvalue
        });

        var currentDate = new Date().toISOString().slice(0, 10);

        alert(this.state.section)
        alert(yearvalue)
        alert(currentDate)
        db.collection("studentabsentreport").where("date", "==", currentDate).where("section", "==", this.state.section).where("year", "==", yearvalue).get().then((snapshot) => {
            const students = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                students.push(data);
            })
            if (students.length == 0) {
                this.setState({
                    display: false
                })
            } else {
                this.setState({
                    display: true
                })
                this.setState({
                    students: students,
                })
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    render() {

        return <>
            <br /><br /><br /><br />
            <Tutornavbar />
            <Form.Group controlId="formBasicSection">
                <Form.Label>Pick Student Section</Form.Label>
                <br />
                <select className="section" value={this.state.section} onChange={(e) => this.handleSection(e.target.value)}>
                    <option value="" disabled={true}>Pick Section</option>
                    <option value="CSE-A">CSE-A</option>
                    <option value="CSE-B">CSE-B</option>
                    <option value="CSE-C">CSE-C</option>
                </select>
            </Form.Group>

            <Form.Group controlId="formBasicYear">
                <Form.Label>Pick Student Year</Form.Label>
                <br />
                <select className="section" value={this.state.year} onChange={(e) => this.handleYear(e.target.value)}>
                    <option value="" disabled={true}>Pick Year</option>
                    <option value="I-year">I-year</option>
                    <option value="II-year">II-year</option>
                    <option value="III-year">III-year</option>
                    <option value="IV-year">IV-year</option>
                </select>
            </Form.Group>
            <br />
            <div>
                {
                    this.state.students ? this.state.students.map((student, index) => {
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
                                        <p>Section : {student.section}</p>
                                        <p>Year : {student.year}</p>
                                        <br /><br />
                                    </div>

                                </Card.Body>
                            </Card>
                        );
                    }) : <div className="container"><div className="alert alert-danger">No Attendance Yet</div></div>}

            </div>


        </>
    }

}
export default Viewattendance;