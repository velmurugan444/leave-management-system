import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { db } from "../files/firebase";
import Transportnavbar from "../navbar/transport_navbar";

 const Viewbuses = () => {
    const history = useHistory();
    const [busDetails, setbusDetails] = useState([]);
    useEffect(() => {
       db
       
        .collection("buses")
        .get()
        .then(snapshot =>
          snapshot.forEach(ele => {
            var id = ele.id;
            var data = ele.data();
            console.log(data);
            setbusDetails(arr => [...arr,{data:data,id:id}]);
          })
        );

    }, []);


    return <>
       
        <div>
            <Transportnavbar/>
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
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
            {
             busDetails.map((data, index) => {
                    return  <tbody>
                    <tr class="alert" role="alert">
                      <th scope="row">{data.busnumber}</th>
                      <td>{data.data.bustime}</td>
                      <td>{data.data.busroute}</td>
                      <td>{data.data.busdestination}</td>
                      <td>{data.data.buspoint}</td>
                      <td>
                        <Link
                           onClick={()=>{
                               localStorage.setItem("busnumber",data.data.busnumber);
                               localStorage.setItem("bustime",data.data.bustime);
                               localStorage.setItem("busroute",data.data.busroute);
                               localStorage.setItem("busdestination",data.data.busdestination);
                               localStorage.setItem("buspoint",data.data.buspoint);
                               localStorage.setItem("busid",data.id);
                               history.push("/updatebuses");
                           }} 
                          class="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">
                            <i class="fa fa-refresh" />
                          </span>
                        </Link>
                      </td>
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
export default Viewbuses;
