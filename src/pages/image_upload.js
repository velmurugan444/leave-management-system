import React, { useState } from 'react';
import { db, storage } from '../files/firebase';
import { Card, Form, Button } from 'react-bootstrap';
import Studentnavbar from '../navbar/student_navbar';


const Imageupload = () => {

    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const name = localStorage.getItem('name');
    const rollno = localStorage.getItem('rollno');
    const section = localStorage.getItem('section');
    const department = localStorage.getItem('department');
    const year = localStorage.getItem('year');

    const handleUpload = () => {
        var currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var fullyear = currentDate.getFullYear()
        var fulldate = day + "-0" + month + "-" + fullyear;
        const uploadTask = storage.ref('permissionimages').child(fulldate.toString() + ".jpg").put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref("permissionimages").child(fulldate.toString() + ".jpg").getDownloadURL().then((url) => {
                    console.log(url);
                    setUrl(url);
                    alert(url);
                    db.collection("studentpermissionimages").add({
                        "date": fulldate,
                        "name": name,
                        "rollno": rollno,
                        "section": section,
                        "Year": year,
                        "department": department,
                        "image": url
                    }).then(() => {
                        alert("Your permission image has been submitted successfully");
                    })
                })

            }
        )

    }

    return (

        <React.Fragment>
            <br /><br /><br /><br />
            <Studentnavbar />

            <Card className="leaveform-card">
                <Card.Body>
                    <Form >
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Enter Your Name</Form.Label>
                            <Form.Control type="text" defaultValue={name} placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicRollno">
                            <Form.Label>Enter Your Rollno</Form.Label>
                            <Form.Control type="text" defaultValue={rollno} placeholder="Enter Your Rollno" />
                        </Form.Group>
                        <Form.Group controlId="formBasicSection">
                            <Form.Label>Pick Your Section</Form.Label>
                            <Form.Control type="text" defaultValue={section} placeholder="Enter Your Section" />
                        </Form.Group>

                        <Form.Group controlId="formBasicSection">
                            <Form.Label>Enter Your Year</Form.Label>
                            <Form.Control type="text" defaultValue={year} placeholder="Enter Your year" />
                        </Form.Group>

                        <Form.Group controlId="formBasicDepartment">
                            <Form.Label>Pick Your Department</Form.Label>
                            <Form.Control type="text" defaultValue={department} placeholder="Enter Your Department" />
                        </Form.Group>
                        <Form.Group controlId="formBasicDepartment">
                            <Form.Label>Pick Your Image</Form.Label>
                            <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="Pick Image" />
                            <progress value={progress} onChange={(e) => setProgress(e.target.progress)} max="100" />
                        </Form.Group>
                        <img src={url || 'https://via.placeholder.com/150'} alt="uploaded images" height="300" width="300" />
                        <br /><br />
                        <Button variant="primary" className="submit" onClick={handleUpload}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        </React.Fragment>

    )
}

export default Imageupload;