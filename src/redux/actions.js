import axios from "axios";
import {
  GET_COMPONENTS,
  ALL_PC,
  GET_BY_NAME,
  POST_COMPONENTS,
  DETAIL,
  FILTER,
  ALL_COMPONENTS,
} from "./actions-types";

export function getComponents(page) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/componentes/paginado?page=${page}`
      );
      const data = response.data.data;
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

export function getAllComponents() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/`
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

export function getAllPc(){
  return async function(dispatch){
    try {
      const response = await axios.get('http://localhost:3001/pc');
      return dispatch({
        type: ALL_PC,
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}


//---------------------------Por nombre---------------------------------

export function getByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/componentes/name?name=${name}`
      );
      return dispatch({
        type: GET_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error(
        "Error al traer los componentes y periféricos por nombre",
        error
      );
    }
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
      const response = await axios.post(`http://localhost:3001/postpc`, data);
      console.log(data);
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

//Filtros de Datos//
export const filterData = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "`http://localhost:3001/componentes/filter`"
      );
      return dispatch({
        type: FILTER,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error al filtrar los componentes ", error);
    }
  };
};