import React, { useState } from "react";

// api
import { addSection } from "../Api/More";

const AddSection = (props) => {
  const [section, setsection] = useState({
    standard: "",
    startyear: "",
    endyear: "",
    section: "",
    description: "",
  });

  // updating the standard form data on changing the values
  const insertFields = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setsection((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // on submitting the form sending the data to database using fetch api
  const submitForm = async (e) => {
    e.preventDefault();

    let splitItem = section.standard;
    const myArray = splitItem.split("-");

    console.log("myArray", myArray);

    const data = {
      section: section.section,
      description: section.description,

      standard: parseInt(myArray[0]),
      startyear: parseInt(myArray[1]),
      endyear: parseInt(myArray[2]),
    };
    const response = await addSection(data); // adding a new section in database
    console.log(response.status);

    if (response.status === 200) {
      alert("New section added successfully");
      props.setsubmitForm(!submitForm);
      // navigate('/students/showstudents');
    } else {
      alert("invalid credentials");
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card comman-shadow">
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-12">
                    <h5 className="form-title student-info">
                      Add Section{" "}
                    </h5>
                  </div>

                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>
                        Select Standard <span className="login-danger">*</span>
                      </label>
                      <select
                        className="form-control select"
                        value={section.standard}
                        onChange={insertFields}
                        name="standard"
                      >
                        <option value="">Select Standard</option>

                        {props.allStandards.map((item, i) => {
                          var valueItem =
                            item.standard +
                            "-" +
                            item.startyear +
                            "-" +
                            item.endyear;
                          return (
                            <option key={i} value={valueItem}>
                              {item.standard}--{item.startyear}-{item.endyear}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>
                        section<span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Section Name"
                        value={section.section}
                        onChange={insertFields}
                        name="section"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>
                        Description<span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="textbox"
                        placeholder="Enter Standard description"
                        value={section.description}
                        onChange={insertFields}
                        name="description"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="student-submit">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={submitForm}
                      >
                        Add Section
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSection;
