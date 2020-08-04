import axios from 'axios';

export const FETCH_PLAYER = 'FETCH_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const FETCH_STATS = 'FETCH_STATS';
export const UPDATE_STATS = 'UPDATE_STATS';
export const SET_ERROR = 'SET_ERROR';

export const getPlayer = (first, last) => dispatch => {
    dispatch({ type: FETCH_PLAYER })
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${first}_${last}`).then(res => {
        console.log(res)
        dispatch({ type: UPDATE_PLAYER, payload: res.data.data[0] })
    }).catch(err => {
        console.log('error:', err)
    })
}

export const getStats = () => dispatch => {
    axios.get().then().catch()
}
