import {ADD_TO_CART} from '../constants'

const initialState = {
    cardData:[],
};

export const CartItems = (state = initialState, action) => {
const { type, payload }=action
  switch (type) {
    case ADD_TO_CART:
      return { 
          ...state, 
          cardData:action.data ,
        };

    default:
      return state;
  }
};
