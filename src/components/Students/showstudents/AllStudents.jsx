import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// api
import { deleteStudent } from "../../Api/Students";

// private
import { backendURL } from "../../private/private";

const AllStudents = (props) => {
  const navigate = useNavigate();
  const deletestudent = async (e) => {
    e.preventDefault();
    const data = {
      _id: props.item._id,
    };
    const response = await deleteStudent(data);
    console.log("delete student data", response);
    if (response.status === 200) {
      alert("Student deleted successfully");
      navigate("/students/showstudents");
    } else {
      alert("invalid credentials");
    }
  };
  const student_name = props.item.firstname + " " + props.item.lastname;
  return (
    <>
      <tr>
        {/* <td>{props.item._id}</td> */}
        <td>{props.id}</td>
        <td>
          <h2 className="table-avatar">
            <img
              // className="avatar-img rounded-circle"
              // src={`${"http://localhost:5000/public/images/"}${
              //   props.item.profile
              // }`}
              // src={`${"https://classmanager.onrender.com/public/images/"}${props.item.profile}`}
              src={backendURL + "/public/images/" + props.item.profile}
              alt=""
              style={{
                verticalAlign: "middle",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />

            {/* -------------------Edit Student by clicking here---------------------------------------------- */}
            <NavLink
              className="nav-link bg-success-light me-2"
              to="/students/editstudents"
              state={{ _id: props.item._id }}
            >
              {student_name}
            </NavLink>
            {/* ---------------------------------------------------------------------------------------------- */}
          </h2>
        </td>
        <td>{props.item.standard}</td>
        <td>{props.item.section}</td>
        <td>{props.item.dateofbirth}</td>
        <td>{props.item.email}</td>
        <td>{props.item.phone}</td>
        <td className="text-end">
          <div className="actions ">
            {/* -------------------delete Student by clicking here---------------------------------------------- */}
            <a
              href=""
              className="nav-link btn btn-sm bg-success-light me-2"
              onClick={deletestudent}
            >
              <i className="feather-delete" />
            </a>
            {/* ---------------------------------------------------------------------------------------------- */}

            {/* -------------------Edit Student by clicking here---------------------------------------------- */}
            <NavLink
              className="nav-link btn btn-sm bg-success-light me-2"
              to="/students/editstudents"
              state={{ _id: props.item._id, student_name: student_name }}
            >
              <i className="feather-edit" />
            </NavLink>
            {/* ---------------------------------------------------------------------------------------------- */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default AllStudents;
