import {ADD_TO_CART,REMOVE_TO_CART} from '../constants'

//Add to cart Action 
export const addToCart = (data) => {
    // console.warn('data--',data)
  return {
    type: ADD_TO_CART,
    data:data,
  };
};



// Remove To Cart Action
export const RemoveToCart = () => {
    // console.warn('remove data--')
  return {
    type: REMOVE_TO_CART,
  };
};
