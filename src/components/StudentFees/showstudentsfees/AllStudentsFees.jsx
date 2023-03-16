import React from "react";
import { NavLink } from "react-router-dom";

// private
import { backendURL } from "../../private/private";

const AllStudentsFees = (props) => {
  const student_name = props.item.firstname + " " + props.item.lastname;

  return (
    <>
      <tr>
        <td>{props.id}</td>

        <td>
          <h2 className="table-avatar">
            <a href="student-details.html" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={backendURL + "/public/images/" + props.item.profile}
                alt="User Image"
              />
            </a>

            {/* -------------------- see all the installment of this students by clicking here ---------------------------------------------------- */}
            <NavLink
              className="nav-link btn btn-sm bg-success-light me-2"
              to="/studentfees/showinstallment"
              state={{
                student_id: props.item._id,
                student_name: student_name,
              }}
            >
              {student_name}
            </NavLink>
            {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
          </h2>
        </td>

        <td className="text-end">
          <div className="actions ">
            {/* -------------------- add an new installment of this students by clicking here ---------------------------------------------------- */}
            <NavLink
              className="nav-link btn btn-sm bg-success-light me-2"
              to="/studentfees/addinstallment"
              state={{ student_id: props.item._id, student_name: student_name }}
            >
              <i className="feather-plus" />
            </NavLink>
            {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default AllStudentsFees;
