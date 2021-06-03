export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
})

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
})

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
})

export const LogoutRequest = payload => ({
    type:   'LOGOUT_REQUEST',
    payload,
})