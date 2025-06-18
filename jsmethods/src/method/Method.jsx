import React from "react";

const Method = () => {
  const fetchData = async (url, method = "") => {
    const fetchedData = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    return fetchedData;
  };

  const addData = async (url, method = "", body) => {
    const fetchedData = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    return fetchedData;
  };

  const main = async () => {
    const products = await fetchData(
      "https://dummyjson.com/products",
      "GET",
      {}
    );
    const addedProduct = await addData(
      "https://dummyjson.com/products/add",
      "POST",
      {
        title: "BMW x5",
      }
    );
    //   const product10 = await fetchData("https://dummyjson.com/products/10");
    console.log(addedProduct);
  };

  main();

  return (
    <ul>
      <li>Привет</li>
    </ul>
  );
};

export default Method;
