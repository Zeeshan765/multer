import React from 'react';
import './Cart.css';
//import SingleHighBudget from './SingleHighBudget';
//import budgetdata from './budgetdata';
import SingleCart from './SingleCart';
import { useSelector } from 'react-redux';
import { getCartItems } from '../redux/cartRedux';

const Cart = () => {
  //const [cartdata, setCartdata] = useState();
  const cartitems = useSelector(getCartItems);
  return (
    <>
      <h1>Here is the Cart</h1>
      <h2>Cart is Here</h2>
      <div className='highbudget-container'>
        {cartitems.map((data, index) => (
          <SingleCart key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default Cart;
