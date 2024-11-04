import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BASKET_LOADING:
      return { ...state, loading: true };

    case ActionTypes.SET_BASKET_ERROR:
      return { ...state, loading: false, isError: action.payload };

    case ActionTypes.SET_BASKET:
      return {
        ...state,
        loading: false,
        isError: false,
        basket: action.payload,
      };

    case ActionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };

    case ActionTypes.UPDATE_ITEM:
      // state.basket.map((item) => {
      // if (item.id === action.payload) {
      // return { ...item, amount: item + 1 };
      //} else {
      // return item;
      // }

      const newBasket = state.basket.map((i) =>
        i.id === action.payload ? { ...i, amount: i.amount + 1 } : i
      );
      return { ...state, basket: newBasket };
    //})

      case ActionTypes.REMOVE_ITEM:
      const updatedBasket = state.basket.filter((i) => i.id !== action.payload );
      return {...state, basket: updatedBasket };

    default:
      return state;
  }
};
export default basketReducer;
