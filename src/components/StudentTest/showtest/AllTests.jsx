import React from "react";
import { NavLink } from "react-router-dom";

const AllTests = (props) => {

  const student_name = props.item.firstname + " " + props.item.lastname;

  return (
    <>
      <tr>
        {/* <td>{props.item._id}</td> */}
        <td>{props.id}</td>
        <td>
          <h2 className="table-avatar">
            <a href="" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src="https://img.freepik.com/premium-vector/abstract-human-man-head-logo_23758-326.jpg"
                alt="User Image"
              />
            </a>

            {/* -------------------View Student by clicking here---------------------------------------------- */}
            <NavLink
              className="nav-link bg-success-light me-2"
              to="/studenttest/showalltests"
              state={{
                _id: props.item._id, // id of student fees document
                student_id: props.item.student_id,
                student_name: props.student_name,
              }}
            >
              {props.student_name}
            </NavLink>
            {/* ---------------------------------------------------------------------------------------------- */}
          </h2>
        </td>

        {props.item.tests.map((testMarks, i, arr) => {
          return <td key={i}>{testMarks.test_marks_obtained}</td>;
        })}

        {/* <td className="text-end">
          <div className="actions ">
            -------------------View Student by clicking here----------------------------------------------
            <NavLink
              className="nav-link bg-success-light me-2"
              to="/studenttest/showalltests"
              state={{
                _id: props.item._id,
                student_id: props.item.student_id,
                student_name: props.student_name,
              }}
            >
              <i className="feather-eye" />
            </NavLink>
            ----------------------------------------------------------------------------------------------
          </div>
        </td> */}
        
      </tr>
    </>
  );
};

export default AllTests;
