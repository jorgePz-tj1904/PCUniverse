import {
  GET_COMPONENTS,
  ALL_COMPONENTS,
  GET_BY_NAME,
  POST_COMPONENTS,
  PAGINATE,
  DETAIL,
  GET_COMPONENTS_FINAL,
  ADD_TO_CART,
  REMOVE_FOR_CART,
  EMPTY_CART,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  ALL_PC,
  GET_USERS,
  GET_ALL_COMMENTS,
  UPDATE_USER_ROLE, 
  POST_COMENTARIO,
  GET_COMENTARIOS,
  UPDATE_PRICE,
  UPDATE_STOCK,
} from './actions-types';

const initialState = {
  allComponents: [],
  components:[],
  componentsP: [],
  pcFinals: [],
  allComponentsF: [],
  detail: [],
  cartItems: [],
  users: [],
  allUsers: [],
  allComments: [],
  review: [],
  comments:[],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_COMPONENTS:
        return {
          ...state,
          components: action.payload,
          allComponents: action.payload,
        };
        case 'FILTER_BY_CATEGORY':
          const componets = state.components
          const statusFiltered  = action.payload === 'todos' ? componets : componets.filter(e=> e.categoria === action.payload)
          return {
            ...state,
            allComponents: statusFiltered
          }
          case ALL_PC:
        return{
          ...state,
          pcFinals: action.payload
        }
          case "APPLY_PRICE_ORDER":
            const priceOrder =
              action.payload === "asc"
                ? state.allComponents.slice().sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio))
                : state.allComponents.slice().sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
      
            return {
              ...state,
              allComponents: priceOrder,
            };
    case GET_COMPONENTS:
      return {
        ...state,
        componentsP: action.payload,
        allComponents: action.payload,
      };
      case POST_COMENTARIO:
        return{
          ...state,
          review: action.payload
        }
      case GET_COMENTARIOS:
        return{
          ...state,
          comments: action.payload
        }
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
    case REGISTER_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
      case GET_USERS:
        return {
          ...state,
          allUsers: action.payload
        };
        case GET_ALL_COMMENTS:
          return {
            ...state,
            allComments: action.payload
          };
          case 'UPDATE_COMMENTS':
      return {
        ...state,
        allComments: action.payload,
      }; 
      case UPDATE_USER_ROLE:
  const updatedAllUsers = state.allUsers.map((user) => {
    if (user.id === action.userId) {
      return { ...user, roleId: action.newRole }; // Cambia 'role' a 'roleId'
    }
    return user;
  });
  return {
    ...state,
    allUsers: updatedAllUsers,
  };
  case UPDATE_PRICE:
      return {
        ...state,
        allComponents: state.allComponents.map(component => {
          if (component.id === action.id) {
            return {
              ...component,
              precio: action.newPrice,
            };
          }
          return component;
        }),
      };
  case UPDATE_STOCK:
      return {
        ...state,
        allComponents: state.allComponents.map(component => {
          if (component.id === action.id) {
            return {
              ...component,
              precio: action.newStock,
            };
          }
          return component;
        }),
      };
    default:
      return state;
  }
}

export default reducer;
