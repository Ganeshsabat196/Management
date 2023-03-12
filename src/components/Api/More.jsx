// All axios api here of students
import axios from "axios";

//backend's url
const url = "http://localhost:5000";

// getting all the entered standard at one
const getStandards = async () => {
  try {
    const response = await axios.get(`${url}/more/getstandards`);
    console.log("getstandards", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while getStandards API", error.message);
  }
};

// adding a new standard in our database
const addStandard = async (data) => {
  try {
    console.log("add new standard data", data);
    const response = await axios.post(`${url}/more/addstandard`, data);
    console.log("add new standard response", response);
    return response;
  } catch (error) {
    console.log("Error while addstandard API", error.message);
  }
};

// adding a new section in our database
const addSection = async (data) => {
  try {
    console.log("add new section data", data);
    const response = await axios.post(`${url}/more/addsection`, data);
    console.log("add new section response", response);
    return response;
  } catch (error) {
    console.log("Error while addsection API", error.message);
  }
};

// getting all the entered sections at one
const getSections = async () => {
  try {
    const response = await axios.get(`${url}/more/getsections`);
    console.log("getsections", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while getSections API", error.message);
  }
};

export { getStandards, addStandard, addSection, getSections };
