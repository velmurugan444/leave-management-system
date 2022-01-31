import React from 'react';
import { Form } from 'react-bootstrap';
import { db } from '../files/firebase';
import { Card } from 'react-bootstrap';
import Teachernavbar from '../navbar/teacher_navbar';

class Teacherpage extends React.Component {
    constructor() {
        super();
        this.state = {
            new: '',
            section: '',
            year: '',
            display: false,
        };
    }
    state = {
        students: null,
    };

    handleChange(value) {
        this.setState({
            new: value
        });
        console.log(value);

    }

    handleSection(sectionvalue) {
        this.setState({
            section: sectionvalue
        });
    }

    handleYear(yearvalue) {
        this.setState({
            year: yearvalue
        });
        alert(this.state.new);
        alert(this.state.section)
        alert(yearvalue)
        db.collection("studentabsentreport").where("date", "==", this.state.new).where("section", "==", this.state.section).where("year", "==", yearvalue).get().then((snapshot) => {
            const students = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                students.push(data);
            })
            if (students.length == 0) {
                this.setState({
                    display: false,
                });
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
            <Teachernavbar />
            <Form.Group controlId="formBasicStartdate">
                <Form.Label>Pick Date</Form.Label>
                <Form.Control type="text" onFocus={(e) => e.target.type = 'date'} placeholder="Pick start date" className="retrieve-date" value={this.state.new} onChange={(e) => this.handleChange(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicSection">
                <Form.Label>Pick class Section</Form.Label>
                <br />
                <select className="section" className="section" value={this.state.section} onChange={(e) => this.handleSection(e.target.value)}>
                    <option value="" disabled={true}>Pick Section</option>
                    <option value="CSE-A">CSE-A</option>
                    <option value="CSE-B">CSE-B</option>
                    <option value="CSE-C">CSE-C</option>
                </select>
            </Form.Group>

            <Form.Group controlId="formBasicYear">
                <Form.Label>Pick class Year</Form.Label>
                <br />
                <select className="section" className="year" value={this.state.year} onChange={(e) => this.handleYear(e.target.value)}>
                    <option value="" disabled={true}>Pick college Year</option>
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
                                    <br /><br />
                                </div>
                            </Card.Body>
                        </Card>
                    );
                }) : <div className="container"><div className="alert alert-danger" >No Absent Report Yet</div></div>
            }

        </>
    }
}
export default Teacherpage;