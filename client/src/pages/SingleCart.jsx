import React from 'react';
import './SingleCart.css';
//import { addProduct } from '../redux/cartRedux';
//import { useDispatch } from 'react-redux';

const SingleCart = ({ data }) => {
  //const dispatch = useDispatch();
  console.log(data);
  return (
    <>
      <div className='product-box'>
        <div className='upper-box'>
          <img src={data.image} alt='' />
        </div>
        <div className='lower-box'>
          <h3>{data.name}</h3>
          <h4>{data.price}</h4>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCart;
