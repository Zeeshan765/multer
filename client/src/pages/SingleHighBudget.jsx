import React from 'react';
import './SingleHighBudget.css';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const SingleHighBudget = ({ data }) => {
  const dispatch = useDispatch();
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
          <button
            className='btn-1'
            onClick={() => {
              dispatch(addProduct(data));
            }}
          >
            Add To Custom
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleHighBudget;
