import React, { useState } from 'react';
import { db, storage } from '../files/firebase';
import { Card, Form, Button } from 'react-bootstrap';
import Tutornavbar from '../navbar/tutor_navbar';


const Pdfupload = () => {
    const [section, setSection] = useState('');
    const [collegeyear, setCollegeyear] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const handleUpload = () => {

        var currentDate = new Date()
        var day = currentDate.getDate()
        var setmonth = currentDate.getMonth() + 1
        var setyear = currentDate.getFullYear()
        var fulldate = day + "-0" + setmonth + "-" + setyear;
        const uploadTask = storage.ref('permissionreports').child(fulldate.toString() + ".pdf").put(image);
        uploadTask.on('state_changed', function (snapshot) {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
            storage.ref("permissionreports").child(fulldate.toString() + ".pdf").getDownloadURL().then((url) => {
                console.log(url);
                setUrl(url);
                alert(url);
                db.collection("permissionreports").add({
                    "date": fulldate,
                    "section": section,
                    "collegeyear": collegeyear,
                    "month": month,
                    "year": year,
                    "pdf": url
                }).then(() => {
                    alert("The pdf has been submitted successfully");
                })
            })
        });
    }

    return (

        <React.Fragment>
            <br /><br /><br /><br />
            <Tutornavbar />
            <Card className="leaveform-card">
                <Card.Body>
                    <Form >
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

                        <Form.Group controlId="formBasicDepartment">
                            <Form.Label>Select Pdf</Form.Label>
                            <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="Pick Image" />
                            <progress value={progress} onChange={(e) => setProgress(e.target.progress)} max="100" />
                        </Form.Group>

                        <br />
                        <Button variant="primary" className="submit" onClick={handleUpload}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        </React.Fragment>

    )
}

export default Pdfupload;