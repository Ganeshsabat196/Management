import React, { useState, createContext } from "react";

export const TestContext = createContext(null);

const TestProvider = ({ children }) => {
  const [testData, settestData] = useState({});

  return (
    <>
      <TestContext.Provider value={{ testData, settestData }}>
        {children}
      </TestContext.Provider>
    </>
  );
};

export default TestProvider;
