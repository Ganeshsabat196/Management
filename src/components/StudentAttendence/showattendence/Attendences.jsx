import React from "react";

const Attendences = (props) => {
  return (
    <>
      {props.res.students.map((result, i) => {
        return (
          <tr key={i}>
            <td className="text-left">{result.Name}</td>

            {result.month[props.month].attendences.map((rep, i) => {                

              if (rep.status === true) {
                return (
                  <td key={i}>
                    <i className="fas fa-check text-success"></i>
                  </td>
                );
              } else if (rep.status === false) {
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
