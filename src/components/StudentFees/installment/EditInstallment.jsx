import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//api
import { editinstallment } from "../../Api/StudentsFees";

// components
import PageHeader from "../components/PageHeader";

const EditInstallment = () => {
  let location = useLocation();
  const navigate = useNavigate();

  console.log(location.state.Installment, location.state.student_name);

  const student_name = location.state.student_name;
  const student_id = location.state.student_id;
  const Installment = location.state.Installment;

  const [studentInstallmentData, setstudentInstallmentData] = useState({
    fees_amount: Installment.fees_amount,
    fees_type: Installment.fees_type,
    payment_date: Installment.payment_date,
  });

  // updating the edit installment form data on changing the values
  const insertFields = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setstudentInstallmentData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  //   // on submitting the form sending the data to database using axios api
  const submitForm = async (e) => {
    e.preventDefault();

    const { fees_amount, fees_type, payment_date } = studentInstallmentData;

    const data = {
      student_id: student_id,
      _id: Installment._id,
      
      fees_amount: fees_amount,
      fees_type: fees_type,
      payment_date: payment_date
    };

    const response = await editinstallment(data);
    console.log(response);

    if (response.status === 200) {
      alert("Student updated successfully");
      navigate("/studentfees/showfees");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="Edit Installment" />

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <h5 className="form-title">
                          <span>{student_name}</span>
                        </h5>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Fees Amount <span className="login-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={studentInstallmentData.fees_amount}
                            onChange={insertFields}
                            name="fees_amount"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms">
                          <label>
                            Fees Type <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            value={studentInstallmentData.fees_type}
                            onChange={insertFields}
                            name="fees_type"
                          >
                            <option>Select Type</option>
                            <option>Class Test</option>
                            <option>Exam Fees</option>
                            <option>Hostel Fees</option>
                            <option>Transport Fees</option>
                            <option>Mess Fees</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-sm-4">
                        <div className="form-group local-forms calendar-icon">
                          <label>
                            Paid Date <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
                            placeholder="DD-MM-YYYY"
                            value={studentInstallmentData.payment_date}
                            onChange={insertFields}
                            name="payment_date"
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

export default EditInstallment;
