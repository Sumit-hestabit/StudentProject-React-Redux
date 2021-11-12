import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";
import {getContact,updateContact} from "../../actions/contactAction";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Card,Button,Form,Input, Drawer} from "antd";
import { Link } from 'react-router-dom';

const Contact = ({ contact, selectAll }) => {

  const dispatch = useDispatch();

  const { id,email,action} = contact;

  const [isOpen,setIsOpen] = useState(false);
  
  const handlerClick = () => {
    console.log("hello")
    setVisible(true);
  }

  //Toasting Configuration

  toast.configure()

  // slide ops

  const [visible,setVisible] = useState();

  const showDrawer = (type) => {
    setVisible(true);
    toast.success('Sucessfully Updated !');

};

const closeDrawer = () =>{
    setVisible(false);
    toast.warn('Sucessfully Cancel !');
}

const showEditDrawer = () => {
    setVisible(true);
}
const formitemLayout = {
    labelCol:{
        xs:{
            span:24,
        },
        sm:{
            span:8,
        },
    },
    wrapperCol:{
        xs:{
            span:24,
        },
        sm:{
            span:16,
        },
    },
};

//EDIT CONTACT DETAILS

  const [student_id, setStudent_id] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLastName] = useState("");
  const [class_name, setClass_name] = useState("");
  const [section, setSection] = useState("");
  const [email_address, setEmail] = useState("");
  const [campus, setCampus] = useState("");
  const [mobile_number,setMobile] = useState("");
  const [dob,setDob] = useState("");


  // 


  useEffect(() => {
    if (contact != null) {
      setStudent_id(contact.student_id);
      setFirst_name(contact.first_name);
      setLastName(contact.last_name);
      setClass_name(contact.class_name);
      setSection(contact.section);
      setEmail(contact.email);
      setCampus(contact.campus); 
      setMobile(contact.mobile_number) ;
      setDob(contact.dob);
      
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      student_id:student_id,
      first_name:first_name,
      last_name:last_name,
      class_name:class_name,
      section:section,
      email:email,
      campus:campus,
      mobile_number:mobile_number,
      dob:dob
    });

    dispatch(updateContact(update_contact));
  };

//EDIT CONTACT DETAILS END

  // slide ops end

  return (
    <>
    
    <tr className="selected">
      <td>
        <div className="custom-control custom-checkbox ">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>{student_id}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{class_name}</td>
      <td>{section}</td>
      <td>{email}</td>
      <td>{campus}</td>
      <td>{action}</td>
      <td className="actions">
       
        <Link onClick={handlerClick}>
        <i class="fa fa-edit"></i>
       </Link>
       <>
       </>
       <i class="fa fa-ban" aria-hidden="true"></i>
        <span
          className="fa fa-trash-o"
          onClick={() => dispatch(deleteContact(id))}
        >
        </span>
      </td>

    </tr>
    {/* {isOpen && <EditContact/> } */}
    {/* Side pannel  */}

        <Drawer
        width={500}
        onClose={closeDrawer}
        visible={visible}
        bodyStyle={{paddingBottom:80}}
        footer={
            <div style={{textAlign:"right"}}>
                <Button onClick={showDrawer} type="primary">
                 Save
                </Button>
                <Button onClick={closeDrawer} style={{marginBottom:8}}>
                 Cancel
                </Button>
                
            </div>
        }
        >
       {
        visible&& (
                  <div className="card border-0">
                  <div className="card-header">EDIT STUDENT</div>
                  <div className="card-body">
                    <form onSubmit={(e) => onUpdateContact(e)}>
                      <div className="form-group">
                        {/* <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Student ID"
                          value={student_id}
                          onChange={(e) => setStudent_id(e.target.value)}
                          readOnly={true}
                        /> */}
                      </div>
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your First Name"
                          value={first_name}
                          onChange={(e) => setFirst_name(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                      <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Last Name"
                          value={last_name}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                      <label>Class Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Class"
                          value={class_name}
                          onChange={(e) => setClass_name(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                      <label>Section</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Section"
                          value={section}
                          onChange={(e) => setSection(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                      <label>Email Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Email Address"
                          value={email_address}
                          onChange={(e) => setEmail(e.target.value)}
                          readOnly={true}
                        />
                      </div>
            
                      <div className="form-group">
                      <label>Campus</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Campus"
                          value={campus}
                          onChange={(e) => setCampus(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                      <label>Student Id</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Campus"
                          value={student_id}
                          onChange={(e) => setCampus(e.target.value)}
                          readOnly={true}
                        />
                      </div>

                      <div className="form-group">
                      <label>Date of Birth</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Campus"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                      <label>Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Campus"
                          value={mobile_number}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
            
                    </form>
                  </div>
                </div>

                )
            }
        

        </Drawer>
    
    {/* Side pannel End  */}
   
    </>
  );
};

export default Contact;
