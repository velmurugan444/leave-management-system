import React, { useState } from 'react';
import { db } from '../files/firebase';
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Studentnavbar from '../navbar/student_navbar';
toast.configure()

const Permissionresponsepage = () => {

    const [students, setStudents] = useState([]);
    const [display, setdisplay] = useState(false);
    var rollno = localStorage.getItem('rollno');
    var section = localStorage.getItem('section');
    var year = localStorage.getItem('year');



    db.collection("rejectedpermissions").where("rollno", "==", rollno).where("section", "==", section).where("year", "==", year).get().then(snapshot => {
        const students = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            students.push(data);
        })
        if (students.length == 0) {
            setdisplay(false);
        } else {
            setdisplay(true);
            setStudents(students);
        }

    }).catch(error => console.log(error))



    return <div>
        <Studentnavbar />
        <br /><br /><br /><br /><br /><br />
        {
            display ? students.map((student, index) => {

                return (
                    <Card className="alert alert-danger" style={display ? { display: "block" } : { display: "none" }} key={index}>
                        <Card.Body>
                            <br />
                            <div>
                                <p>Date : {student.date}</p>
                                <p>Name : {student.name}</p>
                                <p>Rollno : {student.rollno}</p>
                                <p>Section : {student.section}</p>
                                <p>Year : {student.year}</p>
                                <p>Department : {student.department}</p>
                                <p>No of Days : {student.days}</p>
                                <p>Startdate : {student.startdate}</p>
                                <p>Enddate : {student.enddate}</p>
                                <p>Reason : {student.reason}</p>
                                <p id="hod-permission-rejected-status"><i className="fa fa-close"></i>&nbsp;&nbsp;&nbsp;{student.status}</p>                                <br /><br /><br />
                            </div>
                        </Card.Body>
                    </Card>
                )
            }) : <div className="container"><div className="alert alert-danger" style={{ marginLeft: "0%" }}>No Rejected Letter Yet</div></div>
        }
    </div>

}

export default Permissionresponsepage;
