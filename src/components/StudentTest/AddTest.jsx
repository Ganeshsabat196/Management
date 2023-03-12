import React, { useEffect, useState } from "react";

// components
import TestDetails from "./addtest/TestDetails";
import TestMarks from "./addtest/TestMarks";

const AddTest = () => {
  const [students, setstudents] = useState([]); // all students will be stored here whose test marks we want to add
  const [display, setdisplay] = useState(true); // help to toggle between the TestDetails and TestMarks page

  return (
    <>
      {display ? (

        // pehla test details ka form dikhaga aur test ka details lega aur usecontext ma store karaga
        <TestDetails 
          setdisplay={setdisplay}
          display={display}
          setstudents={setstudents}  // this will set the students array whose marks we want to fill
        />
      ) : (
        // test ka details ka baad vo test ka marks fill karaga
        <TestMarks students={students} />
      )}
    </>
  );
};

export default AddTest;
