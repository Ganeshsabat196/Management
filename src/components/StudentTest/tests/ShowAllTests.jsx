import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// components
import PageHeader from "../components/PageHeader";
import ShowTestFilter from "../filter/ShowTestFilter";
import Tests from "./Tests";

// api
import { getStudenttest } from "../../Api/StudentsTest";

const ShowAllTests = () => {
  // ---------------------------getting data ffrom another page-------------------------
  let location = useLocation();
  console.log(
    location.state._id, // id of student fees document
    location.state.student_id,
    location.state.student_name
  );

  const _id = location.state._id;
  const student_id = location.state.student_id;
  const student_name = location.state.student_name;
  // -----------------------------------------------------------------------------------

  // ------------------------getting a single student fees data ----------------------------

  const [studentAllTests, setstudentAllTests] = useState([]);

  const StudentTest = async () => {
    const data = {
      _id: _id,
      student_id: student_id,
    };

    const response = await getStudenttest(data);
    console.log("single student tests data", response);
    setstudentAllTests(response);
  };

  useEffect(() => {
    StudentTest();
  }, []);
  // -----------------------------------------------------------------------------------

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="Show Installments" />

          {/* <ShowTestFilter /> */}

          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table comman-shadow">
                <div className="card-body">
                  <div className="page-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h3 className="page-title">{student_name}</h3>
                      </div>
                      <div className="col-auto text-end float-end ms-auto download-grp">
                        <a href="#" className="btn btn-outline-primary me-2">
                          <i className="fas fa-download" /> Download
                        </a>

                        {/* ---------------------------- add new installment by clicking here--------------------------------------- */}
                        <NavLink
                          className="btn btn-primary"
                          to="/studentfees/addinstallment"
                          state={{
                            student_id: student_id,
                            student_name: student_name,
                          }}
                        >
                          <i className="feather-plus" />
                        </NavLink>
                        {/* ----------------------------------------------------------------------------------------------------------- */}
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                      <thead className="student-thread">
                        <tr>
                          <th>Test Id</th>
                          <th>Test Date</th>
                          <th>Test Subject</th>
                          <th>Test Chapter</th>
                          <th>Test Marks Obtained</th>
                          <th>Test Marks</th>
                          <th className="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* -------------------displaying all the installments one by one here ----------------------------- */}
                        {studentAllTests.map((item, i, arr) => {
                          console.log("Test data is", item);
                          return (
                            <Tests key={i} id={i + 1} item={item} />
                          );
                        })}
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

export default ShowAllTests;
