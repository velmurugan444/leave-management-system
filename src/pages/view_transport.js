import React,{useState,useEffect} from "react";
import { db } from "../files/firebase";
import Navbar from "./navbar";


 const Viewtransport = () => {
    const [busDetails, setbusDetails] = useState([]);
    useEffect(() => {
       db
        .collection("buses")
        .get()
        .then(snapshot =>
          snapshot.forEach(ele => {
            var data = ele.data();
            setbusDetails(arr => [...arr, data]);
          })
        );

    }, []);


    return <>
       
        <div>
         <Navbar/>
             <section class="ftco-section">
        <div class="container"style={{maxWidth:"1000px",marginTop:"50px"}}>
          <div class="row justify-content-center" />
          <div class="row">
            <div class="col-md-12">
            
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th>Bus No</th>
                      <th>Bus Time</th>
                      <th>Bus Route</th>
                      <th>Bus Destination</th>
                      <th>Bus Point</th>
                      
                    </tr>
                  </thead>
            {
             busDetails.map((data, index) => {
                    return  <tbody>
                    <tr class="alert" role="alert"key={index}>
                      <th scope="row">{data.busnumber}</th>
                      <td>{data.bustime}</td>
                      <td>{data.busroute}</td>
                      <td>{data.busdestination}</td>
                      <td>{data.buspoint}</td>
                    </tr>
                    </tbody>
                }) 
            }
              </table>
              </div>
            </div>
          </div>
      
      </section>
            </div>
        
    </>;
};
export default Viewtransport;
