import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox.js";
import MessageBox from "../components/MessageBox.js";
import Product from "../components/Product.js";

export default function HomeScreen() {
  /* React Hooks */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); //default value = false
  const [error, setError] = useState(false);

  /* useEffect will run 1 time after didMount it takes 2 parameters: 1 function and an empty array for the dependencies*/
  useEffect(() => {
    /* fetchData is an async ajax request to backend server for data, defines fetchData */
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    /* calls fetchData */
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}
