import { GET_COMPONENTS, GET_BY_NAME, POST_COMPONENTS, PAGINATE, DETAIL, GET_COMPONENTS_FINAL } from './actions-types'

const initailState = {
    allComponents: [],
    componentsP: [],
    allComponentsFcomponentsF: [],
    // componentsfilters: [],
    detail:[]
}

function reducer(state = initailState, action) {

    switch (action.type) {
        case GET_COMPONENTS:
            return {
                ...state,
                componentsfilters: action.payload,
                allComponents: action.payload,
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
            
    
        default: return state;
    }
}

export default reducer;