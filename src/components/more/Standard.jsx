import React, { useState, useEffect } from "react";
import PageHeader from "./components/PageHeader";

// api
import { getStandards, getSections } from "../Api/More";

// components
import AddStandard from "./AddStandard";
import AddSection from "./AddSection";
import ShowSections from "./ShowSections";

const Standard = () => {
  const [submitForm, setsubmitForm] = useState(false);
  const [allStandards, setallStandards] = useState([]);
  const [allSections, setallSections] = useState([]);

  const getAllStandards = async () => {
    const response = await getStandards(); // getting all standards data form database
    console.log("All Standards are", response);
    setallStandards(response);
  };

  const getAllSections = async () => {
    const response = await getSections(); // getting all standards data form database
    console.log("All Sections are", response);
    setallSections(response);
  };

  useEffect(() => {
    getAllStandards();
    getAllSections();
  }, [submitForm]);

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader pageTitle="Add Standards & Sections" />

          {/* Add Standard Part */}
          <AddStandard setsubmitForm={setsubmitForm} submitForm={submitForm} />
          <hr />
          <AddSection allStandards={allStandards} setsubmitForm={setsubmitForm} submitForm={submitForm}/>
<hr />
          <ShowSections allSections={allSections} />
        </div>
      </div>
    </>
  );
};

export default Standard;
