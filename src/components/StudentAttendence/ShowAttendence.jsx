import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./css/akkhor.css";

// private
import { backendURL } from "../private/private";
import PageHeader from "./components/PageHeader";
import ShowAttendenceFilter from "./filter/ShowAttendenceFilter";
import Attendences from "./showattendence/Attendences";
const url = backendURL;
const ShowAttendence = () => {
  // states
  const [myData, setMyData] = useState([]);
  const [myTempData, setMyTempData] = useState([]);
  const [filter, setFilter] = useState({
    standard: "",
    section: "",
    month: "",
    year: "",
  });
  const [dates, setdates] = useState([]);

  // useEffect to fetch attendences data
  useEffect(() => {
    const fetchapi = async () => {
      const { data } = await axios.get(`${url}/attendence/getattendence`);
      console.log(data);
      setMyData(data);
    };
    fetchapi();
    // setting the dates of attendence
    for (let i = 1; i < 32; i++) {
      setdates((preVal) => {
        return [...preVal, i];
      });
    }
  }, []);

  // filtering data and setting in temp data
  useEffect(() => {
    console.log(filter.year, filter.section, filter.standard);
    setMyTempData(
      myData.filter((e) => {
        console.log(e.year, e.batch, e.class);
        return (
          e.year == filter.year &&
          e.batch == filter.section &&
          e.class == filter.standard
        );
      })
    );
  }, [filter, myData]);

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="Student Attendence" />
          <ShowAttendenceFilter setFilter={setFilter} />

          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table comman-shadow">
                <div className="card-body">
                  <div className="page-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h3 className="page-title">Fees collection</h3>
                      </div>
                      <div className="col-auto text-end float-end ms-auto download-grp">
                        <a href="#" className="btn btn-outline-primary me-2">
                          <i className="fas fa-download" /> Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                      <thead className="student-thread">
                        <th className="text-left">Students</th>
                        {dates.map((item, i) => {
                          return <th key={i}>{item}</th>;
                        })}
                      </thead>
                      <tbody>
                        {console.log(myTempData)}
                        {myTempData.map((res, i) => {
                          return <Attendences key={i} res={res} month={filter.month} />;
                        })}
                      </tbody>
                    </table>
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

export default ShowAttendence;
