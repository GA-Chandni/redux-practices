import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
  cardData: [],
};

export const CartItems = (state = [], action) => {
  //defined action type
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      //consoling the reducer what data we get
      // console.log('reducer--',action)
      //for multiple attempt we can store in array
      return [
        ...state,
        { cardData: action.data }, //craeted a object
      ];

    case REMOVE_TO_CART:
      //for removing using pop()
      state.pop();
      return [
        ...state,
      ]

    default:
      return state;
  }
};
