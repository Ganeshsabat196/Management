// All axios api here of students
import axios from "axios";

//backend's url
const url = "http://localhost:5000";

// getting all the entered students data at one
const getStudents = async () => {
  try {
    const response = await axios.get(`${url}/student/getstudents`);
    console.log("getstudents", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while getStudentes API", error.message);
  }
};

// get a single student data at once
const getStudent = async (data) => {
  try {
    console.log("getstudent data sending", data);
    const response = await axios.post(`${url}/student/getstudent`, data);
    console.log("getstudent data receiving", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while getStudentes API", error.message);
  }
};

// get a multiple students data on basis of standard and section at once
const getFilteredStudent = async (data) => {
  try {
    console.log("getstudent filtered data sending", data);
    const response = await axios.post(`${url}/student/getfilteredstudent`, data);
    console.log("getstudent filtered data receiving", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while getStudentes filtered API", error.message);
  }
};

// adding a new student in our database
const addStudents = async (data) => {
  try {
    console.log("add new student data", data);
    const response = await axios.post(`${url}/student/addstudent`, data);
    console.log("add new student response", response);
    return response;
  } catch (error) {
    console.log("Error while addstudent API", error.message);
  }
};

// editing the added student data
const editStudent = async (data) => {
  try {
    console.log("edit student data sending", data);
    const response = await axios.post(`${url}/student/editstudent`, data);
    console.log("edit student response receiving", response);
    return response;
  } catch (error) {
    console.log("Error while editstudent API", error.message);
  }
};

// deleting the added student
const deleteStudent = async (data) => {
  try {
    console.log("delete student data sending", data);
    const response = await axios.post(`${url}/student/deletestudent`, data);
    console.log("delete student response receiving", response);
    return response;
  } catch (error) {
    console.log("Error while deletestudent API", error.message);
  }
};

export { getStudents, getStudent, getFilteredStudent, addStudents, editStudent, deleteStudent };
