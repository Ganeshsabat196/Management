import React from "react";
import { NavLink } from "react-router-dom";

const Tests = (props) => {
  const tests = props.item.tests; // storing all the fees of each student and rendering them one by one

  return (
    <>
      {tests.map((test, i, arr) => {
        return (
          <tr key={i}>
            {/* <td>Test - {i + 1}</td> */}
            <td>{test._id}</td>
            <td>{test.test_date}</td>
            <td>{test.test_subject}</td>
            <td>{test.test_chapter}</td>
            <td>{test.test_marks_obtained}</td>
            <td>{test.test_marks}</td>

            <td className="text-end">
              <div className="actions ">
                {/* ------------------Edit the test by clicking here--------------------------- */}
                <NavLink
                  className="nav-link btn btn-sm bg-success-light me-2"
                  to="/studenttest/edittest"
                  state={{
                    test: test,
                    student_name: props.item.student_name,
                    student_id: props.item.student_id,
                    test_id: test._id
                  }}
                >
                  <i className="feather-edit" />
                </NavLink>
                {/* ------------------------------------------------------------------------------------- */}
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Tests;
