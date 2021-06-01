import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product.js";

export default function HomeScreen() {
  /* React Hooks */
  const [products, setProducts] = useState([]);

  /* useEffect will run 1 time after didMount it takes 2 parameters: 1 function and an empty array for the dependencies*/
  useEffect(() => {
    /* fetchData is an async ajax request to backend server for data, defines fetchData */
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    /* calls fetchData */
    fetchData();
  }, []);

  return (
    <div>
      <div className="row center">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
