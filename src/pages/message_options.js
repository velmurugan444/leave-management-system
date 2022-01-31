
import React from 'react';
import{Link} from 'react-router-dom';

class Messageoptions extends React.Component{
  constructor(props){
    super(props);
  }
 
  state={
    studentrollno:this.props.studentrollno,
     studentname:this.props.studentname,
    studentsection:this.props.studentsection,
    studentdepartment:this.props.studentdepartment,
    studentyear:this.props.studentyear
  }
  render(){
     
    return <div>
         <div className="btn-group float-right" role="group" aria-label="Button group with nested dropdown"id="student-options">
  
  <div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      View
    </button>

    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <Link className="dropdown-item"to={{pathname:"/Permissionresponsepage",state:this.state}}>Confirmation Letters</Link>
      <Link className="dropdown-item" to={{pathname:"/Rejectedpermission",state:this.state}}>Rejection Letters</Link>
      <Link className="dropdown-item" to={{pathname:"/Textmessage",state:this.state}}>Messages</Link>
      <Link className="dropdown-item" to={{pathname: "/Logout"}}>Logout</Link>
    </div>
   
  </div>
  </div>
    </div>
  }
}
export default Messageoptions;