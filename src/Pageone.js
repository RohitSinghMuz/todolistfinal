import React, { createContext, useEffect, useState } from "react";
export const contextdata = createContext();

const Pageone = ({ children }) => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    try {
      const responsedata = await fetch("https://fakestoreapi.com/products");
      const newdata = await responsedata.json();
      setdata(newdata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <contextdata.Provider value={data}>
      {children}
      </contextdata.Provider>
    </>
  );
};

export default Pageone;
