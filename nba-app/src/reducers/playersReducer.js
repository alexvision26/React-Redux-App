import { FETCH_PLAYER, UPDATE_PLAYER, FETCH_STATS, UPDATE_STATS, SET_ERROR } from '../actions/index';

export const initialState = {
    player: {},
    stats: [],
    isFetchingData: false,
    error: ''
}

export const playersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PLAYER:
            return {
                ...state,
                isFetchingData: true,
            }
        case UPDATE_PLAYER:
            return {
                ...state,
                player: action.payload,
                isFetchingData: false
            }

        default:
            return{
                ...state
            }
    }
}