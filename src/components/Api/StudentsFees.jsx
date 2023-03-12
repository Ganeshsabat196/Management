// All axios api here of students fees
import axios from "axios";

// backend's url
const url = "http://localhost:5000";

// getting all the data from students fees document
const getStudentsfees = async () => {
  try {
    const response = await axios.get(`${url}/studentsfees/getstudentsfees`);
    console.log("getstudents", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while getStudentes API", error.message);
  }
};

// getting a single student data fees document
const getStudentfees = async (data) => {
  try {
    console.log("get student fees data sending", data);
    const response = await axios.post(
      `${url}/studentsfees/getstudentfees`,
      data
    );
    console.log("get student fees response receiving", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while getStudente API", error.message);
  }
};

// installment

// adding a new installment
const addStudentsFees = async (data) => {
  try {
    console.log("add student fees data sending", data);
    const response = await axios.post(
      `${url}/studentsfees/addstudentsfees`,
      data
    );
    console.log("add student fees response receiving", response);
    return response;
  } catch (error) {
    console.log("Error while addstudent API", error.message);
  }
};

// editing the existing installment
const editinstallment = async (data) => {
  try {
    console.log("edit student Installment data sending", data);
    const response = await axios.post(
      `${url}/studentsfees/editinstallment`,
      data
    );
    console.log("edit student installment response receiving", response);
    return response;
  } catch (error) {
    console.log("Error while editstudent API", error.message);
  }
};

// deleting the existing installment
const deleteInstallment = async (data) => {
  try {
    console.log("delete student installment data sending", data);
    const response = await axios.post(
      `${url}/studentsfees/deletestudentsinstallment`,
      data
    );
    console.log("delete student installment response receiving", response);
    return response;
  } catch (error) {
    console.log("Error while deletestudent installment API", error.message);
  }
};

export {
  getStudentsfees,
  getStudentfees,
  addStudentsFees,
  editinstallment,
  deleteInstallment,
};
