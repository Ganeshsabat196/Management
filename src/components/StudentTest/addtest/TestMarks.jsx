import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components
import PageHeader from "../components/PageHeader";
import TestsForm from "./TestsForm";

// api
import { addstudentstest } from "../../Api/StudentsTest";

const TestMarks = (props) => {
  const navigate = useNavigate();
  const [submitTest, setsubmitTest] = useState(false);
  const [AddTestDetails, setAddTestDetails] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();
    setsubmitTest(true);
  };

  useEffect(() => {
    if (
      2 * props.students.length === AddTestDetails.length &&
      AddTestDetails.length !== 0
    ) {
      const AddMarksData = async (temp) => {
        console.log("sending this data to axios", temp);
        const response = await addstudentstest(temp);
        console.log("receiving this data to axios", response);
        console.log(response.status);

        if (response.status === 200) {
          alert("New Student test added successfully");
          navigate("/studenttest/showtest");
        } else {
          alert("invalid credentials");
        }
      };

      const temp = [...AddTestDetails];
      temp.splice(0, props.students.length);
      console.log(temp);
      AddMarksData(temp);
    }
    console.log(2 * props.students.length);
    console.log(AddTestDetails.length);
  }, [AddTestDetails]);

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="Add Marks" />

          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table comman-shadow">
                <div className="card-body">
                  <div className="page-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h3 className="page-title">Students</h3>
                      </div>
                      <div className="col-auto text-end float-end ms-auto download-grp">
                        <a href="#" className="btn btn-outline-primary me-2">
                          <i className="fas fa-download" /> Download
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                      <thead className="student-thread">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Marks Obtained</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* -----------------------Looping all the students which are stored in students usestate--------------------------- */}
                        {props.students.map((item, i, arr) => {
                          return (
                            <TestsForm
                              key={i}
                              id={i + 1}
                              item={item}
                              AddTestDetails={AddTestDetails}
                              setAddTestDetails={setAddTestDetails}
                              submitTest={submitTest}
                            />
                          );
                        })}

                        {submitTest ? (
                          ""
                        ) : (
                          <tr>
                            <td>
                              <div className="col-lg-2">
                                <div className="search-student-btn">
                                  <button
                                    type="btn"
                                    className="btn btn-primary"
                                    onClick={submitForm}
                                  >
                                    Add Marks
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                        {/* ------------------------------------------------------------------------------------------------- */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestMarks;
