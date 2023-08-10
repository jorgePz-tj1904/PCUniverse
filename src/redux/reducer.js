import { GET_COMPONENTS, GET_BY_NAME, POST_COMPONENTS, PAGINATE, DETAIL, GET_COMPONENTS_FINAL, ADD_TO_CART, REMOVE_FOR_CART, EMPTY_CART,  ALL_PC, ALL_COMPONENTS, } from './actions-types'

const initailState = {
    allComponents: [],
    componentsP: [],
    allComponentsF: [],
    // componentsfilters: [],
    detail:[],
    cartItems: []
}

function reducer(state = initailState, action) {

    switch (action.type) {
        case GET_COMPONENTS:
            return {
                ...state,
                componentsfilters: action.payload,
                allComponents: action.payload,
            };
         case ALL_PC:
            return{
                ...state,
                pcFinals: action.payload
             };
         case ALL_COMPONENTS:
            return{
               ...state,
                allComponents: action.payload
             };
        
            case GET_COMPONENTS_FINAL:
                return {
                    ...state,
                    componentsfilters: action.payload,
                    allComponentsF: action.payload,
                };
            // case FILTER_BY_CATEGORY:
            //     return {
            //       ...state,
            //       allComponents: action.payload,
            //     };

            //----------------------------Por Nombre---------------------------------------
            case GET_BY_NAME:
                return{
                    ...state,
                    allComponents:action.payload,
                    componentsP: [...action.payload]
                }

                case DETAIL:
                    return {
                      ...state,
                      detail: action.payload
                    };

                    case ADD_TO_CART:
                        const cardId = action.payload;
                        const cardToAdd = state.allComponents.find((card) => card.id === cardId);
                        return {
                          ...state,
                          cartItems: [...state.cartItems, cardToAdd],
                        };

                        case REMOVE_FOR_CART:
                            const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload);
                    return {
                        ...state,
                        cartItems: updatedCartItems,
                    };

                        case EMPTY_CART:
                    return {
                        ...state,
                        cartItems: [],
                    };
                        
        default: return state;
    }
}

export default reducer;