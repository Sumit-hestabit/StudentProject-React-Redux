// import React, { useState, useEffect } from "react";
// import "./styles/App.scss";
// import Contacts from "./components/contacts/Contacts";
// import { Provider, useDispatch } from "react-redux";
// import store from "./store";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AddContact from "./components/contacts/AddContact";
// import EditContact  from "./components/contacts/EditContact";
// import {  useSelector } from "react-redux";
// import {getContact,updateContact} from "./actions/contactAction";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import {Card,Button,Form,Input, Drawer} from "antd";
// import { Link } from 'react-router-dom';
// import { deleteContact } from "./actions/contactAction";


// import axios from "axios";

//   const App = ({ contact }) => {

  
//   const dispatch = useDispatch();

//   const { id,email,action} = contact;

//   const [isOpen,setIsOpen] = useState(false);


//   const handlerClick = () => {
//     console.log("hello")
//     setVisible(true);
//   }
//   // slide ops

//   const [visible,setVisible] = useState(false);
//   const showDrawer = (type) => {
//     setVisible(true);
// };

// const closeDrawer = () =>{
//     setVisible(false);
// }

// const showEditDrawer = () => {
//     setVisible(true);
// }

// const formitemLayout = {
//   labelCol:{
//       xs:{
//           span:24,
//       },
//       sm:{
//           span:8,
//       },
//   },
//   wrapperCol:{
//       xs:{
//           span:24,
//       },
//       sm:{
//           span:16,
//       },
//   },
// };

// //EDIT CONTACT DETAILS

// const [student_id, setStudent_id] = useState("");
// const [first_name, setFirst_name] = useState("");
// const [last_name, setLastName] = useState("");
// const [class_name, setClass_name] = useState("");
// const [section, setSection] = useState("");
// const [email_address, setEmail] = useState("");
// const [campus, setCampus] = useState("");

// // 



// const notify = () => {
//  toast.success('Sucessfully Updated !');
// }

// useEffect(() => {
//   if (contact != null) {
//     setStudent_id(contact.student_id);
//     setFirst_name(contact.first_name);
//     setLastName(contact.last_name);
//     setClass_name(contact.class_name);
//     setSection(contact.section);
//     setEmail(contact.email_address);
//     setCampus(contact.campus);  
    
//   }
//   dispatch(getContact(id));
// }, [contact]);

// const onUpdateContact = (e) => {
//   e.preventDefault();

//   const update_contact = Object.assign(contact, {
//     student_id:student_id,
//     first_name:first_name,
//     last_name:last_name,
//     class_name:class_name,
//     section:section,
//     email_address:email_address,
//     campus:campus
//   });

//   dispatch(updateContact(update_contact));
// };

// //EDIT CONTACT DETAILS END

// // slide ops end


//   const [fetchData, setFetchdata] = useState()
 
  
//   const postApiFetch = () =>{
//     // console.log('postApiFetch');
//      axios.post("https://mtml-api.hestawork.com/api/user/filter-students").then((response) => {
//        console.log('response', response);
//        setFetchdata(response.data.data.docs)
//      }).catch((err) => {
//        console.log(err);
//      })
    
//     }

//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="App">
//         <nav className="navbar.text-dark fixed-top">
//       <div className="container">
//         <Link to="/" className="navbar-brand">
//          Student information
//         </Link>| <>  </>
//         <i class="fa fa-home"></i><>      </>
//         <i class="fa fa-angle-double-right" aria-hidden="true"></i>
//          <Link to="/contacts/add" className="btn btn-light">
//             Student Management
//           </Link>
//           <button onClick={postApiFetch}>Click to show Data</button>
//         </div>
//        </nav>
          
//           <div className="container">
//             <div className="py-3">
//               <Switch>
//                 <Route exact path="/" component={Contacts} />
//                 <Route exact path="/contacts/add" component={AddContact} />
//                 <Route
//                   exact
//                   path="/contacts/edit/:id"
//                   component={EditContact}
//                 />
//               </Switch>
//               {
//          fetchData && fetchData.map((allData) => (
//            <>
//            <tr>
//           <td>{allData._id}</td>
//          <td>{allData.first_name}</td>
//          <td>{allData.last_name}</td>
//          <td>{allData.student.class_name}</td>
//          <td>{allData.section}</td>
//          <td>{allData.email}</td>
//          <td>{allData.campus}</td>
//          <td className="actions">
       
//        <Link onClick={handlerClick}>
//        <i class="fa fa-edit"></i>
//       </Link>
//       <>
//       </>
//       <i class="fa fa-ban" aria-hidden="true"></i>
//        <span
//          className="fa fa-trash-o"
//          onClick={() => dispatch(deleteContact(id))}
//        >
//        </span>
//         </td>
//          </tr>
//           {/* {isOpen && <EditContact/> } */}
//     {/* Side pannel  */}

//         <Drawer
//         width={500}
//         onClose={closeDrawer}
//         visible={visible}
//         bodyStyle={{paddingBottom:80}}
//         footer={
//             <div style={{textAlign:"right"}}>
//                 <Button onClick={closeDrawer} style={{marginBottom:8}}>
//                  Cancel
//                 </Button>
//                 <Button onClick={closeDrawer} type="primary">
//                  Submit
//                 </Button>
//             </div>
//         }
//         >
//        {
//                 visible&& (
//                   <div className="card border-0 shadow">
//                   <div className="card-header">EDIT STUDENT</div>
//                   <div className="card-body">
//                     <form onSubmit={(e) => onUpdateContact(e)}>
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Student ID"
//                           value={student_id}
//                           onChange={(e) => setStudent_id(e.target.value)}
//                           readOnly={true}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Your First Name"
//                           value={first_name}
//                           onChange={(e) => setFirst_name(e.target.value)}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Your Last Name"
//                           value={last_name}
//                           onChange={(e) => setLastName(e.target.value)}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Your Class"
//                           value={class_name}
//                           onChange={(e) => setClass_name(e.target.value)}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Your Section"
//                           value={section}
//                           onChange={(e) => setSection(e.target.value)}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Your Email Address"
//                           value={email_address}
//                           onChange={(e) => setEmail(e.target.value)}
//                           readOnly={true}
//                         />
//                       </div>
            
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Enter Your Campus"
//                           value={campus}
//                           onChange={(e) => setCampus(e.target.value)}
//                         />
//                       </div>
            
//                       <button className="btn btn-warning" type="submit" onClick={notify}>
//                         Update Contact
//                       </button>
//                     </form>
//                   </div>
//                 </div>

//                 )
//             }

//         </Drawer>
    
//     {/* Side pannel End  */}

//          </>

//         ))
//        }
//             </div>
//           </div>

//         </div>
//       </Router>
//     </Provider>
//   );
// }

// export default Appz




import React from "react";
import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from "./components/contacts/Contacts";
import {  Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContact  from "./components/contacts/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <nav className="navbar.text-dark fixed-top">
      <div className="container">
        {/* <Link to="/" className="navbar-brand">
         Student information
        </Link>| <>  </>
        <i class="fa fa-home"></i><>   
           </>
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
         <Link to="/contacts/add" className="btn btn-light">
            Student Management
          </Link> */}
           <Link to="/contacts/add" className="student-management">
            Student Management
          </Link> 
          
        </div>
       </nav>
       <div className="stdent-manage">
           <Link to="/" className="navbar-brand">
         Student information
        </Link>| <>  </>
        <i class="fa fa-home"></i><>   
           </>
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
         <Link to="/contacts/add" className="btn btn-light">
            Student Management
          </Link>
         </div>
       <form id="search-form">
      <div class="search">
        
    {/* <span class="glyphicon glyphicon-search"></span> */}
      <input type="text" name="search" class="round" placeholder="Search"/>

      {/* <span class="glyphicon glyphicon-search"></span>
      <input type="text" name="search" class="round" placeholder="Search"/> */}
      <div className="page"> 
      <select id="cars" name="cars">
       <option value="">1-2 of 2</option>
       </select>
       </div>
       </div>
       </form>   

          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
              </Switch>
              <nav className="d-flex">
             <ul className="pagination">
             <li className="page-link">prev</li>
             <li className="page-lin">1</li>
             <li className="page-link">Next</li>
            </ul>
            </nav>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App