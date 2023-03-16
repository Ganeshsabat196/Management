import React, {useState} from "react";

// api
import { getFilteredStudent } from "../../Api/Students";

const ShowStudentsFilter = (props) => {

  const [filter, setfilter] = useState({
    standard: "",
    section: ""
  });

  // updating the admission form data on changing the values
  const insertFields = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setfilter((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // on submitting the form sending the data to database using fetch api
  const submitForm = async (e) => {
    e.preventDefault();
    
    const data = {
      standard: filter.standard,
      section: filter.section
    };

    const filterdStudents = await getFilteredStudent(data);
    console.log("filterd students", filterdStudents);
    props.setstudents(filterdStudents);
  };

  return (
    <>
      <div className="student-group-form">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="form-group local-forms">
              <label>
                Select Standard <span className="login-danger">*</span>
              </label>
              <select
                className="form-control select"
                value={filter.standard}
                onChange={insertFields}
                name="standard"
              >
                <option value="">Select Standard</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="form-group local-forms">
              <label>
                Select Section <span className="login-danger">*</span>
              </label>
              <select
                className="form-control select"
                value={filter.section}
                onChange={insertFields}
                name="section"
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="form-group local-forms">
              <label>
                Select Year <span className="login-danger">*</span>
              </label>
              <select
                className="form-control select"
                // value={filter.section}
                // onChange={insertFields}
                name="year"
              >
                <option value="">Select Year</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="search-student-btn">
              <button type="btn" className="btn btn-primary" onClick={submitForm}>
                Search
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ShowStudentsFilter;
