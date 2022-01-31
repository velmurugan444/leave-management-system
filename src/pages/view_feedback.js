import React, { useState, useEffect } from 'react'
import { db } from '../files/firebase.js';
import Hodnavbar from '../navbar/hod_navbar.js';
import '../css/view_tutor.css';



export const Viewfeedback = () => {
    const [feedback, setfeedback] = useState([]);
    const [data, setdata] = useState(false);
    useEffect(() => {
        db.collection("studentfeedbacks").get().then((snapshot) => snapshot.forEach((ele) => {
            var data = { data: ele.data(), id: ele.id };
            if (data == "") {
                setdata(false);
            } else {
                setdata(true);
                setfeedback(arr => [...arr, data]);
            }
            //console.log(data.id); 
        }))
    }, [])
    return (
        <div>
            <Hodnavbar />
            <br /><br /><br /><br />
            <table> <tbody>
                <tr style={data ? { display: "contents" } : { display: "none" }}>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>FEEDBACK</th>
                </tr>
                {feedback != "" ?
                    feedback.map((data, index) => {
                        return <tr key={index}>
                            <td>{data.data.name}</td>
                            <td>{data.data.email}</td>
                            <td>{data.data.message} &ensp;&ensp;&ensp;&ensp;<i className="fa fa-trash" aria-hidden="true" onClick={() => { db.collection('studentfeedbacks').doc(data.id).delete(); }}></i></td>

                        </tr>;

                    }) : <div className="container1"><div className="alert alert-danger" id="alert">No Feedback Available</div></div>
                }
            </tbody></table></div >
    )
}