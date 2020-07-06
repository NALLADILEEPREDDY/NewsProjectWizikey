import { FETCH_SOURCES, FETCH_NEWS, ADD_FAVOURITE, REMOVE_FAVOURITE, SELECTED_NEWS, SELECTED_CHANNEL, HEADLINE_FETCH_ERROR, SOURCE_FETCH_ERROR} from "../_actions/actionTypes"

const intialState = {
    sources: [],
    favourites:[],
    articles: [],
    selectedNews: null,
    selectedChannel: 'Company',
    sourceFetchError: false,
    headlineFetchError: false

}
export default function mainReducer(state = intialState, action) {
    switch(action.type)
    {
        case FETCH_SOURCES:
            return {
                ...state,
                sources : action.payload
            }
        case FETCH_NEWS:
            return {
                ...state,
                articles : action.payload
            }
        case SELECTED_CHANNEL:
                return{
                    ...state,
                    selectedChannel: action.payload
                }
        case SELECTED_NEWS:
            return{
                ...state,
                selectedNews: action.payload
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites :  [...state.favourites, action.payload]
            }
        case REMOVE_FAVOURITE:{
           return {
                ...state,
                favourites: action.payload
            }
        } 
        case HEADLINE_FETCH_ERROR:
            return {
                ...state,
                headlineFetchError: action.payload
            }
        case SOURCE_FETCH_ERROR:
            return {
                ...state,
                sourceFetchError: action.payload
            }   
        default:
            return state
    }
   
}