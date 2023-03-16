// All axios api here of students test
import axios from "axios";

// private
import { backendURL } from "../private/private";

const url = backendURL;

// getting all the data from students test document
const getStudentstest = async () => {
  try {
    const response = await axios.get(`${url}/studentstest/getstudentstest`);
    console.log("getstudents", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while getStudentes API", error.message);
  }
};

// getting a single student data test document
const getStudenttest = async (data) => {
  try {
    console.log("get student test data sending", data);
    const response = await axios.post(
      `${url}/studentstest/getstudenttest`,
      data
    );
    console.log("get student test response receiving", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while getStudent test API", error.message);
  }
};

// adding a new test marks
const addstudentstest = async (data) => {
  try {
    console.log("add student test data sending", data);
    const response = await axios.post(
      `${url}/studentstest/addstudentstest`,
      data
    );
    console.log("add student test response receiving", response);
    return response;
  } catch (error) {
    console.log("Error while addstudent test API", error.message);
  }
};

// editing test marks
const editstudentstest = async (data) => {
  try {
    console.log("editing student test data sending", data);
    const response = await axios.post(
      `${url}/studentstest/editstudenttest`,
      data
    );
    console.log("editing student test response receiving", response);
    return response;
  } catch (error) {
    console.log("Error while editstudent test API", error.message);
  }
};

// deleting the test marks
const deleteTest = async (data) => {
  try {
    console.log("delete test data sending", data);
    const response = await axios.post(`${url}/studentstest/deletetest`, data);
    console.log("delete test response receiving", response);
    return response;
  } catch (error) {
    console.log("Error while deletestudent API", error.message);
  }
};

// get a multiple tests data on basis of standard and section at once
const getFilteredTests = async (data) => {
  try {
    console.log("getstudent filtered test data sending", data);
    const response = await axios.post(`${url}/studentstest/getfilteredtests`, data);
    console.log("getstudent filtered test data receiving", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while get filtered test API", error.message);
  }
};

export { getStudentstest, getStudenttest, addstudentstest, editstudentstest, deleteTest, getFilteredTests };
