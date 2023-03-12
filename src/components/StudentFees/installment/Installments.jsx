import React from "react";
import { NavLink } from "react-router-dom";

//api
import { deleteInstallment } from "../../Api/StudentsFees";

const Installments = (props) => {
  // --------------- deleting the Installment on click of this function---------------------------------
  const DeleteInstallment = async (_id, e) => {
    e.preventDefault();
    const data = {
      _id: _id,
      student_id: props.item.student_id,
    };
    const response = await deleteInstallment(data);
    console.log("delete student installment data", response);
  };
  // ------------------------------------------------------------------------------------------------------

  const fees = props.item.fees; // storing all the fees of each student and rendering them one by one

  return (
    <>
      {fees.map((Installment, i, arr) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            {/* <td>{Installment._id}</td> */}
            <td>{Installment.fees_type}</td>
            <td>{Installment.payment_date}</td>
            <td>{Installment.fees_amount}</td>

            <td className="text-end">
              <div className="actions ">
                {/* ------------------Edit the installment by clicking here--------------------------- */}
                <NavLink
                  className="nav-link btn btn-sm bg-success-light me-2"
                  to="/studentfees/editinstallment"
                  state={{
                    Installment: Installment,
                    student_name: props.item.student_name,
                    student_id: props.item.student_id,
                  }}
                >
                  <i className="feather-edit" />
                </NavLink>
                {/* ------------------------------------------------------------------------------------- */}

                {/* ------------------Delete the installment by clicking here--------------------------- */}
                <a
                  href=""
                  className="nav-link btn btn-sm bg-success-light me-2"
                  onClick={async (e) => {
                    // e.preventDefault();
                    const data = {
                      _id: Installment._id,
                      student_id: props.item.student_id,
                    };
                    console.log(data);
                    const response = await deleteInstallment(data);
                    console.log("delete student installment data", response);
                  }}
                >
                  <i className="feather-delete" />
                  {/* ------------------------------------------------------------------------------------- */}
                </a>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Installments;
