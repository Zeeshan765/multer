import axios from 'axios';
import React from 'react';
import './singleProduct.css';

const SingleProduct = () => {
  const data = axios
    .get('http://localhost:4000/api/products')
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error.message);
    });
  console.log(data);

  return (
    <>
      <div className='single-product'>
        <h1>this is single product</h1>
        <h3> image : {data.data.data.picture}</h3>
      </div>
    </>
  );
};

export default SingleProduct;
