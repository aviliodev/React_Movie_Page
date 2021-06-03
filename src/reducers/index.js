const reducer = (state,action) => {
    // Un action de Redux va a contener dos elementos:

    // type: para indicar la acción que se va a ejecutar.
    // payload: es la información que estamos mandando al reducer. El payload es lo que vamos a enviarle a la acción, que recibirá el reducer, para actualizar el Store o actualizar el estado.
    
    // Dentro de los reducers usaremos un switch para separar la lógica por cada tipo de acción que tendremos en Redux.
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                mylist: [...state.mylist, action.payload]

            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                mylist: state.mylist.filter(items => items.id !== action.payload)
                // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
            
        default:
            return state;
    }
}

export default reducer