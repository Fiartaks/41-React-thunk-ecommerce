import axios from "axios";
import { ActionTypes } from "../actionTypes";

export const getBasket = () => (dispatch) => {
  dispatch({ type: ActionTypes.SET_BASKET_LOADING });
  axios
    .get("http://localhost:3050/basket")
    .then((res) =>
      dispatch({ type: ActionTypes.SET_BASKET, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.SET_BASKET_ERROR, payload: err })
    );
};

//!Sepete yeni elaman ekleme

//!Hem api guncelleme hem de Store u

export const addToBasket = (product) => (dispatch) => {
  //!yeni bir obje eklndikten sonra miktar 1 olmali

  const newProduct = { ...product, amount: 1 };

  //!gereksiz elemanlari kaldir

  delete newProduct.specs;
  delete newProduct.color;
  delete newProduct.title;

  //! Api ye urunu kaydet

  axios
    .post("http://localhost:3050/basket", newProduct)

    //!Store a yeni urunu kaydet

    .then(() => {
      dispatch({ type: ActionTypes.ADD_TO_BASKET, payload: newProduct });
    });
};

//!Sepete miktar arttırma

export const updateItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3050/basket/${product.id}`, {
      amount: product.amount + 1,
    })
    .then(() => {
      dispatch({
        type: ActionTypes.UPDATE_ITEM,
        payload: product.id,
      })
    });
};

//!Sepetteki elamani silme

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3050/basket/${id}`)
    .then(() => {
      dispatch({ type: ActionTypes.REMOVE_ITEM, payload: id, });
    });
}
