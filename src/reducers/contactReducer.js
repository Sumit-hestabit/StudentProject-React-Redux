import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../constant/types";

const intialState = {
  contacts: [
    {
         "id":1,
        "first_name": "hampi",
        "last_name": "zampi",
        "campus": "Coppell",
        "user_id": "60b4e537d27e27001112a192",
        "student_id": "STID123",
        "dob": "01-01-2008",
        "gender": "MALE",
        "email": "student-beta1@getnada.com",
        "mobile_number": "12345678",
        "class_name": "VI",
        "section": "A"
    
    },
    {
      "id":2,
     "first_name": "sumit",
     "last_name": "desh",
     "campus": "inter",
     "user_id": "60b4e537d27e27001112a192",
     "student_id": "STID124",
     "dob": "01-01-2008",
     "gender": "MALE",
     "email": "student-beta1@getnada.com",
     "mobile_number": "12345678",
     "class_name": "VI",
     "section": "A"
 
 },
 {
  "id":3,
 "first_name": "Raju",
 "last_name": "kumar",
 "campus": "interiew",
 "user_id": "60b4e537d27e27001112a192",
 "student_id": "ST4ID123",
 "dob": "01-01-2008",
 "gender": "MALE",
 "email": "student-beta1@getnada.com",
 "mobile_number": "12345678",
 "class_name": "VI",
 "section": "A"

},
{
  "id":4,
 "first_name": "start",
 "last_name": "end",
 "campus": "view",
 "user_id": "60b4e537d27e27001112a192",
 "student_id": "STID123",
 "dob": "01-01-2008",
 "gender": "MALE",
 "email": "student-beta1@getnada.com",
 "mobile_number": "12345678",
 "class_name": "VI",
 "section": "A"

},
{
  "id":5,
 "first_name": "call",
 "last_name": "store",
 "campus": "interrr",
 "user_id": "60b4e537d27e27001112a192",
 "student_id": "STID1423",
 "dob": "01-01-2008",
 "gender": "MALE",
 "email": "student-beta1@getnada.com",
 "mobile_number": "12345678",
 "class_name": "VI",
 "section": "A"

},
{
  "id":6,
 "first_name": "dam",
 "last_name": "store",
 "campus": "kite",
 "user_id": "60b4e537d27e27001112a192",
 "student_id": "STID1263",
 "dob": "01-01-2008",
 "gender": "MALE",
 "email": "store-beta1@getnada.com",
 "mobile_number": "12345678",
 "class_name": "VI",
 "section": "A"

},
{
  "id":7,
 "first_name": "sam",
 "last_name": "store",
 "campus": "court",
 "user_id": "60b4e537d27e27001112a192",
 "student_id": "STID1293",
 "dob": "01-01-2008",
 "gender": "MALE",
 "email": "sam-beta1@getnada.com",
 "mobile_number": "12345678",
 "class_name": "VI",
 "section": "A"

},
{
  "id":8,
 "first_name": "shoru",
 "last_name": "store",
 "campus": "short",
 "user_id": "60b4e537d27e27001112a192",
 "student_id": "STID1273",
 "dob": "01-01-2008",
 "gender": "MALE",
 "email": "shore-beta1@getnada.com",
 "mobile_number": "12345678",
 "class_name": "VI",
 "section": "A"

},
    
  ],
  contact: null,
  selectedContacts: [],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };

    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    default:
      return state;
  }
};
