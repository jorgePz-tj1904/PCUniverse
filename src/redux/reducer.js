import {
    GET_COMPONENTS,
    GET_BY_NAME,
    POST_COMPONENTS,
    PAGINATE,
    DETAIL,
    GET_COMPONENTS_FINAL,
    ADD_TO_CART,
    REMOVE_FOR_CART,
    EMPTY_CART,
  } from './actions-types';
  
  const initialState = {
    allComponents: [],
    componentsP: [],
    pcFinals:[],
    allComponentsF: [],
    detail: [],
    cartItems: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_COMPONENTS:
        return {
          ...state,
          componentsP: action.payload,
          allComponents: action.payload,
        };
      case GET_COMPONENTS_FINAL:
        return {
          ...state,
          componentsP: action.payload,
          allComponentsF: action.payload,
        };
      case GET_BY_NAME:
        return {
          ...state,
          componentsP: action.payload,
          allComponents: action.payload,
        };
      case POST_COMPONENTS:
        return {
          ...state,
          // Update the state after adding a new component
        };
      case PAGINATE:
        return {
          ...state,
          // Update the state after paginating
        };
      case DETAIL:
        return {
          ...state,
          detail: action.payload,
        };
      case ADD_TO_CART:
        const cardId = action.payload;
        const cardToAdd = state.allComponents.find((card) => card.id === cardId);
        return {
          ...state,
          cartItems: [...state.cartItems, cardToAdd],
        };
      case REMOVE_FOR_CART:
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      case EMPTY_CART:
        return {
          ...state,
          cartItems: [],
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  