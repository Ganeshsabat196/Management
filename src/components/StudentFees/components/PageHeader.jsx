import React from "react";

const PageHeader = (props) => {
  return (
    <>
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="page-sub-header">
              <h3 className="page-title">{props.pageTitle}</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="students.html">Student</a>
                </li>
                <li className="breadcrumb-item active">{props.pageTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
