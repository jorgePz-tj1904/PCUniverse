import axios from 'axios'
import { GET_COMPONENTS, GET_BY_NAME, POST_COMPONENTS, PAGINATE, DETAIL } from './actions-types'

const URL = "http://localhost:3001"

    export function getComponents () {
        return async function(dispatch) {
            try {
                const response = await axios.get(`${URL}/components`);
                return dispatch({
                    type: GET_COMPONENTS,
                    payload: response.data,
                });
            } catch (error) {
                alert(error.response.data.error)
            }
        };
    };

    //------------------------------------------------------------

    export function getByName (name) {
        return async function(dispatch) {
                const response = await axios.get(`${URL}/componentes/?name=${name}`);
                return dispatch({
                    type: GET_BY_NAME,
                    payload: response.data,
                });
        };
    };

    //------------------------------------------------------------

    export function postComponents (data) {
        return async function (dispatch) {
            try {
                const response = await axios.post(`${URL}/components`, data)
                alert("Componente Creado Correctamente");
                return dispatch({
                    type: POST_COMPONENTS,
                    payload: "",
                });

            } catch (error) {
                alert(error.response.data.error)
            }
        }
    }
   
    //------------------------------------------------------
