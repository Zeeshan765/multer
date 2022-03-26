import React from 'react';
import './SingleLowBudget.css';
import { addProduct } from '../redux/cartRedux';
//import { AddToProduct } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCartItems } from '../redux/cartRedux';
import axios from 'axios';

const SingleLowBudget = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  // const handlecart = (e) => {
  //   e.preventDefault();
  //   AddToProduct(dispatch, { product });
  // };
  const data = useSelector(getCartItems);
  const handlecart = async () => {
    dispatch(addProduct(product));

    axios.post('http://localhost:4000/api/carts', { data });
  };

  // axios
  //   .post('http://localhost:4000/api/cart', props.product)
  //   //dispatch(addProduct(props.product))
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   });

  // console.log('Prop check');
  //console.log(props.product.picture);
  //'http://localhost:4000/public/' +
  console.log(props.product.category);

  return (
    <>
      <div className='product-box'>
        <div className='upper-box'>
          <img src={product.picture} alt='' />
        </div>
        <div className='lower-box'>
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
          <button
            className='btn-1'
            // onClick={() => {
            //   dispatch(addProduct(props.product));
            // }}
            onClick={handlecart}
          >
            Add To Custom
          </button>
        </div>
      </div>
    </>
  );
};
export default SingleLowBudget;
