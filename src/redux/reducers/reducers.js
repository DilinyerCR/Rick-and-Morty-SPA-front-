import { GET_CHARACTER, ADD_FAVORITE, REMOVE_FAVORITE, GET_RANDOM, REMOVE_CHARACTER } from '../actions-types/actions-types';

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
        return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload]
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

        default:
            return {...state}
    }
}

export default reducer;