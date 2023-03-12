import React, { useEffect, useState } from "react";

//api
import { getStudents } from "../Api/Students";

// components
import AllStudentsFees from "./showstudentsfees/AllStudentsFees";
import PageHeader from "./components/PageHeader";
import ShowStudentsFeesFilter from "./filter/ShowStudentsFeesFilter";

const ShowFees = () => {
  // ---------------------getting the data of all the students as the page loads------------------------------------
  const [students, setstudents] = useState([]);

  const allstudents = async () => {
    const response = await getStudents();
    console.log(response);
    setstudents(response);
  };

  useEffect(() => {
    allstudents();
  }, []);
  // ------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="Student Fees" />

          <ShowStudentsFeesFilter />

          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table comman-shadow">
                <div className="card-body">
                  <div className="page-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h3 className="page-title">Fees collection</h3>
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
                          {/* <th>Paid Amount</th> */}
                          <th className="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((item, i, arr) => {
                          return <AllStudentsFees key={i} id={i+1} item={item} />;
                        })}
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

export default ShowFees;
