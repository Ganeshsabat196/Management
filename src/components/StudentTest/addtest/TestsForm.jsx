import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

// context hook
import { TestContext } from "../../context/TestProvider";

// private
import { backendURL } from "../../private/private";

const TestsForm = (props) => {
  const student_name = props.item.firstname + " " + props.item.lastname;
  const student_id = props.item._id;

  const { testData } = useContext(TestContext);

  const [singleMarks, setsingleMarks] = useState({
    student_name: student_name,
    student_id: student_id,
    student_standard: props.item.standard,
    student_section: props.item.section,
    
    test_subject: testData.subject,
    test_chapter: testData.chapter,
    test_date: testData.date,    
    marks: testData.marks,
    
    marks_obtained: ""
  });

  // updating the test form data on changing the values
  const insertFields = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setsingleMarks((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  
  const appendTest = async () => {
    await props.setAddTestDetails((preVal) => {
      return [...preVal, singleMarks];
    });
    console.log("data appended");
  };

  useEffect(() => {
    // updating key name of object singleMarks

    appendTest();
  }, [props.submitTest]);

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
                src={backendURL + "/public/images/" + props.item.profile}
                alt="User Image"
              />
            </a>

            {/* -------------------View Student by clicking here---------------------------------------------- */}
            <NavLink
              className="nav-link bg-success-light me-2"
              to="/studenttest/showalltests"
              state={{
                student_id: student_id,
                student_name: student_name,
              }}
            >
              {student_name}
            </NavLink>
            {/* ---------------------------------------------------------------------------------------------- */}
          </h2>
        </td>

        <td>
          <form>
            <div className="row mt-4">
              <div className="col-6 col-sm-4">
                <div className="form-group local-forms">
                  <input
                    type="Number"
                    className="form-control"
                    // value={singleMarks.marks_obtained}
                    onChange={insertFields}
                    // name={props.item._id}
                    name="marks_obtained"
                  />
                </div>
              </div>
            </div>
          </form>
        </td>

      </tr>
    </>
  );
};

export default TestsForm;
