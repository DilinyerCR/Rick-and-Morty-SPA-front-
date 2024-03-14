import { 
    GET_CHARACTER, 
    ADD_FAVORITE, 
    REMOVE_FAVORITE, 
    GET_RANDOM, 
    REMOVE_CHARACTER ,
    ORDER_BY_NAME,
    FILTER_BY_GENDER
} from '../actions-types/actions-types';


const initialState = {
    myFavorites: [],
    allCharacters: [],
    filteredCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
        return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload],
            filteredCharacters: [...state.myFavorites, action.payload]
        }
        
        case REMOVE_FAVORITE: 
        return {
            ...state,
            myFavorites: state.myFavorites.filter((char) => char.id !== Number(action.payload))
        }

        case GET_CHARACTER:
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
        }

        case GET_RANDOM:
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
        }

        case REMOVE_CHARACTER:
            return {
                ...state,
                allCharacters: state.allCharacters.filter((character) => character.id !== Number(action.payload))
            }

        
        case FILTER_BY_GENDER:
            return {
                ...state,
                filteredCharacters: action.payload !== "All" 
                ? state.myFavorites.filter((char) => char.gender === action.payload) 
                : state.myFavorites
            }

        case ORDER_BY_NAME:
            const sortedCharacters = state.filteredCharacters.slice().sort((a, b) => {
                if(action.payload === "A") {
                    return a.id - b.id
                } else {
                    return b.id - a.id
                }
            })

            return {
                ...state,
                filteredCharacters: sortedCharacters
            }

        default:
            return {...state}
    }
}

export default reducer;