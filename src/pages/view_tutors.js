import { React, useState, useEffect } from 'react';
import Hodnavbar from '../navbar/hod_navbar';
import { database } from '../files/firebase';
import '../css/view_tutor.css';

export const Viewtutors = () => {
    const [tutorDetails, settutorDetails] = useState([]);
    const [data, setdata] = useState(false);
    useEffect(() => {
        var data = database.ref().child("tutordetails");
        data.on("value", (snapshot) => {
            var student = [];
            var stud = snapshot.val();
            //console.log(user);
            for (let id in stud) {
                if (stud == "") {
                    setdata(false);
                } else {
                    setdata(true);
                    student.push({ id, ...stud[id] });
                }
            }
            console.log(stud);
            settutorDetails(student); //alert(student);
            //console.log(tutorDetails);
        })

    }, []);


    return <>
        <Hodnavbar />
        <br /><br /><br /><br />
        <table><tbody>
            <tr style={data ? { display: "contents" } : { display: "none" }}>
                <th>NAME</th>
                <th>SECTION</th>
                <th>YEAR</th>
                <th>MOBILE</th>
            </tr>
            {
                tutorDetails != "" ? tutorDetails.map((data, index) => {
                    return <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.section}</td>
                        <td>{data.year}</td>
                        <td>{data.mobile}&ensp;&ensp;&ensp;&ensp;<i className="fa fa-trash" aria-hidden="true" onClick={() => {
                            const reference = database.ref('tutordetails').child(data.id);
                            reference.remove(); window.location.reload();
                        }} ></i></td>
                    </tr>;
                }) : <div className="container1"><div className="alert alert-danger" id="alert">No Tutors Added Yet</div></div>
            }
        </tbody></table>
    </>;
};
