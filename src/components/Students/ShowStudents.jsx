import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// api
import { getStudents } from "../Api/Students";

// components
import AllStudents from "./showstudents/AllStudents";
import ShowStudentsFilter from "./filter/ShowStudentsFilter";
import PageHeader from "./components/PageHeader";

const ShowStudents = () => {
  // -------------getting data of all the students as the page get load----------------------
  const [students, setstudents] = useState([]);
  
  const allstudents = async () => {
    const response = await getStudents();
    console.log("getting data of all the students", response);
    setstudents(response);
  };
  
  useEffect(() => {
    allstudents();
  }, []);  
  // ----------------------------------------------------------------------------------------

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">

          <PageHeader pageTitle="Show Student" />
          
          <ShowStudentsFilter setstudents={setstudents} />

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
                          to="/students/addstudents"
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
                          <th>Standard</th>
                          <th>Section</th>
                          <th>DOB</th>
                          <th>Email</th>
                          <th>Mobile Number</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* -----------------------Looping all the students which are stored in students usestate--------------------------- */}
                        {students.map((item, i, arr) => {
                          return <AllStudents key={i} id={i+1} item={item} />;
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

export default ShowStudents;
