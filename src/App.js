import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Base from './Base';

// Dashboard
import Dashboard from './components/dashboard/Dashboard';

// Students Details
import ShowStudents from './components/Students/ShowStudents';
import AddStudents from './components/Students/AddStudent';
import EditStudents from './components/Students/EditStudents';

// Students Attendence
import ShowAttendence from './components/StudentAttendence/ShowAttendence';
import AddAttendence from './components/StudentAttendence/AddAttendence';
import EditAttendence from './components/StudentAttendence/EditAttendence';
import DeleteAttendence from './components/StudentAttendence/DeleteAttendence';

// Students Fees
import ShowFees from './components/StudentFees/ShowFees';

// Students Installment
import AddInstallment from './components/StudentFees/installment/AddInstallment';
import ShowInstallment from './components/StudentFees/installment/ShowInstallment';
import EditInstallment from './components/StudentFees/installment/EditInstallment';

// Students Test
import ShowTest from './components/StudentTest/ShowTest';
import AddTest from './components/StudentTest/AddTest';

// Alltests
import ShowAllTests from './components/StudentTest/tests/ShowAllTests';
import EditTest from './components/StudentTest/edittest/EditTest';

// more 

// Batches and Standard
import Standard from './components/more/Standard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Base />} >
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* <Route path="/admission">
            <Route path="admissionform" element={<AdmissionForm />} />
          </Route> */}

          <Route path="/students">
            <Route path="showstudents" element={<ShowStudents />} />
            <Route path="addstudents" element={<AddStudents />} />
            <Route path="editstudents" element={<EditStudents />} />
          </Route>
          
          <Route path="/attendence">
            <Route path="showattendence" element={<ShowAttendence />} />
            <Route path="addattendence" element={<AddAttendence />} />
            <Route path="editattendence" element={<EditAttendence />} />
            <Route path="deleteattendence" element={<DeleteAttendence />} />
          </Route>
          
          <Route path="/studentfees">
            <Route path="showfees" element={<ShowFees />} />

            <Route path="addinstallment" element={<AddInstallment />} />
            <Route path="showinstallment" element={<ShowInstallment />} />
            <Route path="editinstallment" element={<EditInstallment />} />
          </Route>
          
          <Route path="/studenttest">
            <Route path="showtest" element={<ShowTest />} />
            <Route path="Addtest" element={<AddTest />} />
            <Route path="edittest" element={<EditTest />} />

            <Route path="showalltests" element={<ShowAllTests />} />
          </Route>
          
          <Route path="/more">
            <Route path="standard" element={<Standard />} />
          </Route>

          <Route path="*" element={<Dashboard />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
