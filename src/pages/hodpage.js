import React from 'react';
import { db } from '../files/firebase';
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hodnavbar from '../navbar/hod_navbar';
toast.configure()

class Hodpage extends React.Component {
    state = {
        students: null,
        display: false,
    }
    componentDidMount() {
        db.collection("leavepermission").get().then(snapshot => {
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
                    display: true
                })
                this.setState({
                    students: students
                })
            }
        }).catch(error => console.log(error))
        setInterval(() => {
            window.location.reload();
        }, 30000)
    }

    render() {

        return <div>
            <br /><br /><br /><br />
            <Hodnavbar />

            {

                this.state.students ? this.state.students.map((student, index) => {
                    const allowFunction = () => {
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
                        db.collection("allowedpermissions").add({
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
                            "status": "permission granted by HOD"
                        }).then(() => {
                            db.collection("leavepermission").where("rollno", "==", rollno).where("section", "==", section).where("year", "==", year).get().then((snapshot) => {
                                snapshot.forEach(function (doc) {
                                    doc.ref.delete();
                                })
                            });


                            toast("Student permission is accepted and send for confirmation!!!");
                        });
                    }


                    const rejectFunction = () => {
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
                        db.collection("rejectedpermissions").add({
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
                            "status": "permission denied by HOD"
                        }).then(() => {
                            db.collection("leavepermission").where("rollno", "==", rollno).where("section", "==", section).where("year", "==", year).get().then((snapshot) => {
                                snapshot.forEach(function (doc) {
                                    doc.ref.delete();


                                })
                            });
                            toast("Student permission is rejected!!!");
                        });
                    }
                    return (
                        <Card className="permission-card" key={index}>
                            <br />
                            <Card.Body>


                                <div>
                                    <p>Name : {student.name}</p>
                                    <p>Rollno : {student.rollno}</p>
                                    <p>Section : {student.section}</p>
                                    <p>Department : {student.department}</p>
                                    <p>Year : {student.year}</p>
                                    <p>No of Days : {student.days}</p>
                                    <p>Startdate : {student.startdate}</p>
                                    <p>Enddate : {student.enddate}</p>
                                    <p>Reason : {student.reason}</p>
                                    <br />
                                    <button className="deny-button" onClick={rejectFunction}><i className="fa fa-close"></i> Reject</button>

                                    <button className="allow-button" onClick={allowFunction}><i className="fa fa-check"></i> Allow</button>
                                    <br /><br /><br />
                                </div>
                            </Card.Body>

                        </Card>
                    )
                }) : <div className="container"><div className="alert alert-danger" style={{ marginLeft: "0%" }}>No Student Permissions Yet</div></div>
            }


        </div>


    }
}
export default Hodpage;