import React from 'react';
import { db } from '../files/firebase';
import { Card, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/alert_message.css';
import Tutornavbar from '../navbar/tutor_navbar';
toast.configure()

class Tutorpage extends React.Component {
    constructor() {
        super();
        this.state = {
            section: '',
            year: '',
            display: false,
        }
    }
    state = {
        students: null
    }
    handleYear(yearvalue) {
        this.setState({
            year: yearvalue
        });
        alert(this.state.section)
        alert(yearvalue)
        db.collection("allowedpermissions").where("section", "==", this.state.section).where("year", "==", yearvalue).get().then(snapshot => {
            const students = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                students.push(data);
            })
            if (students.length == 0) {
                this.setState({
                    display: false
                })
            } else {
                this.setState({
                    display: true,
                })
                this.setState({
                    students: students
                })
            }
        }).catch(error => console.log(error))
    }

    handleSection(sectionvalue) {
        this.setState({
            section: sectionvalue
        });
    }

    render() {

        return <>

            <Tutornavbar />
            <br /><br /> <br /><br />
            <Form.Group controlId="formBasicSection">
                <Form.Label>Pick Tutor Section</Form.Label>
                <br />
                <select className="section" value={this.state.section} onChange={(e) => this.handleSection(e.target.value)}>
                    <option value="" disabled={true}>Pick Section</option>
                    <option value="CSE-A">CSE-A</option>
                    <option value="CSE-B">CSE-B</option>
                    <option value="CSE-C">CSE-C</option>
                </select>
            </Form.Group>

            <Form.Group controlId="formBasicYear">
                <Form.Label>Pick Tutor Year</Form.Label>
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
                        const confirmFunction = () => {
                            var date = student.date;
                            var name = student.name;
                            var rollno = student.rollno;
                            var section = student.section;
                            var year = student.year;
                            var department = student.department;
                            var days = student.days;
                            var startdate = student.startdate;
                            var enddate = student.enddate;
                            var reason = student.reason;
                            db.collection("confirmpermissions").add({
                                "date": date,
                                "name": name,
                                "rollno": rollno,
                                "section": section,
                                "year": year,
                                "department": department,
                                "days": days,
                                "startdate": startdate,
                                "enddate": enddate,
                                "reason": reason,
                                "status": "permission granted HOD and Tutor"
                            }).then(() => {
                                db.collection("allowedpermissions").where("rollno", "==", rollno).get().then((snapshot) => {
                                    snapshot.forEach(function (doc) {
                                        doc.ref.delete();
                                    })
                                });
                                toast("Confirmation Message has been sent to the student!!!");
                            });
                        }


                        return (

                            <Card className="permission-card" key={index}>
                                <br />
                                <Card.Body>

                                    <p>Name : {student.name}</p>
                                    <p>Rollno : {student.rollno}</p>
                                    <p>Section : {student.section}</p>
                                    <p>Department : {student.department}</p>
                                    <p>Year : {student.year}</p>
                                    <p>No of Days : {student.days}</p>
                                    <p>Startdate : {student.startdate}</p>
                                    <p>Enddate : {student.enddate}</p>
                                    <p>Reason : {student.reason}</p>
                                    <p id="hod-permission-status"><i className="fa fa-check"></i>&nbsp;&nbsp;&nbsp;{student.status}</p>

                                    <br />
                                    <button className="allow-button" onClick={confirmFunction}><i className="fa fa-check"></i> Confirm</button>
                                    <br /><br /><br />
                                </Card.Body>

                            </Card>

                        )
                    }) : <div className="container"><div className="alert alert-danger">No Student Permissions Yet</div></div>}
            </div>
        </>


    }
}
export default Tutorpage;