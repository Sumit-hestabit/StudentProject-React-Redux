import axios from 'axios';

const STUDENT_API_BASE_URL = "https://mtml-api.hestawork.com/api/"

class StudentDetails {

    getStudentList(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    createStudentList(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getStudentId(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.put(STUDENT_API_BASE_URL + '/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(STUDENT_API_BASE_URL + '/' + studentId);
    }
}
