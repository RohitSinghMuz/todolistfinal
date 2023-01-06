import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setdata] = useState([]);

  const fetchdata = () => {
    fetch("https://fakestoreapi.com/products").then((Response) =>
      Response.json().then((newdata) => setdata(newdata))
    );
  };
  useEffect(() => {
    fetchdata();
  }, [data]);
  console.log(data);
  return (
    <>
      <div>
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  margin: "1em",
                  width: "300px",
                  height: "350px",
                }}
              >
                <h2>{item.category}</h2>
                <h2>{item.id}</h2>

                <h2>{item.title}</h2>
                <h2>${item.price}</h2>
                <h2>Rating {item.rating.count}</h2>
                <h2>Rate {item.rating.rate}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Fetch;
