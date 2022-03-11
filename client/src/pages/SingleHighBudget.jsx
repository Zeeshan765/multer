import React from 'react';
import './SingleHighBudget.css';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const SingleHighBudget = (props) => {
  // console.log('Prop check');
  //console.log(props.product.picture);
  console.log(props.product.category);

  const dispatch = useDispatch();
  return (
    <>
      <div className='product-box'>
        <div className='upper-box'>
          <img
            src={'http://localhost:4000/public/' + props.product.picture}
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

export default SingleHighBudget;
