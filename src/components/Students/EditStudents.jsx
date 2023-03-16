import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// api
import { getStudent, editStudent } from "../Api/Students";
import { getSections } from "../Api/More";

// components
import PageHeader from "./components/PageHeader";

const EditStudents = () => {
  let location = useLocation();
  const navigate = useNavigate();

  console.log(
    "getting data for editing",
    location.state._id,
    location.state.student_name
  );

  // -------------getting data of a single student and all the sections as the page get load----------------------
  const [student, setstudent] = useState({});
  const [profile, setprofile] = useState();
  const [sections, setsections] = useState([]); // storing all the sections value as the page loads
  const [varsections, setvarsections] = useState([]); // store the sections value as the standard changes

  const singlestudent = async () => {
    const data = {
      _id: location.state._id,
    };
    const response = await getStudent(data);
    console.log("single student data", response[0]);
    setstudent(response[0]);
    setprofile(response[0].profile);
  };

  const allsections = async () => {
    const response = await getSections();
    console.log("getting data of all the sections", response);
    setsections(response);
  };

  useEffect(() => {
    singlestudent();
    allsections(); // getting all the section for dynamic dependent select box
  }, []);
  // --------------------------------------------------------------------------------------------

  // updating the Edit Students form data on changing the values
  const insertFields = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setstudent((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });

    if (name === "standard") {
      const itemVal = JSON.parse(value);
      console.log(JSON.parse(value));

      setstudent((preVal) => {
        return {
          ...preVal,
          standard: itemVal.standard,
          startyear: itemVal.startyear,
          endyear: itemVal.endyear,
        };
      });

      setvarsections(itemVal.batches);
    }
  };

  // on submitting the form sending the data to database using axios api
  const submitForm = async (e) => {
    e.preventDefault();

    var formdata = new FormData();
    formdata.append("_id", location.state._id);
    formdata.append("profile", profile);
    formdata.append("firstname", student.firstname);
    formdata.append("lastname", student.lastname);
    formdata.append("gender", student.gender);
    formdata.append("dateofbirth", student.dateofbirth);
    formdata.append("email", student.email);
    formdata.append("standard", student.standard);
    formdata.append("section", student.section);
    formdata.append("phone", student.phone);
    formdata.append("startyear", student.startyear);
    formdata.append("endyear", student.endyear);

    const response = await editStudent(formdata, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    console.log("getting edited data as response", response);

    if (response.status === 200) {
      alert("Student editted successfully");
      navigate("/students/showstudents");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="Edit Student" />

          <div className="row">
            <div className="col-sm-12">
              <div className="card comman-shadow">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            First Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter First Name"
                            value={student.firstname}
                            onChange={insertFields}
                            name="firstname"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Last Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Last Name"
                            value={student.lastname}
                            onChange={insertFields}
                            name="lastname"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Gender <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            value={student.gender}
                            onChange={insertFields}
                            name="gender"
                          >
                            <option value="">Select Gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Others</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms calendar-icon">
                          <label>
                            Date Of Birth{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
                            placeholder="DD-MM-YYYY"
                            value={student.dateofbirth}
                            onChange={insertFields}
                            name="dateofbirth"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            E-Mail <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Email Address"
                            value={student.email}
                            onChange={insertFields}
                            name="email"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            standard <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            value={student.standard}
                            onChange={insertFields}
                            name="standard"
                          >
                            <option value="">Please Select standard </option>

                            {sections.map((item, i) => {
                              var valueItem = {
                                standard: item.standard,
                                startyear: item.startyear,
                                endyear: item.endyear,
                                batches: item.batches,
                              };
                              return (
                                <option
                                  key={i}
                                  value={JSON.stringify(valueItem)}
                                >
                                  {item.standard}--{item.startyear}-
                                  {item.endyear}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Section <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            value={student.section}
                            onChange={insertFields}
                            name="section"
                          >
                            <option value="">Please Select Section </option>
                            {varsections.map((item, i) => {
                              return (
                                <option key={i} value={item.section}>
                                  {item.section}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>Phone </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Phone Number"
                            value={student.phone}
                            onChange={insertFields}
                            name="phone"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group students-up-files">
                          {/* <label>Upload Student Photo (150px X 150px)</label> */}
                          <div className="uplod">
                            <input
                              className="form-control"
                              type="file"
                              name="profile"
                              // value={student.profile}
                              onChange={(e) => {
                                setprofile(e.target.files[0]);
                              }}
                              placeholder="Choose File"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="student-submit">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={submitForm}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditStudents;
