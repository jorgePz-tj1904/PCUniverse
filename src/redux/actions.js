import axios from "axios";
import {
  GET_COMPONENTS,
  ALL_PC,
  DELETE_PC,
  GET_BY_NAME,
  POST_COMPONENTS,
  DETAIL,
  // FILTER,
  ALL_COMPONENTS,
  GET_COMPONENTS_FINAL,
  ADD_TO_CART,
  REMOVE_FOR_CART,
  EMPTY_CART,
} from "./actions-types";

// import { buildFilterQueryString } from "./actionUtils";
////////////////////////lautaro
export function getAllComponents() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/allproducts`
      );
      const data = response.data;
      return dispatch({
        type: ALL_COMPONENTS,
        payload: data,
      });
    } catch (error) {
      console.error("Error en acceder a get components");
      console.log(error);
    }
  };
}
export function filterProductsByCategory(payload){
  return{
    type: 'FILTER_BY_CATEGORY',
    payload
  }
}
export const applyPriceOrder = (order) => ({
  type: "APPLY_PRICE_ORDER",
  payload: order,
});
//////////////////////lautaro

export function getComponentsFinal() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/componentes`);
      const data = response.data;
      console.log(data);
      return dispatch({
        type: GET_COMPONENTS_FINAL,
        payload: data,
      });
    } catch (error) {
      console.error("Error en acceder a get components");
      console.log(error);
    }
  };
}
///////////////////////////////////////
export function getComponents(page) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/productos?page=${page}`
      );
      const data = response.data; // Extrae los datos del objeto de respuesta

      return dispatch({
        type: GET_COMPONENTS,
        payload: data,
      });
    } catch (error) {
      console.error("Error en acceder a get components");
      console.log(error);
    }
  };
};


export function deletePc(id){
  return async function(dispatch){
    console.log(id);
    try {
      await axios.delete(`http://localhost:3001/deletepc/${id}`);
    
    } catch (error) {
      console.log(error);
    }
  }
}

export function getAllPc(){
  return async function(dispatch){
    try {
      const response = await axios.get('http://localhost:3001/pc');
      console.log(response.data);
      return dispatch({
        type: ALL_PC,
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}


// export function getByCategory(category) {
//   return async function (dispatch) {
//     const response = await axios.get(
//       `http://localhost:3001/componentes/filter?categoria=${category}`
//     );
//     return dispatch({
//       type: GET_BY_CATEGORY,
//       payload: response.data,
//     });
//   };
// }

//---------------------------Por nombre---------------------------------

export function getByName(name, page) {
  return async function (dispatch) {
    let response;

    if (name === "") {
      response = await axios.get(`http://localhost:3001/productos?page=${page}`);
    } else {
      response = await axios.get(`http://localhost:3001/name?name=${name}`);
    }

    return dispatch({
      type: GET_BY_NAME,
      payload: response.data,
    });
  };
}

export function getDetailById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/producto/${id}`
      );
      dispatch({
        type: DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.error(
        "Error al traer los componentes y perofericos por id",
        error
      );
    }
  };
}

//------------------------------------------------------------

export function postComponents(data) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/postpc`, data);
      console.log(data);
      return dispatch({
        type: POST_COMPONENTS,
        payload: "",
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

//------------------------------------------------------

// actions.js

export const addToCart = (cardId) => {
  return {
    type: ADD_TO_CART,
    payload: cardId,
  };
};

//-----------------------------------------------------------

export const removeFromCart = (cardId) => {
  return {
    type: REMOVE_FOR_CART,
    payload: cardId,
  };
};

 //--------------------------------------------------------

 export const emptyCart = () => ({
  type: EMPTY_CART,
});