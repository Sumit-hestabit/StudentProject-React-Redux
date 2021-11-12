// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getContact, updateContact } from "../../actions/contactAction";
// import shortid from "shortid";
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure()

// const EditContact = () => {
//   let { id } = useParams();
//   let history = useHistory();
//   const dispatch = useDispatch();
//   const contact = useSelector((state) => state.contact.contact);

//   const [student_id, setStudent_id] = useState("");
//   const [first_name, setFirst_name] = useState("");
//   const [last_name, setLastName] = useState("");
//   const [class_name, setClass_name] = useState("");
//   const [section, setSection] = useState("");
//   const [email_address, setEmail] = useState("");
//   const [campus, setCampus] = useState("");
  
//   const notify = () => {
//    toast.success('Sucessfully Updated !');
//   }

//   useEffect(() => {
//     if (contact != null) {
//       setStudent_id(contact.student_id);
//       setFirst_name(contact.first_name);
//       setLastName(contact.last_name);
//       setClass_name(contact.class_name);
//       setSection(contact.section);
//       setEmail(contact.email_address);
//       setCampus(contact.campus);  
//     }
//     dispatch(getContact(id));
//   }, [contact]);

//   const onUpdateContact = (e) => {
//     e.preventDefault();

//     const update_contact = Object.assign(contact, {
//       student_id:student_id,
//       first_name:first_name,
//       last_name:last_name,
//       class_name:class_name,
//       section:section,
//       email_address:email_address,
//       campus:campus
//     });

//     dispatch(updateContact(update_contact));
//     history.push("/") 
//   };
//   return (
   
//    <div className="card border-0 shadow">
//       <div className="card-header">Edit a Student Details</div>
//       <div className="card-body">
//         <form onSubmit={(e) => onUpdateContact(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Student ID"
//               value={student_id}
//               onChange={(e) => setStudent_id(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Your First Name"
//               value={first_name}
//               onChange={(e) => setFirst_name(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Your Last Name"
//               value={last_name}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Your Class"
//               value={class_name}
//               onChange={(e) => setClass_name(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Your Section"
//               value={section}
//               onChange={(e) => setSection(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Your Email Address"
//               value={email_address}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Your Campus"
//               value={campus}
//               onChange={(e) => setCampus(e.target.value)}
//             />
//           </div>

//           <button className="btn btn-warning" type="submit" onClick={notify}>
//             Update Contact
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditContact;
