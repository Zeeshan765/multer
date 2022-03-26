import { addProduct } from './cartRedux';
import axios from 'axios';

//import { publicRequest } from "../requestMethods";

export const AddToProduct = async (dispatch, cart) => {
  try {
    const res = await axios.post('http://localhost:4000/api/carts', cart);
    dispatch(addProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};
