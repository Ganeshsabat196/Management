import React, { useState } from "react";

const AddAttendenceFilter = (props) => {
  const [filter, setFilter] = useState({
    standard: "",
    section: "",
    month: "",
    year: "",
    date: ""
  });

  const insertFields = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFilter((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // on submitting the form sending the data to database using fetch api
  const submitForm = async (e) => {
    e.preventDefault();

    // const filterdStudents = await getFilteredStudent(data);
    // console.log("filterd students", filterdStudents);
    // props.setstudents(filterdStudents);
    const arr = [filter.standard, filter.section, filter.month, filter.year, filter.date];
    props.setFilter(arr);
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
                onChange={insertFields}
                name="standard"
              >
                <option value="">Select Class</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="form-group local-forms">
              <label>
                Select Standard <span className="login-danger">*</span>
              </label>
              <select
                className="form-control select"
                onChange={insertFields}
                name="section"
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="form-group local-forms">
              <label>
                Select Standard <span className="login-danger">*</span>
              </label>
              <select
                className="form-control select"
                onChange={insertFields}
                name="month"
              >
                <option value="">Select Month</option>
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apr">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="form-group local-forms">
              <label>
                Select Standard <span className="login-danger">*</span>
              </label>
              <select
                className="form-control select"
                onChange={insertFields}
                name="year"
              >
                <option value="">Select Year</option>
                <option value="Y1617">2016-2017</option>
                <option value="Y1718">2017-2018</option>
                <option value="2018-2019">2018-2019</option>
                <option value="2020-2021">2020-2021</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="form-group local-forms">
              <label>
                Select Date <span className="login-danger">*</span>
              </label>
              <select
                className="form-control select"
                onChange={insertFields}
                name="date"
              >
                <option value="">Select Date</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
              </select>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="search-student-btn">
              <button
                type="btn"
                className="btn btn-primary"
                onClick={submitForm}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAttendenceFilter;
