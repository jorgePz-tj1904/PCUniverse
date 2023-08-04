import { GET_COMPONENTS, GET_BY_NAME, POST_COMPONENTS, PAGINATE, DETAIL } from './actions-types'

const initailState = {
    allComponents: [],
    componentsP: []
}

function reducer(state = initailState, action) {
    const iTEMS_PER_PAGE = 10;

    switch (action.type) {
        case GET_COMPONENTS:
            return {
                ...state,
                allComponents: action.payload,
                componentsP: [...payload].splice(0, iTEMS_PER_PAGE)
            };

            //-------------------------------------------------------------------
            case GET_BY_NAME:
                return{
                    ...state,
                    allComponents:payload,
                    componentsP: [...payload]
                }
    
        default: return {...state};
    }
}

export default reducer;