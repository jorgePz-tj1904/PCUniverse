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
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  GET_COMENTARIOS,
  POST_COMENTARIO,
  GET_USERS,
  GET_ALL_COMMENTS,
  UPDATE_COMMENTS,
  UPDATE_USER_ROLE,
  UPDATE_PRICE,
  UPDATE_STOCK,
  ALL_ORDERS,
  EMAILS_ACCESS,
  DELETE_PRODUCT_SUCCESS
} from "./actions-types";

export const postEmailsAccess=(email)=>{
  return async function (dispatch) {
    try {
      const data = email;
      console.log(data);
      return dispatch({
        type: EMAILS_ACCESS,
        payload: data,
      });
    } catch (error) {
      console.error("Error con los emails admins");
      console.log(error);
    }
  };
}

// import { buildFilterQueryString } from "./actionUtils";
export function getComponentsFinal() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`https://pcuniverseback2.onrender.com/componentes`);
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
        `https://pcuniverseback2.onrender.com/productos?page=${page}`
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

////////////////////////lautaro
export function getAllComponents() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://pcuniverseback2.onrender.com/allproducts`
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

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.patch(`https://pcuniverseback2.onrender.com/producto/delete/${id}`); 
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export function deletePc(id) {
  return async function (dispatch) {
    console.log(id);
    try {
      await axios.delete(`https://pcuniverseback2.onrender.com/deletepc/${id}`);

    } catch (error) {
      console.log(error);
    }
  }
}

export function getAllPc() {
  return async function (dispatch) {
    try {
      const response = await axios.get('https://pcuniverseback2.onrender.com/pc');
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

export function getByName(name, page) {
  return async function (dispatch) {
    let response;

    if (name === "") {
      response = await axios.get(`https://pcuniverseback2.onrender.com/allproducts`); //devuelve todo los productos
    } else {
      response = await axios.get(`https://pcuniverseback2.onrender.com/name?name=${name}`);
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
        `https://pcuniverseback2.onrender.com/producto/${id}`
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

export function postComentario(data,rate, compId) {
  return async function (dispatch) {
    try {
      console.log(data);
      const response = await axios.post('https://pcuniverseback2.onrender.com/rating',{
        rating: rate,
        userId: null,
        perifericoId:null,
        componenteId: compId,
        opinion:data
      });
      console.log(response.data);
      return dispatch({
        type: POST_COMENTARIO,
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export function getComentarios(compId) {

  return async function (dispatch) {
    try {
      const response = await axios.get(`https://pcuniverseback2.onrender.com/getratings?componenteId=${compId}`);
      
      return dispatch({
        type: GET_COMENTARIOS,
        payload: response.data
      })
      return
    } catch (error) {
      console.log(error);
    }
  }
}

//------------------------------------------------------------

export function postComponents(data) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`https://pcuniverseback2.onrender.com/postpc`, data);
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

export const registerUser = (userData) => {
  return async (dispatch) => {
    console.log(userData);
    try {
      const response = await axios.post("https://pcuniverseback2.onrender.com/signup", userData);
      console.log(userData);

      dispatch({ type: REGISTER_SUCCESS, payload: response.data });

    } catch (error) {
      console.error("Error en registerUser:", error);
      throw error;
    }
  }
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`hhttps://pcuniverseback2.onrender.com/login`, userData);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data })
      return response.data
    } catch (error) {
      console.error("Error en loginUser:", error);
      throw error;
    }
  }
};

export function getAllusers() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://pcuniverseback2.onrender.com/getUsers`
      );
      const data = response.data;
      return dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.error("Error en acceder a get components");
      console.log(error);
    }
  };
}

export function getAllComments() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://pcuniverseback2.onrender.com/allcoments`
      );
      const data = response.data;
      return dispatch({
        type: GET_ALL_COMMENTS,
        payload: data,
      });
    } catch (error) {
      console.error("Error en acceder a get components");
      console.log(error);
    }
  };
};


export const updateComments = (comments) => {
  return {
    type: UPDATE_COMMENTS,
    payload: comments,
  };
};

export const updateUserRole = (id, newRole) => {
  return async function (dispatch) {
    try {
      // Realizar una solicitud PUT para actualizar el rol del usuario
      const response = await axios.put('https://pcuniverseback2.onrender.com/putrole', {
        id: id, // Cambia 'userId' a 'id'
        newRole: newRole,
      });

      // Si la solicitud fue exitosa, actualizar el estado en Redux
      if (response.status === 200) {
        dispatch({
          type: UPDATE_USER_ROLE,
          userId: id, // Cambia 'userId' a 'id'
          newRole: newRole,
        });
      }
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };
};


export const updatePrice = (id, newPrice) => {
  return async function (dispatch) {
    try {
      const response = await axios.put(`https://pcuniverseback2.onrender.com/putPrice`, {
        id: id,
        newPrice: newPrice,
      });

      if (response.status === 200) {
        dispatch({
          type: UPDATE_PRICE,
          id: id,
          newPrice: newPrice,
        });
      }
    } catch (error) {
      console.error('Error al cambiar el precio:', error);
    }
  };
};

export const updateStock = (id, newStock) => {
  return async function (dispatch) {
    try {
      const response = await axios.put(`https://pcuniverseback2.onrender.com/putstock`, {
        id: id,
        newStock: newStock,
      });

      if (response.status === 200) {
        dispatch({
          type: UPDATE_STOCK,
          id: id,
          newStock: newStock,
        });
      }
    } catch (error) {
      console.error('Error al cambiar el Stock:', error);
    }
  };
};

export function getAllOrders() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://pcuniverseback2.onrender.com/getpayments`
      );
      const data = response.data;
      return dispatch({
        type: ALL_ORDERS,
        payload: data,
      });
    } catch (error) {
      console.error("Error en acceder a get components");
      console.log(error);
    }
  };
}