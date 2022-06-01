import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { db } from '../files/firebase';
import Transportnavbar from '../navbar/transport_navbar';

const Updatebuses = () => {
  const [busnumber, setbusnumber] = useState(localStorage.getItem("busnumber"));
  const [busroute, setbusroute] = useState(localStorage.getItem("busroute"));
  const [bustime, setbustime] = useState(localStorage.getItem("bustime"));
  const [buspoint, setbuspoint] = useState(localStorage.getItem("buspoint"));
  const [busdestination, setbusdestination] = useState(localStorage.getItem("busdestination"));
var key = localStorage.getItem("busid");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busnumber === "" || busroute === "" || bustime === "" || buspoint === "" || busdestination === "") {
      alert("please fill all fields");
    } else {
   
            db.collection("buses").doc(key).update({
                busnumber: busnumber,
                busroute: busroute,
                bustime: bustime,
                buspoint: buspoint,
                busdestination: busdestination
            }).then(()=>{
               alert("data updated successfully")
                localStorage.clear();
            })
        }
  }
  return <>
    <Transportnavbar/>
    <br /><br /><br /><br />
    <Card className="leaveform-card">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">ADD BUS ROUTES</h2>
        
          <Form.Group controlId="formBasicName">
            <Form.Label>Bus Number</Form.Label>
            <Form.Control type="text" value={busnumber} onChange={(e) => setbusnumber(e.target.value)} placeholder="Enter Bus Number" />
          </Form.Group>

          <Form.Group controlId="formBasicRollno">
            <Form.Label>Bus Route</Form.Label>
            <Form.Control type="text" value={busroute} onChange={(e) => setbusroute(e.target.value)} placeholder="Enter Bus Route" />
          </Form.Group>

          <Form.Group controlId="formBasicRollno">
            <Form.Label>Bus Starting Time</Form.Label>
            <Form.Control type="time" value={bustime} onChange={(e) => setbustime(e.target.value)} placeholder="Pick Bus Time" />
          </Form.Group>

             <Form.Group controlId="formBasicRollno">
            <Form.Label>Bus Point</Form.Label>
            <Form.Control type="text" value={buspoint} onChange={(e) => setbuspoint(e.target.value)} placeholder="Enter Bus Point" />
          </Form.Group>


            <Form.Group controlId="formBasicRollno">
            <Form.Label>Bus Destination</Form.Label>
            <Form.Control type="text" value={busdestination
            } onChange={(e) => setbusdestination(e.target.value)} placeholder="Enter Bus destination" />
          </Form.Group>
        
          <br />
          <Button variant="secondary" className="submit" type="submit">
            Update Bus
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </>
}
export default Updatebuses;