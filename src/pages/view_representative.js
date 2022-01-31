import { React, useState, useEffect } from 'react';
import { database } from '../files/firebase';
import '../css/view_tutor.css';
import Tutornavbar from '../navbar/tutor_navbar';

export const Viewrepresentative = () => {
    const [data, setdata] = useState(false);
    const [studentDetails, setstudentDetails] = useState([]);
    useEffect(() => {
        var data = database.ref().child("class representative");
        data.on("value", (snapshot) => {
            var student = [];
            var stud = snapshot.val();
            //console.log(user);
            for (let id in stud) {
                student.push({ id, ...stud[id] });
            }
            console.log(stud);
            if (student.length == 0) {
                setdata(false);
            } else {
                setdata(true);
                setstudentDetails(student);
            }
            //alert(student);
            //console.log(tutorDetails);
        })

    }, []);


    return <>
        <Tutornavbar />
        <br /><br /><br /><br />
        <table><tbody>
            <tr style={data ? { display: "contents" } : { display: "none" }}>
                <th>NAME</th>
                <th>SECTION</th>
                <th>YEAR</th>
                <th>MOBILE</th>
            </tr>
            {
                studentDetails != "" ? studentDetails.map((data, index) => {
                    return <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.section}</td>
                        <td>{data.year}</td>
                        <td>{data.mobile} &ensp;&ensp;&ensp;&ensp;<i className="fa fa-trash" aria-hidden="true" onClick={() => {
                            const reference = database.ref('class representative').child(data.id);
                            reference.remove();
                        }}  ></i></td>
                    </tr>;
                }) : <div className="container1"><div className="alert alert-danger" id="alert">No Representative Added Yet</div></div>
            }
        </tbody></table>
    </>;
};
