import React from 'react';
import './SingleLowBudget.css';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const SingleLowBudget = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='product-box'>
        <div className='upper-box'>
          <img
            src={'http://localhost:4000/' + props.product.picture}
            width='100%'
            style={{ height: '20rem' }}
            alt=''
          />
        </div>
        <div className='lower-box'>
          <h3>{props.product.name}</h3>
          <h4>{props.product.price}</h4>
          <p>{props.product.description}</p>
          <button
            className='btn-1'
            onClick={() => {
              dispatch(addProduct(props.product));
            }}
          >
            Add To Custom
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleLowBudget;
