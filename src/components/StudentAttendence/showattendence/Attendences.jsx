import React from "react";

const Attendences = (props) => {
  return (
    <>
      {props.res.students.map((result, i) => {
        return (
          <tr key={i}>
            <td className="text-left">{result.Name}</td>

            {result.month[props.month].attendences.map((rep, i) => {                
              // console.log(rep.status[0]);
              if (rep.status[0] === true) {
                return (
                  <td key={i}>
                    <i className="fas fa-check text-success"></i>
                  </td>
                );
              } else if (rep.status[0] === false) {
                return (
                  <td key={i}>
                    <i className="fas fa-times text-danger"></i>
                  </td>
                );
              } else {
                return <td key={i}>-</td>;
              }
            })}

          </tr>
        );
      })}
    </>
  );
};

export default Attendences;
