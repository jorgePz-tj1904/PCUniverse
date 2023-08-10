import {
  GET_COMPONENTS,
  ALL_PC,
  ALL_COMPONENTS,
  GET_BY_NAME,
  POST_COMPONENTS,
  PAGINATE,
  DETAIL,
  FILTER,
} from "./actions-types";

const initialState = {
  allComponents: [],
  pcFinals: [],
  componentsP: [],
  detail: [],
  filteredComponents:[]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPONENTS:
      return {
        ...state,
        componentsfilters: action.payload,
        allComponentsP: action.payload,
      };
    case ALL_PC:
      return{
        state,
        pcFinals: action.payload
      }
    case ALL_COMPONENTS:
      return{
        ...state,
        allComponents: action.payload
      }

    case GET_BY_NAME:
      return {
        ...state,
        allComponents: action.payload,
        componentsP: [...action.payload],
      };

    case DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
;

    case FILTER:
      return {
        ...state,
        filteredComponents: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;