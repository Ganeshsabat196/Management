import React from "react";

const ShowSections = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">All Standards & Sections</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Standard</th>
                      <th>Sections...</th>
                    </tr>
                  </thead>

                  <tbody>
                    {props.allSections.map((item, i) => {
                      return (
                        <tr key={i} >
                          <td>{item.standard}--{item.startyear + "-" + item.endyear}</td>

                          {
                            item.batches.map((subItem, id)=>{
                              return (
                                <td key={id}>{subItem.section}</td>
                              )
                            })
                          }

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowSections;
