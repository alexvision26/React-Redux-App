import axios from 'axios';

export const FETCH_PLAYER = 'FETCH_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const FETCH_STATS = 'FETCH_STATS';
export const UPDATE_STATS = 'UPDATE_STATS';
export const SET_ERROR = 'SET_ERROR';

export const getPlayer = () => dispatch => {
    axios.get().then().catch()
}

export const getStats = () => dispatch => {
    axios.get().then().catch()
}
