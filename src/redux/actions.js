import axios from "axios";
import {
  GET_COMPONENTS,
  GET_BY_NAME,
  POST_COMPONENTS,
  PAGINATE,
  DETAIL,
} from "./actions-types";

export function getComponents() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/componentes`);
      const data = response.data;
      console.log(data);
      return dispatch({
        type: GET_COMPONENTS,
        payload: data,
      });
    } catch (error) {
      console.error("Error en acceder a get components");
      console.log(error);
    }
  };
}

//------------------------------------------------------------

export function getByName(name) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/componentes?name=${name}`
    );
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
        `http://localhost:3001/componentes/${id}`
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
      const response = await axios.post(`${URL}/components`, data);
      console.log(response);
      alert("Componente Creado Correctamente");
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
