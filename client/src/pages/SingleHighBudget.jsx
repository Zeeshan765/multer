import React from 'react';
import './SingleHighBudget.css';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
//<img src={data.picture} alt='meeeeee' />
//width="100%"
//style={{ height: "20rem" }}
const SingleHighBudget = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='product-box'>
        <div className='upper-box'>
          <img
            src={'http://localhost:4000/api/products' + data.picture}
            alt=''
          />
        </div>
        <div className='lower-box'>
          <h3>{data.name}</h3>
          <h4>{data.price}</h4>

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
