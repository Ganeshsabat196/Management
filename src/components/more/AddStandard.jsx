import React, { useState } from "react";

// api
import { addStandard } from "../Api/More";

const AddStandard = (props) => {
  const [standard, setstandard] = useState({
    standard: "",
    description: "",
    startyear: "",
    endyear: "",
  });

  // updating the standard form data on changing the values
  const insertFields = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setstandard((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // on submitting the form sending the data to database using fetch api
  const submitForm = async (e) => {
    e.preventDefault();

    console.log(standard.endyear, parseInt(standard.startyear) + 1);
    if (
      standard.startyear < standard.endyear &&
      parseInt(standard.endyear) === parseInt(standard.startyear) + 1
    ) {
      const data = {
        standard: standard.standard,
        description: standard.description,
        startyear: parseInt(standard.startyear),
        endyear: parseInt(standard.endyear),
      };

      const response = await addStandard(data); // adding a new standard in database
      console.log(response.status);

      if (response.status === 200) {
        props.setsubmitForm(!props.submitForm);
        alert("New standard added successfully");
        // navigate('/students/showstudents');
      } else {
        alert("invalid credentials");
      }
    } else {
      alert("Not valid year");
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
                      Add Standard{" "}
                    </h5>
                  </div>

                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>
                        Standard<span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="Number"
                        placeholder="Enter Standard Name"
                        value={standard.standard}
                        onChange={insertFields}
                        name="standard"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms calendar-icon">
                      <label>
                        Starting Year <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control datetimepicker"
                        type="text"
                        placeholder="YYYY"
                        value={standard.startyear}
                        onChange={insertFields}
                        name="startyear"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms calendar-icon">
                      <label>
                        Ending Year <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control datetimepicker"
                        type="text"
                        placeholder="YYYY"
                        value={standard.endyear}
                        onChange={insertFields}
                        name="endyear"
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
                        value={standard.description}
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
                        Add Standard
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

export default AddStandard;
