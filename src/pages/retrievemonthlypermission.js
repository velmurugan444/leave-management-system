import React from 'react';
import { Form } from 'react-bootstrap';
import { db } from '../files/firebase';
import { Card } from 'react-bootstrap';
import Tutornavbar from '../navbar/tutor_navbar';
import '../css/alert_message.css';


class Retrievemonthlypermission extends React.Component {
    constructor() {
        super();
        this.state = {
            startdate: '',
            enddate: '',
            section: '',
            year: '',
            display: false,
        };
    }
    state = {
        students: null,
    };

    handleChange(startdatevalue) {
        this.setState({
            startdate: startdatevalue
        });
        console.log(startdatevalue);

    }

    handledateChange(endvalue) {
        this.setState({
            enddate: endvalue
        });
    }

    handleSection(sectionvalue) {
        this.setState({
            section: sectionvalue
        });
    }


    handleYear(yearvalue) {
        this.setState({
            year: yearvalue
        })
        alert(this.state.startdate);
        alert(this.state.enddate);
        alert(this.state.section);
        alert(yearvalue);
        db.collection("confirmpermissions").where("section", "==", this.state.section).where("year", "==", yearvalue).where("date", ">=", this.state.startdate).where("date", "<=", this.state.enddate).get().then((snapshot) => {
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
            <Form.Group controlId="formBasicStartdate">
                <Form.Label>Pick Start Date</Form.Label>
                <Form.Control type="text" onFocus={(e) => e.target.type = 'date'} placeholder="Pick start date" className="retrieve-date" value={this.state.startdate} onChange={(e) => this.handleChange(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEnddate">
                <Form.Label>Pick end date</Form.Label>
                <Form.Control type="text" onFocus={(e) => e.target.type = 'date'} placeholder="pick end date" className="retrieve-date" value={this.state.enddate} onChange={(e) => this.handledateChange(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicSection">
                <Form.Label>Pick Tutor Section</Form.Label>
                <br />
                <select className="section" value={this.state.section} onChange={(e) => this.handleSection(e.target.value)}>
                    <option>Pick Section</option>
                    <option value="CSE-A">CSE-A</option>
                    <option value="CSE-B">CSE-B</option>
                    <option value="CSE-C">CSE-C</option>
                </select>
            </Form.Group>

            <Form.Group controlId="formBasicYear">
                <Form.Label>Pick Tutor Year</Form.Label>
                <br />
                <select className="section" value={this.state.year} onChange={(e) => this.handleYear(e.target.value)}>
                    <option>Pick Year</option>
                    <option value="I-year">I-year</option>
                    <option value="II-year">II-year</option>
                    <option value="III-year">III-year</option>
                    <option value="IV-year">IV-year</option>
                </select>
            </Form.Group>
            <br />
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
                                    <p>Department : {student.department}</p>
                                    <p>No Of Days : {student.days}</p>
                                    <p>Start Date : {student.startdate}</p>
                                    <p>End Date : {student.enddate}</p>
                                    <p>Reason : {student.reason}</p>
                                    <p id="hod-permission-status"><i className="fa fa-check"></i>&nbsp;&nbsp;&nbsp;{student.status}</p>
                                    <br /><br />
                                </div>
                            </Card.Body>
                        </Card>
                    );
                }) : <div className="container"><div className="alert alert-danger">No Permission Report Yet</div></div>
            }
        </>
    }
}
export default Retrievemonthlypermission;