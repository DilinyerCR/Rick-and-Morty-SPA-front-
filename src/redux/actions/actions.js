import { 
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    GET_CHARACTER,
    GET_RANDOM,
    REMOVE_CHARACTER,
    FILTER_BY_GENDER,
    ORDER_BY_NAME
} from '../actions-types/actions-types';

export const addFav = (char) => {
    return {
        type: ADD_FAVORITE,
        payload: char
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}

export const getCharacter = (id) => {
    return async (dispatch, getState) => {
        try {
            //Primero hace la peticion a la API
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json(); //Obtiene la respuesta

            // Verificar si el ID ya existe en el estado
            const allCharacters = getState().allCharacters; // getState es una función proporcionada por Redux que te permite acceder al estado actual del store.
            const characterExists = allCharacters.some(character => character.id === data.id);

            if (characterExists) {
                // Si el personaje ya existe, mostrar un alerta y salir de la función
                alert("Este personaje ya está en la lista");
                return;
            }

            // Si no existe entonces despacha la action al reducer
            dispatch({
                type: GET_CHARACTER, 
                payload: data
            });

        } catch (error) {
            console.error('Error fetching character:', error);
        }
    }
}

export const getRandom = () => {
    return async (dispatch, getState) => {
        try {
            //Creamos una funcion para obtener un numero random
            let getRandomNumber = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
              };
            
            //Con eso le indicamos que el numero random sea entre 1 y 826 (numero minimo y maximo de personajes de la API)
            let randomId = getRandomNumber(1, 826);

            //Se hace la peticion a la API con el "ID Random"
            const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json(); //Obtiene la respuesta

            // Verificar si el ID ya existe en el estado
            const allCharacters = getState().allCharacters; // getState es una función proporcionada por Redux que te permite acceder al estado actual del store.
            const characterExists = allCharacters.some(character => character.id === data.id);

            if (!characterExists) {
                // Si el personaje NO existe, despacha la action al reducer
                dispatch({
                    type: GET_RANDOM, 
                    payload: data
                });
            } else {
                //Si el personaje existe la funcion vuelve a invocarse a si misma (Recursion)
                getRandom()
            }

        } catch (error) {
            console.error('Error fetching character:', error);
        }
    }
}

export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload: id
    }
}

export const filterByGender = (gender) => {
    return {
        type: FILTER_BY_GENDER,
        payload: gender
    }
}

export const orderByName = (order) => {
    return {
        type: ORDER_BY_NAME,
        payload: order
    }
}




