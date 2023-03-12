import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// components
import PageHeader from "./components/PageHeader";
import ShowTestFilter from "./filter/ShowTestFilter";
import AllTests from "./showtest/AllTests";

// api
import { deleteTest, getStudentstest } from "../Api/StudentsTest";
import { getFilteredStudent } from "../Api/Students";
const ShowTest = () => {
  // -------------getting data of all the students test as the page get load----------------------
  const [Tests, setTests] = useState([]);
  const [dates, setdates] = useState([]);

  const alltests = async () => {
    const response = await getStudentstest();
    console.log("getting data of all the students tests", response);
    setTests(response);
    setdates(response[0].tests);
  };

  useEffect(() => {
    // alltests();
  }, []);
  // ----------------------------------------------------------------------------------------

  // -------------------------deleting function to delete the entire test data-----------------
  const deleteAllMarks = async (test_date) => {
    console.log(test_date);
    const data = {
      test_date: test_date,
    };
    const response = await deleteTest(data);
    console.log("delete data of all the students tests", response);
  };
  // ----------------------------------------------------------------------------------------

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="Show Student" />
          <ShowTestFilter setTests={setTests} setdates={setdates} />

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
                        {/* ------------------------you can add new student by clicking here------------------------------*/}
                        <NavLink
                          className="btn btn-primary"
                          to="/studenttest/addtest"
                        >
                          <i className="fas fa-plus" />
                        </NavLink>
                        {/* ----------------------------------------------------------------------------------------------*/}
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                      <thead className="student-thread">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>

                          {/* --------------------displaying all the test dates------------------------------------------------------- */}
                          {dates.map((item, i, arr) => {
                            return (
                              <>
                                <th key={i}>
                                  {/* -------------------delete entire test data by clicking here---------------------------------------------- */}
                                  {item.test_date}
                                  <a
                                    href=""
                                    className="bg-success-light mx-2"
                                    style={{ textDecoration: "none" }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      deleteAllMarks(item.test_date);
                                    }}
                                  >
                                    <i className="feather-delete" />
                                  </a>
                                  {/* ---------------------------------------------------------------------------------------------- */}
                                </th>
                              </>
                            );
                          })}
                          {/* -------------------------------------------------------------------------------------------------------- */}
                        </tr>
                      </thead>
                      <tbody>
                        {/* -----------------------Looping all the students which are stored in students usestate--------------------------- */}
                        {Tests.map((item, i, arr) => {
                          return (
                            <AllTests
                              key={i}
                              id={i + 1}
                              item={item}
                              student_name={item.student_name}
                              student_id={item.student_id}
                            />
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

export default ShowTest;
