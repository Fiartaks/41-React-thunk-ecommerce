import { ActionTypes } from "../actionTypes";
import axios from "axios";

export const setLoading =()=>({
    type: ActionTypes.SET_LOADING,
})

export const setError =(payload)=>({
    type: ActionTypes.SET_ERROR,
    payload,
})

export const setProducts =(payload)=>({
    type: ActionTypes.SET_PRODUCTS,
    payload,
})



export const getProducts =()=>(dispatch)=>{

    dispatch(setLoading())
    axios
    .get('http://localhost:3050/products')
    .then((res)=> dispatch(setProducts(res.data)))
    .catch((err)=> dispatch(setError(err)))
}







//Redux thunk redux eylemlerini asenkron olmasini saglar
//Thunk: Bir fonksiyonun icerisenede farkli bir fonksiyon cagirildigi anlama gelir. 
//!Ornek thunk fonksiyonu


function ornkFonksiyon(){
    return async function(dispatch){
        const data =await axios.get('...')
        dispatch({type:'SET_VERI'})

    }
}

// Thunk fonksiyonu dispatch'e parametre olarak cagirabiliriz
 //! Ok fonksiyonu yazimi
 // Redux'deki dispatch metodu ile thunk fonksiyonu cagirabiliriz


const ornekFonk = () => async (dispatch) =>{
    const data =await axios.get('...')
    dispatch({type:'SET_VERI'}) 
}