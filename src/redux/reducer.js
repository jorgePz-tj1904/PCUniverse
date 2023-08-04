import { GET_COMPONENTS, GET_BY_NAME, POST_COMPONENTS, PAGINATE, DETAIL } from './actions-types'

const initailState = {
    allComponents: [],
    componentsP: []
}

function reducer(state = initailState, action) {

    switch (action.type) {
        case GET_COMPONENTS:
            return {
                ...state,
                componentsfilters: action.payload,
                allComponents: action.payload,
            };

            //-------------------------------------------------------------------
            case GET_BY_NAME:
                return{
                    ...state,
                    allComponents:payload,
                    componentsP: [...payload]
                }
    
        default: return state;
    }
}

export default reducer;