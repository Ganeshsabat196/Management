import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import "../../css/akkhor.css"

// private
import { backendURL } from "../private/private";
import PageHeader from "../Students/components/PageHeader";
import ShowAttendenceFilter from "./filter/ShowAttendenceFilter";
import AddAttendenceFilter from "./filter/AddAttendenceFilter";
const url = backendURL;

const DeleteAttendence = () => {
  let location = useLocation();
  const navigate = useNavigate();

  var i = 0;
  const [myData, setMyData] = useState([]);
  const [myTempData, setMyTempData] = useState([]);
  const [filter, setFilter] = useState(["NULL", "NULL", "NULL", "NULL"]);
  const [checkbox, setCheckbox] = useState(true)

  const [post, setPost] = useState([]);
  const [upattendence, setUpattendence] = useState([]);

  // useEffect to fetch attendences data
  useEffect(() => {
    const fetchapi = async () => {
      const { data } = await axios.get(`${url}/attendence/getattendence`);
      setMyData(data);
    };
    fetchapi();
  }, []);

  // submit button html content
  const Function1 = () => {
    if (
      filter[0] != "NULL" &&
      filter[1] != "NULL" &&
      filter[2] != "NULL" &&
      filter[3] != "NULL" &&
      filter[4] != "NULL"
    ) {
      return (
        <div style={{ width: "100%" }}>
          <button
            type="submit"
            style={{
              display: "flex",
              width: "10%",
              justifyContent: "center",
              float: "right",
              alignItems: "center",
            }}
            className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
            onClick={() => {
              setPost([]);
              var j = 1;
              while (j <= i) {
                var id = "flexCheckChecked" + j;
                getdata(
                  document.getElementById(j).innerText,
                  document.getElementById(id).checked
                );
                j++;
              }
            }}
          >
            Delete All
          </button>
        </div>
      );
    } else {
      return (
        <div class="alert alert-danger" role="alert">
          Select proper filters to update data
        </div>
      );
    }
  };

  // hooks to get date and status on attendences
  const getdata = (id, value) => {
    setPost((post) => [
      ...post,
      {
        std_id: id,
        status: value,
      },
    ]);
  };

  useEffect(() => {
    if (post.length != 0) {
      var data = myTempData[0].students;
      // console.log("log dsata  ",data);
      var i = 0;
      setUpattendence([]);
      data.map((e) => {
        // console.log("datapost",post[i].status);
        var res = e;
        // console.log("file", res);
        res.month[filter[2]].attendences[filter[4] - 1].status = post[i].status;
        // setUpattendence(res)
        setUpattendence((upattendence) => [...upattendence, res]);
        i++;
      });
    }
  }, [post]);

  useEffect(() => {
    // console.log(upattendence);
    if (upattendence.length != 0) {
      deleteattendence({ filter, upattendence, post });
    }
  }, [upattendence]);

  // filtering the students data
  useEffect(() => {
    // console.log(myData);
    setMyTempData(
      myData.filter((e) => {
        return (
          e.year == filter[3] && e.batch === filter[1] && e.class === filter[0]
        );
      })
    );
  }, [filter, myData]);

  // to check the response of the uploaded data
  const status = (response) => {
    if (response.status === 200) {
      alert("Attendance updated successfully");
      // navigate("/attendence/showattendence");
    } else {
      alert("invalid credentials");
    }
  };

  // on submitting the form sending the data to database using fetch api
  const deleteattendence = async (data) => {
    try {
      console.log("add student fees data sending", data);
      const response = await axios.post(
        `${backendURL}/attendence/deleteAttendence/`,
        data
      );
      console.log("Attendence deleted successfully", response);
      status(response);
    } catch (error) {
      console.log("Error while addstudent API", error.message);
    }
  };

 
  const checkfunc = (data) => {
    // console.log(data);
    if (data) {
      return (
        <>
          <input
            className="form-check-input"
            type="checkbox"
            id={"flexCheckChecked" + i}
            checked={checkbox}
            onClick={()=>{
              if (checkbox) {
                setCheckbox(false)
              }
              else{
                setCheckbox(true)
              }
            }}
          />
        </>
      )
    }
    else{
      return (
        <>
          <input
            className="form-check-input"
            type="checkbox"
            id={"flexCheckChecked" + i}
          />
        </>
      )
    }
  }
  
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="Delete Attendence" />
          <AddAttendenceFilter setFilter={setFilter} />

          <div className="row">
            <div className="col-12">
              {/* <!-- Student Attendence Search Area Start Here --> */}
              <div className="col-12" style={{ color: "black" }}>
                <div className="card mt-3">
                  <div className="card-body">
                    <table
                      className="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
                      id="example4"
                    >
                      <thead>
                        <tr>
                          <th />
                          {/* <th> Roll No </th> */}
                          <th> Id </th>
                          <th> Name </th>
                          <th> Department </th>
                          {/* <th> Mobile </th> */}
                          <th> Email </th>
                          {/* <th>Admission Date</th> */}
                          <th> Action </th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          filter[0] != "Null" &&
                          filter[1] != "Null" &&
                          filter[2] != "Null" &&
                          filter[3] != "Null" &&
                          myTempData.map((res) => {

                            return (
                              <>
                                {res.students.map((result) => {
                                  {
                                    i++;
                                    // {console.log(result.month[filter[2]].attendences[filter[4]-1].status )}

                                  }
                                  return (
                                    <tr>
                                      <td className="patient-img">
                                        <img
                                          src="../assets/img/user/user10.jpg"
                                          alt=""
                                        />
                                      </td>
                                      <td className="text-left" id={i}>
                                        {result.studentid}
                                      </td>
                                      <td className="text-left">
                                        {result.Name}
                                      </td>
                                      <td className="left">Science</td>
                                      <td>
                                        <a href="mailto:shuxer@gmail.com">
                                          Ganesh@gmail.com{" "}
                                        </a>
                                      </td>
                                      <td>
                                        <div className="form-check">


                                          {checkfunc(result.month[filter[2]].attendences[filter[4] - 1].status[0])}

                                          {/* <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={"flexCheckChecked" + i}
                                          /> */}
                                          <label
                                            className="form-check-label"
                                            htmlFor={"flexCheckChecked" + i}
                                          >
                                            present
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </>
                            );
                          })}
                      </tbody>
                    </table>
                    <Function1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAttendence;
