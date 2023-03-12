import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// components
import PageHeader from "../components/PageHeader";

// api
import { editstudentstest } from "../../Api/StudentsTest";

const EditTest = () => {
  let location = useLocation();
  const navigate = useNavigate();
  console.log(
    location.state.test,
    location.state.student_id,
    location.state.student_name,
    location.state.test_id
  );

  const [TestDetails, setTestDetails] = useState({
    subject: location.state.test.test_subject,
    chapter: location.state.test.test_chapter,
    date: location.state.test.test_date,
    marks: location.state.test.test_marks,
    _id: location.state.test_id,
    marks_obtained: location.state.test.test_marks_obtained,
  });

  // updating the test form data on changing the values
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
      student_id: location.state.student_id,
      student_name: location.state.student_name,
      subject: TestDetails.subject,
      chapter: TestDetails.chapter,
      date: TestDetails.date,
      marks: TestDetails.marks,
      _id: TestDetails._id,
      marks_obtained: TestDetails.marks_obtained,
    };

    console.log("this data is going for editing", data);

    const response = await editstudentstest(data);
    console.log("edited student test", response);
    console.log(response.status);

    if (response.status === 200) {
      alert("Student test editted successfully");
      navigate("/studenttest/showtest");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="Edit Test" />

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
                          />
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
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Test Marks Obtained
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            type="Number"
                            className="form-control"
                            placeholder="Subject Marks"
                            value={TestDetails.marks_obtained}
                            onChange={insertFields}
                            name="marks_obtained"
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

export default EditTest;
