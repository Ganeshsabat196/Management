import React, { useState, useContext } from "react";

// components
import PageHeader from "../components/PageHeader";

// api
import { getFilteredStudent } from "../../Api/Students";

// context hook
import { TestContext } from "../../context/TestProvider";

const TestDetails = (props) => {
  const { settestData } = useContext(TestContext);

  const [TestDetails, setTestDetails] = useState({
    subject: "",
    chapter: "",
    date: "",
    standard: "",
    section: "",
    marks: "",
  });

  // updating the testDetails form data on changing the values
  const insertFields = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTestDetails((preVal) => {
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
      subject: TestDetails.subject,
      chapter: TestDetails.chapter,
      date: TestDetails.date,
      standard: TestDetails.standard,
      section: TestDetails.section,
      marks: TestDetails.marks,
    };
    console.log("TestDetails Data", data);
    settestData(data); // storing the details of test in context hook
    props.setdisplay(!props.display); // toggling between the pages

    const filterdStudents = await getFilteredStudent(data); // fetching the students based on their standard and section
    console.log("filterd students", filterdStudents);
    props.setstudents(filterdStudents);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="New Test" />

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <h5 className="form-title">
                          <span>New Test Details</span>
                        </h5>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Test Subject
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject Name"
                            value={TestDetails.subject}
                            onChange={insertFields}
                            name="subject"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Test Chapter
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="chapter Name"
                            value={TestDetails.chapter}
                            onChange={insertFields}
                            name="chapter"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms calendar-icon">
                          <label>
                            Test Date
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
                            placeholder="DD-MM-YYYY"
                            value={TestDetails.date}
                            onChange={insertFields}
                            name="date"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Test Standard
                            <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            value={TestDetails.standard}
                            onChange={insertFields}
                            name="standard"
                          >
                            <option value="">Select Section</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Test Section
                            <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            value={TestDetails.section}
                            onChange={insertFields}
                            name="section"
                          >
                            <option value="">Select Section</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Test Marks
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            type="Number"
                            className="form-control"
                            placeholder="Subject Marks"
                            value={TestDetails.marks}
                            onChange={insertFields}
                            name="marks"
                          />
                        </div>
                      </div>

                      <div className="col-lg-2">
                        <div className="search-student-btn">
                          <button
                            type="btn"
                            className="btn btn-primary"
                            onClick={submitForm}
                          >
                            Add Test
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestDetails;
