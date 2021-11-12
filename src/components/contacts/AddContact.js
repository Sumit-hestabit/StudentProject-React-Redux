import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import axios from "axios";


const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  
  const [student_id, setStudent_id] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLastName] = useState("");
  const [class_name, setClass_name] = useState("");
  const [section, setSection] = useState("");
  const [email_address, setEmail] = useState("");
  const [campus, setCampus] = useState("");

  const craeteContact = (e) => {
    e.preventDefault();
    // const new_contact = {
    //   student_id:student_id,
    //   first_name:first_name,
    //   last_name:last_name,
    //   class_name:class_name,
    //   section:section,
    //   email_address:email_address,
    //   campus:campus
    // };
    // console.log(student_id,first_name,last_name,class_name,section,email_address,campus);
    // dispatch(addContact(new_contact));
    // history.push("/");
  };

  // useEffect(()=>{
  //  axios.get("https://mtml-api.hestawork.com/api/userClass/class-details")
  //  .then((getData)=>{
  //    console.log(getData);
  //  })
  // })

  const sendDataToApi = () => {
    axios.post("https://mtml-api.hestawork.com/api/user/filter-students",{
      student_id,first_name,last_name,class_name,section,email_address,campus
    })
  } 

//   return (
//     <div className="card border-0 shadow">
//       <div className="card-header">Add a Student</div>
//       <div className="card-body">
//         <form onSubmit={(e) => craeteContact(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Your Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Your E-mail Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <button className="btn btn-primary" type="submit">
//             Create Contact
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };



return (
  <div className="card border-0 shadow">
    <div className="card-header">Add a Student Details</div>
    <div className="card-body">
      <form onSubmit={(e) => craeteContact(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Student ID"
            value={student_id}
            onChange={(e) => setStudent_id(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your First Name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Last Name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Class"
            value={class_name}
            onChange={(e) => setClass_name(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Email Address"
            value={email_address}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Campus"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
          />
        </div>

        <button className="btn btn-warning" type="submit">
          Update Contact
        </button>
      </form>
    </div>
  </div>
);
};


export default AddContact;
